import React from 'react'
import { useState } from 'react'
import { Button} from "react-bootstrap";



export function ItemCount({initial, stock, onAdd}) {

    const [count, setCount] = useState(initial)

    const addItem = () => {
        
       count < stock ? setCount(prev => prev + 1) : alert('compra maxima');
    }

    const removeItem = () =>{
        count > initial ? setCount(prev => prev - 1) : alert('compra minima')
    }

    return (
        <div>
             <p>{count}</p>
            <Button variant="outline-primary" onClick={addItem}>+</Button>
            <Button type="submit" variant="primary" onClick={onAdd}>Agregar al carrito</Button>

            <Button variant="outline-primary" onClick={removeItem}> -</Button>
        </div>
    )
}

export default ItemCount