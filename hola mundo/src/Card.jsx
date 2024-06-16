import './Card.css';
import { useState } from 'react';
export function Card({children, eMail="undefined", isFollowing}) {
  const [get, set] = useState(isFollowing)
  const seguir = () =>{
    set(get? false:true)

  }
  return(
    <article className='tw-foll'
      >
      <header>
        <img src="https://images.vexels.com/media/users/3/136558/isolated/lists/43cc80b4c098e43a988c535eaba42c53-icono-de-usuario-de-persona.png" alt="No encontrado"/>
      <div>
        <strong>{children}</strong>
        <span>{eMail}</span>
      </div>
      </header>
      <aside>
        <button onClick={seguir}>{get?'Siguiendo':'Seguir'}</button>
      </aside>
    </article>
  )
}