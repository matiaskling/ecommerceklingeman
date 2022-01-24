import { useCartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"


function Cart() {

    const {  cartList, removeCart, removeItem  } = useCartContext()

    return (

        <section>
  
            {cartList.length === 0 ? (
                <>
                 <h3>¡El carrito esta vacio :( ! </h3> 
                <button><Link to="/">Ir a los productos</Link></button>
                </>
            ) : (
                 

            <table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                {  cartList.map((prod) => (
                    <tr>
                        <th>{prod.name}</th>
                        <th>{prod.cantidad}</th>
                        <th>{prod.price}</th>
                    </tr>


                ))}
                
                </tbody>
            </table>









         )}
        </section>

        
       









     
    )
}




export default Cart
