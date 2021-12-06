import React from 'react'
import { useState, useEffect } from 'react'
import {getFetch} from '../helpers/products';
import ItemList from './ItemList';






export function ItemListContainer() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch.then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {loading ?
            <h2>Cargando</h2> :
           
           <ItemList products={products} />
                         }
        </div>
    )
}
