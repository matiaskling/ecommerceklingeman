import React, { useState } from 'react'
import '../styles/itemDetail.css' 
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import useCartContext  from '../Context/CartContext'



function ItemDetail({prod, onAdd}) {

    const [goCart, setGoCart ] = useState(false)

    const {addCart} = useCartContext();


     onAdd = (cant) => {
        console.log(cant)
        addCart( {...prod, cantidad:cant} ) 
      
    }

    


    return (
        <main className="container" key={prod.id}>
         
            <div className='img-product'>
                <img src={prod.img}></img>
            </div>

            <div className='right-column'>
                <div className='product-description'>
                    <h1>{prod.name}</h1>
                    <span>{prod.category}</span>
                    <p>{prod.description}</p>
                    <p>Disponibles: <span className='stock'>{prod.stock}</span></p>
                    <div className='product-price'>
                    <span>${prod.price}</span>
                    </div>
                    <p> {!goCart ? (
                        <ItemCount stock={prod.stock} initial={1} onAdd={onAdd} />
                            ) : (
                        <Link to="/cart">Ver productos del carrito</Link>
                    )}</p>
                </div>

                

               
                <div className='cart'>
                   
                </div>


            </div>

        </main>
    )
}

export default ItemDetail
