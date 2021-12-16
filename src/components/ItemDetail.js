import React from 'react'
import '../styles/itemDetail.css' 
import ItemCount from './ItemCount'


function ItemDetail({prod}) {

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
                    <p><ItemCount stock={prod.stock} initial={1}/></p>
                </div>

                <div className='product-price'>
                    <span>${prod.price}</span>
                </div>

                <div className='cart'>
                   
                </div>


            </div>

        </main>
    )
}

export default ItemDetail
