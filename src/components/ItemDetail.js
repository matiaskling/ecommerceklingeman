import React, { useState } from 'react'
import '../styles/itemDetail.css' 
import ItemCount from './ItemCount'
import useCartContext  from '../Context/CartContext'



function ItemDetail({prod}) {
    

    const {addCart} = useCartContext()

    function onAdd (cant){
        console.log(cant)
        addCart( {...prod, cantidad:cant} ) 
    }


    return (
        <main className="container" key={prod.id}>
         
            <div className='img-product'>
                {/* <img src={prod.img}></img> */}
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
                    <p> 
                    <ItemCount onAdd={onAdd} stock={10} />
                           
                    </p>
                </div>

                <div className='cart'>
                   
                </div>


            </div>

        </main>
    )
}

export default ItemDetail
