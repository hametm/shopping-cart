import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { v4 as uuid } from 'uuid';


function App() {
    const [cartList, setCartList] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product) => {
      for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].name === product.name) {
          cartList[i].amount++;
          setCartAmount(x => x + 1);
          setTotalPrice(x => x + product.price)
          return 0;
        }
      }
      const cartProduct = { 
          name: product.name, 
          key: uuid(), 
          amount: 1, 
          price: product.price,
          src: product.image,
          };
      setCartList(cartList.concat(cartProduct));
      setTotalPrice(x => x + product.price)
      setCartAmount(x => +x + cartProduct.amount);
    }

      const increaseQuantity = (product) => {
        let index = cartList.indexOf(product);
        cartList[index].amount++;
        setCartAmount(x => x + 1);
        setTotalPrice(x => x + cartList[index].price);
      }

      const decreaseQuantity = (product) => {
        let index = cartList.indexOf(product);
        if (cartList[index].amount === 0) {
          return 0;
        }
        cartList[index].amount--;
        setTotalPrice(x => x - cartList[index].price);
        setCartAmount(x => x - 1);
      }

      return (
        <HashRouter basename="/">
            <Routes>
                <Route exact path = "/" element={<Home amount={cartAmount} />} />
                <Route 
                  path = "/shop" 
                  element={<Shop addToCart={addToCart} amount={cartAmount} />} 
                />
                <Route 
                  path = "/cart" 
                  element={<Cart 
                              list={cartList} 
                              amount={cartAmount} 
                              addToCart={addToCart}
                              increaseQuantity={increaseQuantity}
                              decreaseQuantity={decreaseQuantity} 
                              price={totalPrice} 
                            />} 
                />
            </Routes>
        </HashRouter>
    );
}

export default App;