import React, { useState, useEffect } from 'react'
import { getFetch } from '../helpers/products'
import ItemDetail from './ItemDetail'
import {useParams } from 'react-router-dom'
import {collection, doc, getDoc, getFirestore, getDocs, query, where} from 'firebase/firestore'

function ItemDetailContainer() {
    const [prod, setProduct] = useState([])
    const [Loading, setLoading] = useState(true)

    const { category} = useParams();

    useEffect(()=>{
        const db = getFirestore()

        if(category){

            const queryCollection = query(collection(db, 'products'), where('category', '==', category))

            getDocs(queryCollection)
            .then(resp => setProduct(resp.docs.map(prod =>  ({ id: prod.id, ...prod.data() }) )))
            .catch(e => console.log(e))
            .finally(()=> setLoading(false))

        } else {

            const queryCollection = collection(db, 'products')
            getDocs(queryCollection)
            .then(resp => setProduct( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
            .catch(e => console.log(e))
            .finally(setLoading(false))
        }
    }, [category])


   


    return (
        <div>

            <ItemDetail prod={prod} key={prod.id} />
   
        </div>
    )
}

export default ItemDetailContainer
