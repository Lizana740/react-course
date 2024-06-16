/* eslint-disable react/prop-types */
export function ListOfMovies({movies}){
    return(
      <>
      {
        movies.length!=0 ?
        <ul className="movies">
          {
        movies.map( mv =>(
          <Movie className='movie'
            key={mv.key}
            title={mv.title}
            year={mv.year}
            poster={mv.poster}
          />
          ))
          }
        </ul>
        :
          <NotMovie></NotMovie>
      }
      </>
    )

}

export function Movie({title, poster, year}){
  return (
  <li className="movie" >
    <h3>{title}</h3>
    <p>{year}</p>
    <img src={poster} alt={title} />
  </li>
  )
}

export function NotMovie(){
  return(<p>No se han encontrado peliculas</p>)
}