import React, { useState } from 'react'
import { memo } from 'react';
import { Link } from "react-router-dom";
import '../styles/itemDetail.css' 
import ItemCount from './ItemCount'
import {useCartContext}  from '../Context/CartContext'
import {Card } from 'react-bootstrap'



const  ItemDetail = memo (({prod}) => {
    

    const {addCart} = useCartContext()

    const [goCart, setGoCart] = useState(false)

    function onAdd (Qy){
        addCart( {...prod, quantity:Qy} ) 
        setGoCart(true);
    }


    return (
        <main className="container" key={prod.id}>
         
         <Card.Img variant="top" src={prod.img} style= {{width:'300px', height:'300px'}}/>

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
                    {goCart === false ? (
                    <ItemCount stock={prod.stock} initial={1} onAdd={onAdd} />
                    ) : (
                    <Link className="goCart" to="/cart">Ir al carrito</Link>
                   
                     )}  
                       
                    </p>
                </div>

                <div className='cart'>
                   
                </div>


            </div>

        </main>
    ) 
} )

export default ItemDetail
