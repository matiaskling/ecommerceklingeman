import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {useParams } from 'react-router-dom'
import {getFirestore, getDoc, doc} from "firebase/firestore";

function ItemDetailContainer() {
    const [prod, setProd] = useState([])
    const [Loading, setLoading] = useState(true)

    const { id} = useParams();

  

    useEffect(() => {        
    
            const db = getFirestore()
            const queryDb = doc(db, 'products', id)
            getDoc(queryDb)
            .then(resp => setProd( { id: resp.id, ...resp.data() } ))
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))
    },[id]) 



    return (
        <div>
                {Loading ? 
                <h2>Cargando</h2> : 
                
                <ItemDetail prod={prod} key={prod.id} />
                    
                }
            
   
        </div>
    )
}

export default ItemDetailContainer
