import React from "react";
import { Link } from "react-router-dom";
import logo from "../styles/images/logo.png";

const Nav = (props) => {
    return (
        <nav>
            <div id="logo">
                <div><img src={logo} alt="fruits" /></div>
                <h4>fruit</h4>
            </div>
            <ul>
                <Link style={{textDecoration: "none"}} to="/">
                    <li>Home</li>
                </Link>
                <Link style={{textDecoration: "none"}} to="/shop">
                    <li>Shop</li>
                </Link>
                <Link style={{textDecoration: "none"}} to="/cart">
                    <li>Cart: {props.amount}</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;