import { createContext,useReducer} from "react";

export const CartContext = createContext()

const initialState = []
const reduce = (state,action ) => {
    const {type:actionType, payload:actionPayload}= action 
    switch(actionType){
        case 'ADD_TO_CART':{
            const {id}= actionPayload
            const indexProduct = state.findIndex(item => item.id == id)
            if(indexProduct >= 0){
                const newState = structuredClone(state)
                newState[indexProduct].quantity +=1
                
                return newState
            }else{
                return[...state, {...actionPayload,quantity: 1}]

            }
        }
        case 'REMOVE_FOR_CART':{
            const {id}= actionPayload
            return state.filter(item => item.id != id)
        }
        case 'CLEAR_CART':{
            return initialState
        }
            
    }

}

export function CartProviders({children}){
    /* const [cart,setCart]= useState([]) */
    const [state, dispache ]= useReducer(reduce,initialState)
    const addToCart = product => dispache({
        type:'ADD_TO_CART',
        payload:product
    })

    const clearCart = () => dispache({
        type:'CLEAR_CART'
    })


    return(
        <CartContext.Provider 
            value={{cart:state,addToCart, clearCart}}
        >
            {children}
        </CartContext.Provider>
    )
}