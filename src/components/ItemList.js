import React from 'react'
import Item from './Item'
import '../styles/itemList.css' 


function ItemList({products}) {
    return (
        <main className='flex-container'>
     
        { products.map((prod) => <Item prod= {prod} key={prod.id}/> )}

       </main>

       
        
       
    )
}


export default ItemList