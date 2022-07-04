import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Cart from "./Cart";
import Product from "./Product";
import { v4 as uuid } from 'uuid';

function Shop() {
    const [cartList, setCartList] = useState([]);
    const productList = [
        {name: "banana", id: uuid()},
        {name: "keyring", id: uuid()},
        {name: "rocketship", id: uuid()},
    ];

    const addToCart = (product) => {
        console.log(product.name + " added");
        setCartList(cartList.concat(product));
    }

    const showProducts = productList.map(product => {
        return <Product name={product.name} key={product.id} addToCart={addToCart} />
    });


    
    return (
        <div>
            <Nav />
            <Cart amount={cartList.length} />
            <h1>Hello from Shop!</h1>
            {showProducts}
        </div>
    );
}

export default Shop;