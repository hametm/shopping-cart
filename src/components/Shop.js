import React from "react";
import Nav from "./Nav";
import Cart from "./Cart";
import Product from "./Product";

function Shop() {
    return (
        <div>
            <Nav />
            <Cart />
            <h1>Hello from Shop!</h1>
            <Product />
        </div>
    );
}

export default Shop;