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

        
         const allItems = ()  => {
            return cartList.reduce((acc, prod) => acc + prod.quantity, 0);
         }
        

        const removeItem = (id) => {
           const removed = setCartList( cartList.filter(prod => prod.id !== id))
            return removed;
        }


        const totalAmount = () => {
            return cartList.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
                
        }
      
      

        function removeCart(){
            setCartList([])
        }


    return (
        <CartContext.Provider 
            value={{
                cartList,
                addCart,
                removeCart,
                removeItem,
                allItems,
                totalAmount,

              
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;