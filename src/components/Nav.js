import React from "react";
import { Link } from "react-router-dom";
import logo from "../styles/images/logo.png";
import basket from "../styles/images/basket-outline.png";

const Nav = (props) => {
    return (
        <nav>
            <Link style={{textDecoration: "none"}} to="/">
                <div id="logo">
                    <div><img src={logo} alt="fruits" /></div>
                    <h4>fruit</h4>
                </div>
            </Link>
            <ul>
                <Link style={{textDecoration: "none"}} to="/">
                    <li className="links">Home</li>
                </Link>
                <Link style={{textDecoration: "none"}} to="/shop">
                    <li className="links">Shop</li>
                </Link>
                <Link style={{textDecoration: "none"}} to="/cart">
                    <li>
                        <div id="cart">
                            <img src={basket} alt="basket" />
                            {props.amount}
                        </div>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;