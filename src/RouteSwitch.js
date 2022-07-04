import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<Home />} />
                <Route path = "/shop" element={<Shop />} />
                <Route path = "/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;