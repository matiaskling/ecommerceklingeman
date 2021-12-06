import React from 'react'
import { useState } from 'react'
import { Button} from "react-bootstrap";


export function ItemCount({initial, products, onAdd}) {

    const [count, setCount] = useState(initial)

    const addItem = () => {
        
       count < products ? setCount(prev => prev + 1) : alert('compra maxima');
    }

    const removeItem = () =>{
        count > initial ? setCount(prev => prev - 1) : alert('compra minima')
    }


    return (
        <div>
            <p>{count}</p>
            <Button variant="outline-primary" onClick={addItem}>+</Button>
            <Button type="submit" variant="primary" onclik={onAdd}>Agregar</Button>
            <Button variant="outline-primary" onClick={removeItem}> -</Button>
            
        </div>
    )
}

export default ItemCount