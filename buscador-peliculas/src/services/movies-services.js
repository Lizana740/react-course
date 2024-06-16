import {API_URL} from '../consts/const'

export const serachMoviesByName = async(tag)=>{
    const res = await fetch(`${API_URL}s=${tag}`)
    const data = await res.json()
    if (data.Error)return []
    return data.Search.map(mv => (
        {
            key:mv.imdbID,
            title:mv.Title,
            year:mv.Year,
            poster:mv.Poster,
        }
    ))
}