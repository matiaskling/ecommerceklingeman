import React from 'react'
import { Card} from "react-bootstrap";
import ItemCount from './ItemCount'


export default function Item({prod}) {
    return (
    <div>
        <Card style={{ width: '300px', height: '300px', display: 'flex', left:'20px' }}>
        
            <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text>
                    {prod.price}
                    </Card.Text>
                    <ItemCount />
                  
                </Card.Body>
        </Card>
   </div>
    )
}
