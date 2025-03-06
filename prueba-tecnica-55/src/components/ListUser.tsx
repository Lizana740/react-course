import { User } from "../type"

interface Props {
  users: User[]
  color: boolean
  deleteUser: (email: string) => void
}
export function ListUser({deleteUser, color, users }: Props) {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>País</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          let colorShow = "transparent"
          if (color) {
            const mod = index % 2 == 0
            colorShow = mod ? "#333" : "#555"
          }

          return (
            <tr key={user.email}>
              <td style={{ backgroundColor: colorShow }}>
                <img src={user.picture.thumbnail} alt={user.name.first} />
              </td>
              <td style={{ backgroundColor: colorShow }}>{user.name.first}</td>
              <td style={{ backgroundColor: colorShow }}>{user.name.last}</td>
              <td style={{ backgroundColor: colorShow }}>
                {user.location.country}
              </td>
              <td style={{ backgroundColor: colorShow }}>
                <button onClick={()=> deleteUser(user.email)}>Eliminar</button>
              </td>
            </tr>
          )
        })}
      </tbody>
      { users.length === 0 && (
        <tfoot>
          <tr>
            <td colSpan={5}>No hay usuarios</td>
          </tr>
        </tfoot>
      )}
    </table>
  )
}

export default ListUser
