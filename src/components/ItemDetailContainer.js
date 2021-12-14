import React, { useState, useEffect } from 'react'
import { getFetch } from '../helpers/products'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [item, setProduct] = useState([])


    useEffect(() => {
        getFetch
        .then(resp => setProduct(resp.find(prod => prod.id === 2)))
        .catch(err => console.log(err))
    })


    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer
