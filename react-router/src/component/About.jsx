import { Link } from "../router/router";


export default function About(){
    return(
    <>
    <h1>About Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At impedit quas omnis iure suscipit, minus facere ipsum corporis exercitationem inventore sed quasi, cupiditate hic totam ut eveniet temporibus nemo? Alias.</p>
    {/* <a href='/'>Ir al Inicio</a> */}
    <Link to='/' >Ir a about</Link>
    </>
    )
  }