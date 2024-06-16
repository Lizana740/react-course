
import { Card } from './Card.jsx'

const users =[
    {
        email:"panco.lizan1",
        name: "Francisco Lizana",
        isFollowing :true
    },
    {
        email:"panco.lizan1",
        name: "Maria Cortes",
        isFollowing :false
    }
]
export function App(){
    return (
        <>
        {
            users.map(({email, name, isFollowing}) => {
                return(
                    <Card 
                    key={name}
                    eMail={email}
                    isFollowing={isFollowing}
                >{name}</Card>
                )
            })
        }
        </>
    )
}