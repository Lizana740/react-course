//import { useRef } from 'react'
import { useCallback, useState } from 'react'
import './App.css'
import { ListOfMovies } from './components/list-movies'
import { useLoader } from './hooks/useLoader'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'


function App() {
  //const inputRef = useRef()
  const {query,setQuery, error} = useSearch()
  const [sort, setSort] = useState(false)
  const {movies,getMovies} = useMovies({sort})
  const {loader} = useLoader()
  

  const undebauns = useCallback(
    debounce((search)=>{getMovies(search)},2000)
  ,[])

  const handledClick = (event)=>{
    event.preventDefault()
    getMovies(query)
  }
  const handleChange = (event)=>{
    const newSearch = event.target.value
    setQuery(newSearch)
    undebauns(newSearch)
  }
  const handleSort =()=>{
    setSort(sort?false:true)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handledClick}>
          <input 
            onChange={handleChange}
            type="text" 
            value={query}
            placeholder='Ingrese nombre de pelicula' 
            //ref={inputRef}
            name='search'
            required
          />
          <input type='checkbox' onChange={handleSort} checked={sort}/>
          
          {error && (<span className='error' >{error}</span>)}
          <button type='submit'>Buscar</button>
        </form>
      </header>
      { loader && <span>Opteniendo datos</span>}
      <main>
        {
          <ListOfMovies movies={movies} />
        }
      </main>
    </div>
    
  )
}

export default App
