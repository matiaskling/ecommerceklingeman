import React from 'react'
import { useState } from 'react'
import '../styles/itemCount.css'


export function ItemCount({initial, stock, onAdd}) {

    const [count, setCount] = useState(initial)

    const addItem = () => {
        
       if(count < stock) {setCount(prev => prev + 1)};
    }

    const removeItem = () =>{
        if(count > initial){ setCount(prev => prev - 1)}
    }

    return (
        <div>
            
            <button className='button' onClick={addItem}>+</button>
            <span>{count}</span>
            <button className="button" onClick={removeItem}> -</button>
            <div>
            <button type="submit" className='button' onClick={()=> onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount