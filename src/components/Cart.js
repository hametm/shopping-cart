import React, { useState, useEffect } from "react";

function Cart(props) {
    const [cartItems, setCartItems] = useState([]);
    return (
        <div>
            <p>Items in cart: {props.amount}</p>
            <button>Check out</button>
        </div>
    );
}

export default Cart;