import { useMemo, useState } from "react"
import "./App.css"
import ListUser from "./components/ListUser"
import { User } from "./type"
import { useUsers } from "./hooks/useUsers"
import { Result } from "./components/Result"

function App() {
  const { isLoading, users, refetch, isError, fetchNextPage } = useUsers()
  const [color, setColor] = useState(false)
  const [country, setCountry] = useState("")
  const [sortByCountry, setSortByCountry] = useState(false)

  const sortedUsers = useMemo(() => {
    return sortByCountry
      ? users.toSorted((a, b) => {
          return a.location.country.localeCompare(b.location.country)
        })
      : users
  }, [sortByCountry, users])

  const filterUsers = useMemo(() => {
    return typeof country === "string" && country.length > 0
      ? sortedUsers.filter((user: User) =>
          user.location.country.toLowerCase().includes(country.toLowerCase())
        )
      : sortedUsers
  }, [country, sortedUsers])

  const toggleColor = () => {
    setColor(!color)
  }
  const toggleSorByCountry = () => {
    setSortByCountry(!sortByCountry)
  }
  const handleDelete = (email: string) => {
    const filter = users.filter((user) => user.email != email)
  }
  const handleReset = () => {
    refetch()
  }

  return (
    <>
      <h1>Lista de usuarios</h1>
      <header>
        <button onClick={toggleColor} style={{ margin: "5px" }}>
          {" "}
          Colorear filas
        </button>
        <button onClick={toggleSorByCountry} style={{ margin: "5px" }}>
          {" "}
          Ordenar por país
        </button>
        <button onClick={handleReset} style={{ margin: "5px" }}>
          {" "}
          Reset{" "}
        </button>
        <input
          style={{ margin: "5px" }}
          placeholder="Ingrese país"
          onChange={(e) => {
            setCountry(e.target.value)
          }}
        />
      </header>
      <main>
        {!isLoading && isError && <p>Error en la carga de usuarios</p>}
        <Result />
        {users.length > 0 && (
          <ListUser
            users={filterUsers}
            color={color}
            deleteUser={handleDelete}
          />
        )}
        {isLoading && <p>Cargando...</p>}
        {!isLoading && users.length > 0 && !isError && (
          <button onClick={() => void fetchNextPage()}> Mostrar más ...</button>
        )}
      </main>
    </>
  )
}

export default App
