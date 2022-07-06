import Nav from "./Nav";
import React from "react";
import Product from "./Product";

function ProductPage(props) {


    return (
        <div>
            <Nav amount={props.amount}/>
            <main id="productPageContainer">
                <h1>Hello from Product Page!</h1>
            
            </main>
        </div>
    );
}

export default ProductPage;