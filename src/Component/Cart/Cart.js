import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    let price = 0;
    let shipping= 0;
    let quantity = 0;

    for(const products of cart){
        quantity = quantity + products.quantity;
        price = price + products.price * products.quantity;
        shipping = shipping + products.shipping * products.quantity;
    }
    const tax= parseFloat((price * 0.1).toFixed(2));

    const grandTotal = price + shipping + tax;
    return (
        <div className='cart'>
            <h1>Cart Calc</h1>
            <p>Total Item:{quantity}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total {grandTotal}</h4>
        </div>
    );
};

export default Cart;