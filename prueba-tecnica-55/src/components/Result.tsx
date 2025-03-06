import { useUsers } from "../hooks/useUsers"

export function Result(){
    const {users}= useUsers()
    return(<h3>{users.length}</h3>)
}