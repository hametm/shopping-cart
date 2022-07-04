import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Product from "./Product";
import { v4 as uuid } from 'uuid';

function Shop() {
    const [cartList, setCartList] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);
    const productList = [
        {name: "banana", id: uuid()},
        {name: "keyring", id: uuid()},
        {name: "rocketship", id: uuid()},
    ];

    const addToCart = (product, amount) => {
        const cartProduct = { name: product.name, key: uuid(), amount: +amount };
        setCartAmount(x => +x + cartProduct.amount);
    }

    const showProducts = productList.map(product => {
        return <Product name={product.name} key={product.id} addToCart={addToCart} />
    });
    
    return (
        <div>
            <Nav amount={cartAmount} />
            <h1>Hello from Shop!</h1>
            {showProducts}
        </div>
    );
}

export default Shop;