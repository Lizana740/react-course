import { useCart } from '../../hooks/useCart'
import './Carrito.css'
import { useId } from "react"

export function Carrito(){
    const idCarrito = useId()
    const {cart,addToCart, clearCart} = useCart()
    console.log(cart.length)

    return(
        <>
        <label className="cart-button" htmlFor={idCarrito}>
        <i className="fa-solid fa-cart-shopping"></i>
        </label>
        <input className="hiden" id={idCarrito} type='checkbox' />
        <aside className="cart">
        {
            cart.map(p=>(
                <div key={p.id}>
            <ul>
                <li>
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6yjrizxjHuv-CQa7tlCMDhOnx4hO46ZP_N6OLLIUiCinQ99cwZkXAxfxOJzMkpyV3poWLSdsPZzr5yG7pLvtzEWn0BgILBYa-iVVmMyoEBsT59G_ZMpJkOEne9xXLwrTXDX2v0js&usqp=CAc" alt="" />
                </li>
                <div>
                    <strong>{p.title}</strong> ${p.price}
                </div>
                <footer>
                    <small>{p.quantity}</small>
                    <button onClick={()=>{addToCart(p)}}><i className='fa-saolid fa-plus'></i></button>
                </footer>
            </ul>
                </div>
            ))
        }
        {
            cart.length!=0 && (<button onClick={clearCart}><i className='fa-solid fa-trash'></i></button>)
        }
            
        </aside>
        </>
    )
}