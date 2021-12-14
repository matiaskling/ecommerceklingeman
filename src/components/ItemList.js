import React from 'react'
import Item from './Item'


function ItemList({products}) {
    return (
        <div>
        { products.map((prod) => <Item prod= {prod} key={prod.id}/> )}

        </div>
    
       
    )
}


export default ItemList