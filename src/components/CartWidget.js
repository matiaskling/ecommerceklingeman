import { AiOutlineShoppingCart } from "react-icons/ai";
import React from 'react'
import { useCartContext } from "../Context/CartContext"


export function CartWidget() {

    const { cartList, allItems } = useCartContext();

    return (
        <div>
           <h2><AiOutlineShoppingCart/>

           {cartList.length === 0 ? "" : `(${allItems()})`}

            </h2>
        </div>
    )
}
