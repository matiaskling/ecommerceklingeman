import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext)


    function CartContextProvider({ children }){

        const [cartList, setCartList] = useState([])

        function addCart (item) {
            const index = cartList.findIndex((i) => i.id === item.id)
  
            if (index > -1) {
              const oldQy = cartList[index].cantidad
    
              cartList.splice(index, 1)
  
             
            setCartList((cartList) => [
                ...cartList,
                { ...item, cantidad: item.cantidad + oldQy },
            ]);
        
            } else {
              setCartList([...cartList,item])
            }
        }

        function removeCart(){
            setCartList([])
        }


    return (
        <CartContext.Provider 
            value={{
                cartList,
                addCart,
                removeCart
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;