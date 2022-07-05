import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Product from "./Product";
import { v4 as uuid } from 'uuid';
import apple from "../styles/images/apple.png";
import avocado from "../styles/images/avocado.png";
import banana from "../styles/images/banana.png";
import grapes from "../styles/images/grapes.png";
import kiwi from "../styles/images/kiwi.png";
import kumquat from "../styles/images/kumquat.png";
import lemon from "../styles/images/lemon.png";
import lime from "../styles/images/lime.png";
import orange from "../styles/images/orange.png";
import strawberry from "../styles/images/strawberry.png";
import watermelon from "../styles/images/watermelon.png";

function Shop() {
    const [cartList, setCartList] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);
    const productList = [
        {name: "Kiwi", id: uuid(), image: kiwi, price: "$2"},
        {name: "Banana", id: uuid(), image: banana, price: "$1"},
        {name: "Apple", id: uuid(), image: apple, price: "$2"},
        {name: "Strawberry", id: uuid(), image: strawberry, price: "$5"},
        {name: "Lemon", id: uuid(), image: lemon, price: "$1.50"},
        {name: "Orange", id: uuid(), image: orange, price: "$3"},
        {name: "Lime", id: uuid(), image: lime, price: "$1.50"},
        {name: "Grapes", id: uuid(), image: grapes, price: "$4"},
        {name: "Kumquat", id: uuid(), image: kumquat, price: "$20"},
        {name: "Strawberry", id: uuid(), image: strawberry, price: "$3.50"},
        {name: "Avocado", id: uuid(), image: avocado, price: "$2"},
        {name: "Watermelon", id: uuid(), image: watermelon, price: "$5"},
    ];

    const addToCart = (product, amount) => {
        const cartProduct = { 
            name: product.name, 
            key: uuid(), amount: +amount, 
            };
        setCartList(cartList.concat(cartProduct));
        setCartAmount(x => +x + cartProduct.amount);
    }

    const showProducts = productList.map(product => {
        return <Product name={product.name} 
                    key={product.id} 
                    addToCart={addToCart} 
                    src={product.image} 
                    price={product.price} 
                />
    });
    
    return (
        <div className="container">
            <Nav amount={cartAmount} />
            <div id="shopContainer">
                <header>
                    <h1>shop all fruit</h1>
                </header>
                <div id="productContainer">{showProducts}</div>
            </div>
        </div>
    );
}

export default Shop;