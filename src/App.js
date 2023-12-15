import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import { useState } from "react";
import Login from "./pages/login";
import AuthProvider from "./pages/AuthContext";

function App() {
  const [products, setProducts] = useState([]);
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");
  }
  
  return (
  <AuthProvider>
    <BrowserRouter>
        <TopNavigationBar />
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                products={products}
                setProducts={setProducts} 
                convertPrice={convertPrice}
              />
            } 
            
           />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Basket />} />
          <Route path="/product/:id"  element={<Product products={products}  convertPrice={convertPrice}/>}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;