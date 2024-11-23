import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useJwt } from "./UserStore";

// import useCart from our CartStore that we can access the data of the shopping cart
import { useCart } from "./CartStore";

export default function ShoppingCart() {

    // get the functions that allow us access to the shopping cart's data
    const { setCartContent, getCart, getCartTotal, modifyCart, deleteCartItem } = useCart();
    const cart = getCart();

    // get the getJwt function from the useJwt hook
    const { getJwt } = useJwt();

    // create an isUpdating state to reflect if the
    // cart is still being updated at the backend
    const [isUpdating, setIsUpdating] = useState(false);

    // a reference in React: is like state but when changed wouldn't cause
    // a re-render
    const firstRender = useRef(true);


    const fetchCart = async () => {
        const jwt = getJwt();
        try {
            const response = await axios.get(
                import.meta.env.VITE_API_URL + "/api/cart", {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }
            );
            setCartContent(response.data);
        } catch (e) {
            console.error("Error fetching cart:", error);
        }
    }

    useEffect(() => {
        fetchCart();
    }, [])

    const updateCart = async () => {
        setIsUpdating(true); // indicate that the cart is being updated right now
        const jwt = getJwt();
        try {

            const updatedCartItems = cart.map(item => {
                return {
                    product_id: item.product_id,
                    quantity: item.quantity
                }
            })

            // this axios.put has three parameters
            // parameter 1: the endpoint URL
            // parameter 2: the payload (or whatever will be in req.body)
            // parameter 3: the HTTP options (authorization)
            await axios.put(
                import.meta.env.VITE_API_URL + "/api/cart",
                {
                    cartItems: updatedCartItems
                },
                {
                    headers: {
                        'Authorization': `Bearer ${jwt}`
                    }
                }
            )
        } catch (e) {
            console.error("Error updating cart", e);
        } finally {
            setIsUpdating(false);
        }
    }

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return; // skip the effect
        }
        updateCart();
    }, [cart])

    return <>
        <div className="container mt-4">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (<p>Your cart is empty</p>) : (
                <>
                    <ul className="list-group">
                        {
                            cart.map(item => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between align-item-center">
                                    <div>
                                        <h5>{item.productName}</h5>
                                        <img src={item.imageUrl} />
                                        <div className="d-flex align-items-center mt-2">
                                            <input type="button"
                                                className="btn btn-sm btn-secondary me-2"
                                                value="-"
                                                onClick={() => {
                                                    modifyCart(item.product_id, item.quantity - 1)
                                                }}
                                                disabled={!isUpdating}

                                            />
                                            <p className="mb-0">Quantity: {item.quantity}</p>
                                            <input type="button"
                                                className="btn btn-sm btn-secondary ms-2"
                                                value="+"
                                                onClick={() => {
                                                    modifyCart(item.product_id, item.quantity + 1)
                                                }}
                                                disabled={!isUpdating}
                                            />
                                            <button className="btn btn-sm btn-danger ms-2"
                                                onClick={() => {
                                                    deleteCartItem(item.product_id)
                                                }}
                                                disabled={!isUpdating}
                                            >Delete</button>

                                        </div>

                                    </div>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </li>
                            ))
                        }
                    </ul>
                </>
            )}

            <div className="mt-3 text-end">
                <h4>Total: ${getCartTotal().toFixed(2)}</h4>
            </div>

        </div>
    </>
}