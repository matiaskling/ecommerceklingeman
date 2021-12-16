import React, { useState, useEffect } from 'react'
import { getFetch } from '../helpers/products'
import ItemDetail from './ItemDetail'
import {useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [item, setProduct] = useState([])

    const {id} = useParams();


    useEffect(() => {
        if (id) {
            getFetch
        .then(resp => setProduct(resp.filter(prod => prod.id === parseInt(id))))
        .catch(err => console.log(err))

        } else {
            getFetch
            .then(resp => setProduct(resp))
            .catch(err => console.log(err)) 
        }
        
    },[id])


    return (
        <div>
           {item.map((prod) => (
        <ItemDetail prod={prod} key={prod.id} />
      ))}
        </div>
    )
}

export default ItemDetailContainer
