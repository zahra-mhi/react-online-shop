import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import { Nav } from "./components/nav";
import { ShopProvider } from "./context/shopContext";

function App() {
  return (
    <div className="App">
      <ShopProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </ShopProvider>
    </div>
  );
}

export default App;
