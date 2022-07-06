import React, { useState, useEffect } from "react";
import Nav from "./Nav";

function Cart(props) {

    useEffect(() => {
        for (let i = 0; i < props.list.length; i++) {
            if (props.list[i].amount === 0) {
                const container = document.getElementById(props.list[i].name);
                if (container) {
                    container.remove();
                }
            }
        }
    });

    const displayCart = props.list.map(product => {
        return (
            <div className="cartProduct" id={product.name}>
                <div id="cartProductInfo">
                    <div id="photo">Image placeholder</div>
                    <div id="infoText">
                        <p><strong>{product.name}</strong></p>
                        <p>${(product.price).toFixed(2)} each</p>
                    </div>
                </div>
                <div id="quantity">
                    <button className="quantityBtn" onClick={() => props.increaseQuantity(product)}>+</button>
                    <p>{product.amount}</p>
                    <button className="quantityBtn" onClick={() => props.decreaseQuantity(product)}>-</button>
                </div>
            </div>
        );
    });
    
    
    
    return (
        <div className="container">
            <Nav amount={props.amount}/>
            <main id="cartContainer">
                <header>
                    <h1>your basket</h1>
                </header>
                <div id="checkoutContainer">
                    <div id="cartProductContainer">{displayCart}</div>
                    <div id="checkout">
                        <h2>Summary</h2>
                        <div className="total">
                            <h3>Items</h3><h3>${(props.price).toFixed(2)}</h3>
                        </div>
                        <div className="total discountText">
                            <h3>Super Discount</h3><h3>-$0.01</h3>
                        </div>
                        <hr></hr>
                        <div className="total totalText">
                            <h3>Total</h3><h3>${(props.price - .01).toFixed(2)}</h3>
                        </div>
                        <button id="checkoutBtn">Check out</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;