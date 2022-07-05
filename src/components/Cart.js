import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { v4 as uuid } from 'uuid';

function Cart(props) {
    console.log(props.list);
    
    return (
        <div className="container">
            <Nav amount={props.amount}/>
            <main id="cartContainer">
                <h1>Hello from Cart!</h1>
                {props.list.map(item => <p>{item.name}</p>)}
            </main>
        </div>
    );
}

export default Cart;