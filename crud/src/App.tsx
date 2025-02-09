import { Toaster } from 'sonner'
import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import ListUser from './components/ListUser'

function App() {

  return (
    <>
    <CreateNewUser></CreateNewUser>
    <ListUser></ListUser>
    <Toaster richColors></Toaster>
    </>
  )
}

export default App
