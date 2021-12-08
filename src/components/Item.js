import React from 'react'
import { Card, Button} from "react-bootstrap";
import ItemCount from './ItemCount'


export default function Item({prod}) {
    return (
    <div>
        <Card>
            <Card.Img variant="top" src={prod.img} style= {{width:'300px', height:'300px'}}/>
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text className='price'> 
                    Precio: {prod.price}
                    </Card.Text>
                    <p> Stock: {prod.stock}</p>
                   <p>Cantidad: </p>
                
                    <ItemCount stock={prod.stock} initial={1}/>
                    <Button> Ver detalle </Button>
                </Card.Body>
        </Card>
   </div>
    )
}
