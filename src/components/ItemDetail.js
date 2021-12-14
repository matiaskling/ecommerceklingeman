import React from 'react'


function ItemDetail({prod}) {

    return (
        <div key={prod.id}>
            <p>{prod.price}</p>
            <p>{prod.name}</p>
            <h1>Item Detail</h1>
        </div>
    )
}

export default ItemDetail
