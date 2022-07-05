import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { v4 as uuid } from 'uuid';


function App() {
  const [cartList, setCartList] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);

  const addToCart = (product, amount) => {
    const cartProduct = { 
        name: product.name, 
        key: uuid(), amount: +amount, 
        };
    setCartList(cartList.concat(cartProduct));
    setCartAmount(x => +x + cartProduct.amount);
}

  return (
    <BrowserRouter>
        <Routes>
            <Route path = "/" element={<Home amount={cartAmount} />} />
            <Route 
              path = "/shop" 
              element={<Shop addToCart={addToCart} amount={cartAmount} />}
            />
            <Route path = "/cart" element={<Cart list={cartList} amount={cartAmount} />} />
        </Routes>
    </BrowserRouter>
);
}

export default App;
