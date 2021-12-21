import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Button} from "react-bootstrap";



export default function Item({prod}) {
    return (
    <div key={prod.id}>
        <Card>
            <Card.Img variant="top" src={prod.img} style= {{width:'300px', height:'300px'}}/>
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text className='price'> 
                    Precio: {prod.price}
                    </Card.Text>
                    <p> Stock: {prod.stock}</p>
                    <Link to= {`/detalle/${prod.id}`}>
                       <Button> Ver detalle </Button>
                    </Link>

                 
                </Card.Body>
        </Card>
   </div>
    )
}
