import { User } from "../type";

export const fecthUsers = async ({ pageParam}:{pageParam:number}):Promise<{ users: User[]; nextCursor: number }> => {
  const res = await fetch(
    `https://randomuser.me/api/?results=10&seed=lz&page=${pageParam}`
  )
  if (!res.ok) throw new Error("Error en la carga de usuarios")
  const data = await res.json()
  return {
    users: data.results,
    nextCursor: data.info.page + 1,
  }
}
