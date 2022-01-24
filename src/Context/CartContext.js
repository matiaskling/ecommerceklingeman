import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext)


    function CartContextProvider({ children }){

        const [cartList, setCartList] = useState([])


        function addCart (prod) {
            const index = cartList.findIndex((i) => i.id === prod.id)
  
            if (index > -1) {
              const oldQy = cartList[index].quantity
    
              cartList.splice(index, 1)
  
             
            setCartList((cartList) => [
                ...cartList,
                { ...prod, quantity: prod.quantity + oldQy },
            ]);
        
            } else {
              setCartList([...cartList,prod])
            }
        }

        function removeCart(){
            setCartList([])
        }

        const removeItem = (id) => {
            setCartList( cartList.filter(prod => prod.id !== id))
        }

        const addQuantity = (prod) => {

        


        }

        const removeQuantity = (prod) => {

            

        }


    return (
        <CartContext.Provider 
            value={{
                cartList,
                addCart,
                removeCart,
                removeItem,

              
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;