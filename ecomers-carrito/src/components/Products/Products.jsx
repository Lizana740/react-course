import { useCart } from '../../hooks/useCart'
import { useFilter } from '../../hooks/useFilter'
import './Products.css'
export function Products({products}){
    const {addToCart} = useCart()

    const {filterProduct } = useFilter()

    
    return(
        <main className='products'>
            <ul>
                {
                   filterProduct(products).map(p => (
                   <li key={p.id} >
                    <img src={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6yjrizxjHuv-CQa7tlCMDhOnx4hO46ZP_N6OLLIUiCinQ99cwZkXAxfxOJzMkpyV3poWLSdsPZzr5yG7pLvtzEWn0BgILBYa-iVVmMyoEBsT59G_ZMpJkOEne9xXLwrTXDX2v0js&usqp=CAc"} alt={p.description} />
                    <span>
                        <strong>{p.title} - ${p.price}</strong>
                    </span>
                    <div>
                        <button onClick={()=>{addToCart(p)}}> <i className='fa-saolid fa-plus'></i></button>
                    </div>
                   </li>
                
                ))}
            </ul>
        </main>
    )
}