import { Link } from "../router/router";


export default function Home(){
    return(
      <>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quasi nihil eaque! Laboriosam veniam ipsa ut, impedit commodi nihil aut ad reiciendis vel cupiditate velit tempora temporibus accusamus alias aspernatur.</p>
      <Link to='/about' >Ir a about</Link>
      </>
    )
  }