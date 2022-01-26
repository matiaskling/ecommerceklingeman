import {BsTrashFill} from "react-icons/bs";
import { useCartContext } from "../Context/CartContext"
import { Link} from "react-router-dom"
import { Button, Table } from "react-bootstrap"
import '../styles/cart.css'


function Cart() {

    const {  cartList, removeCart, removeItem, totalAmount } = useCartContext()

    

    return (

        <div>
  
            {cartList.length === 0 ? (
                <>
                 <h3>El carrito esta vacio :( </h3> 
               <Link to="/">Ir a los productos</Link>
                </>
            ) : (
  
            <Table responsive>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                {  cartList.map((prod) => (
                    <tr>
                        <th>{prod.name}</th>
                        <th>{prod.quantity}</th>
                        <th>{prod.price}</th>
                        <th>{prod.price * prod.quantity}</th>
                        <th><Button onClick={() => removeItem(prod.id)}><BsTrashFill/></Button></th>
                    </tr>
                ))}

                </tbody>
            <div className="container-final"> 
            <Button variant="secondary" onClick={removeCart}>Vaciar el Carrito</Button>
            <p>Total: ${totalAmount()}</p>
            </div>
                    
            <Link to="/Form"><Button className="ButtonFinishBuy">Terminar Compra</Button></Link>
                
            </Table>
            )} 
        </div>

        

     
    )
}




export default Cart
