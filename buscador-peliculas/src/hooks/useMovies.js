/* import withMovies from '../consts/example.json' */
import {useCallback, useMemo, useRef, useState } from 'react'
import { serachMoviesByName } from '../services/movies-services'

/**
 * @param {string} name tag of movie to search 
*/
export function useMovies({sort}){
    const[movies,setMovies] = useState([])
    const previusVal = useRef('')

    const getMovies = useCallback((name) => {
        if(previusVal.current == name) return
        previusVal.current = name
        serachMoviesByName(name).then((data)=>setMovies(data))
        }
    ,[])

    const sortedMovies = useMemo(()=>{
        return sort ? 
            [...movies].sort((a,b)=> a.title.localeCompare(b.title)):
            movies
    },[sort,movies])

    return { movies:sortedMovies, getMovies}
}