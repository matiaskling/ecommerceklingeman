import { useCartContext } from "../Context/CartContext"

function Cart() {

    const {  cartList, removeCart  } = useCartContext()

    return (
        <div>
            {  cartList.map(prod=> <li>{prod.name}   {prod.cantidad}</li>) }
            <button onClick={removeCart} >Vaciar Carrito</button>
        </div>
    )
}

export default Cart
