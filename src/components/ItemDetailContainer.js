import React, { useState, useEffect } from 'react'
import { getFetch } from '../helpers/products'
import ItemDetail from './ItemDetail'
import {useParams } from 'react-router-dom'
import {collection, doc, getDoc, getFirestore, getDocs, getDocsFromCache} from 'firebase/firestore'

function ItemDetailContainer() {
    const [prod, setProduct] = useState([])

    const {id} = useParams();


    // useEffect(() => {
    //     if (id) {
    //         getFetch
    //     .then(resp => setProduct(resp.filter(prod => prod.id === parseInt(id))))
    //     .catch(err => console.log(err))

    //     } else {
    //         getFetch
    //         .then(resp => setProduct(resp))
    //         .catch(err => console.log(err)) 
    //     }
        
    // },[id])



      useEffect(() => {
        const db = getFirestore()

        const queryDb = doc(db, 'products', id)
        getDoc(queryDb)
        .then(resp => setProduct({ id: resp.id, ...resp.data() }))
    }, [])



   


    return (
        <div>

            <ItemDetail prod={prod} key={prod.id} />
   
        </div>
    )
}

export default ItemDetailContainer
