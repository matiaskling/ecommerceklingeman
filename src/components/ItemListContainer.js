import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {getFetch} from '../helpers/products';
import ItemList from './ItemList';






export function ItemListContainer() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {idCate} = useParams()


    useEffect(() => {
        if (idCate) {

            getFetch
            .then(resp => setProducts(resp.filter(prod => prod.category === idCate)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
 
        } else {

            getFetch
            .then(resp => setProducts(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }


    
    }, [idCate])

    return (
       
            <div>
                {loading ?
                    <h2>Cargando</h2> :
                
                 <ItemList products={products} />
                }
            </div>
    )
}
