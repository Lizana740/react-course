import { useEffect, useState } from 'react'
import {getRandomFact} from './services/cat-services'
import { useGetImage } from './hooks/useGetImage'
import './App.css'

function App() {
  const[fact, setFact] = useState('lorem')
  const {image, stateButton} = useGetImage({fact})
  
  useEffect(()=> {
      getRandomFact()
        .then((fact) => setFact(fact))
  },[])

  const handledClick = async ()=>{
    const fact = await getRandomFact()
    setFact(fact)
  }
  
  return (
    <main>
      <h1>App de gatos</h1>
      { stateButton && <button onClick={handledClick} >Get New Cat</button>}
      { !stateButton && <button  disabled >...</button>}
      
      <section>
      {fact && <p> {fact} </p>}
      {image && <img src={'https://cataas.com/cat/'+image} alt='Image of random cats'  />}
      </section>
    </main>
  )
}

export default App
