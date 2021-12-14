import React from 'react'


function itemDetail({item}) {

    return (
        <div key={item.id}>
            <p>{item.price}</p>
            <p>{item.name}</p>
        </div>
    )
}

export default itemDetail
