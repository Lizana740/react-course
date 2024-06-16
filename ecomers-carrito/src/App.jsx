import './App.css'
import p from './assets/products.json'
import { Products } from './components/Products/Products'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Carrito } from './components/Carrito/Carrito'
import { CartProviders } from './context/cart'


function App() {
  return (
    <>
    <CartProviders >
      <Carrito></Carrito>
      <Header ></Header>
      <Products products={p.products}></Products>
    </CartProviders>
    <Footer/>
    </>
  )
}

export default App
