import React from 'react';

// import useCart from our CartStore that we can access the data of the shopping cart
import { useCart} from "./CartStore"; 

export default function ShoppingCart(){

    // get the functions that allow us access to the shopping cart's data
    const { getCart, getCartTotal} = useCart();
    const cart  = getCart();
    return <>
        <div className="container mt-4">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (<p>Your cart is empty</p>) :(
                <>
                    <ul className="list-group">
                       {
                        cart.map(item => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-item-center">
                                <div>
                                    <h5>{item.productName}</h5>
                                    <img src={item.imageUrl}/>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                                <span>${item.price * item.quantity}</span>
                            </li>
                        ))
                       }
                    </ul>
                </>
            ) }

            <div className="mt-3 text-end">
                <h4>Total: ${getCartTotal().toFixed(2)}</h4>
            </div>

        </div>
    </>
}