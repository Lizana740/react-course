import { useEffect, useState,useRef} from "react"

export function useSearch(){
    const [query,setQuery] = useState('')
    const [error, setError] = useState('')
    const firstSearch = useRef(true)

    useEffect(()=>{
        setError('')
        if(firstSearch.current){
            firstSearch.current = (query=='')
            return
        }
        
        if(query == ''){
            setError('El campo no puede estar vacio')
            return
        }

        if(query.length < 3){
            setError('El campo no puede tener menos de 3 caracteres')
            return
        }

    },[query])

    return {query,setQuery, error}
}