import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Product from "./Product";
import { v4 as uuid } from 'uuid';

function Shop() {
    const [cartList, setCartList] = useState([]);
    const productList = [
        {name: "banana", id: uuid()},
        {name: "keyring", id: uuid()},
        {name: "rocketship", id: uuid()},
    ];

    const addToCart = (product, amount) => {
        let amountTracker = [];
        for (let i = 0; i < amount; i++) {
            amountTracker.push(product);
        };
        setCartList(cartList.concat(amountTracker));
        // console.log(cartList); // Something is weird here -- why does it only update on the next button click?
    }

    const showProducts = productList.map(product => {
        return <Product name={product.name} key={product.id} addToCart={addToCart} />
    });
    
    return (
        <div>
            <Nav amount={cartList.length} />
            <h1>Hello from Shop!</h1>
            {showProducts}
        </div>
    );
}

export default Shop;