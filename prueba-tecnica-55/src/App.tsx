import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUser] = useState(0);
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=100", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res.results);
      })
      .catch((erro) => console.log(erro));
  },[])


  return (
    <>
      <h1>Prueba tecnica</h1>
      {JSON.stringify(users)}
    </>
  );
}

export default App;
