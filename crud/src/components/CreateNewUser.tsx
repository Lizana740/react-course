import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/UserActions";
import React, { useState } from "react";

export function CreateNewUser() {
  const { addUser } = useUserActions();
  const [result,setResult] = useState<'ok'|'ko'|null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() 
    setResult(null)
    const form = event.target
    const formData = new FormData(form)
    const email = formData.get('email') as string
    const name = formData.get('name') as string
    const age = parseInt(formData.get('age') as string)
    if(!name || !email || !age){
      return setResult('ko')
    }
    addUser({name,age,email})
    form.reset()
    setResult('ok')
  };
  return (
    <Card>
      <Title>Crear nuevo Usuario</Title>
      <form className="" onSubmit={handleSubmit}>
        <TextInput name="name"placeholder="Ingrese nombre "></TextInput>
        <TextInput name="email" placeholder="E-mail "></TextInput>
        <TextInput name="age" placeholder="Edad "></TextInput>
        <br />
        <Button type="submit">Crear usuario</Button>
        <span>
          {result == 'ok' && <Badge color='green'> Guardado correctamente</Badge>}
          {result == 'ko' && <Badge color='red'> Error</Badge>}
        </span>
      </form>
    </Card>
  );
}
