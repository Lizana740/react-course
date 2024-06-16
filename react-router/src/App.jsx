import './App.css'
import { Suspense, lazy } from 'react'
import { Route, Router } from './router/router'

const LazySearch = lazy( ()=> import('./component/Search'))
const LazyAbout = lazy(()=>import('./component/About'))
const LazyHome  = lazy(()=> import('./component/Home'))



const routes = [
  {path:'/', Component: LazyHome},/* 
  {path:'/about', Component: About},
  {path:'/search/:query', Component:Search} */
]

function App() {
  return (
    <>
    <main>
     <h1>React - Router</h1>
     <div>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Router routes={routes}>
          <Route path='/about' Component={LazyAbout}/>
          <Route path='/search/:query' Component={LazySearch}/>
        </Router>
      </Suspense>
     </div>
    </main>
    </>
  )
}

export default App
