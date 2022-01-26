import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList';
import {collection, getFirestore, getDocs, query, where} from 'firebase/firestore'


export function ItemListContainer() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
 
    const {idCate} = useParams()


    useEffect(()=>{
        const db = getFirestore()

        if(idCate){

            const queryCollection = query(collection(db, 'products'), where('category', '==', idCate))

            getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(prod =>  ({ id: prod.id, ...prod.data() }) )))
            .finally(()=> setLoading(false))

        } else {

            const queryCollection = collection(db, 'products')
            getDocs(queryCollection)
            .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
            .finally(setLoading(false))
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
