import { useCartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"

function Cart() {

    const {  cartList, removeCart  } = useCartContext()

    return (
        <div>
            {  cartList.map(prod=> <li>{prod.name}   <p>Cant: {prod.cantidad}</p></li>) }
            <button onClick={removeCart}>Vaciar Carrito</button>
        </div>
    )
}




export default Cart
