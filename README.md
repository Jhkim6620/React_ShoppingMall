-- 조영호님
{파일 이름}
{main.js
-----------------------------------------------------------------------------
import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { useEffect } from "react";
import axios from "axios";

export const Main = ({products, setProducts, convertPrice}) => {
useEffect(() => {
  axios.get("/data/products.json").then((data)=> {
    setProducts(data.data.products);
  });
}, [setProducts]);


const sortProduct = (type) => {
  const newProduct = [...products];

  if(type === "recent") {
    newProduct.sort((a,b) => a.id-b.id);
    setProducts(newProduct);
  } else if (type ==="rowtohigh") {
    newProduct.sort((a,b) => a.price-b.price);
    setProducts(newProduct);
  }else if ( type === "hightolow"){
    newProduct.sort((a,b) => b.price-a.price);
    setProducts(newProduct);
  }
}
  
  return (
    <>
      <EventBanner />
      <div className={styles.filter}>
        <p onClick={() => sortProduct("recent")}>최신순</p>
        <p onClick={() => sortProduct("rowtohigh")}>낮은 가격</p>
        <p onClick={() => sortProduct("hightolow")}>높은 가격</p>
      </div>
      <main className={styles.flex_wrap}>
        {products.map((product)=>{
          return (
            <Product
            key={`key-${product.id}`}
            product={product}
            convertPrice={convertPrice}
            />
          );
        })}
      </main>
    </>
  );
};
-----------------------------------------------------------------------------
login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login_modules.css';


  const Login = () => {
  const navigate  = useNavigate();
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username.trim()) {
      Login();
      setLoggedIn(true);
      navigate('/main');
    } else {
      alert('사용자 아이디를 입력하세요.');
    }
  };
  return (
    <div>
      {loggedIn ? (
        <div>
          <p>로그인 성공!</p>
        </div>
      ): 
      (
        <div>
          <label>사용자 아이디:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>로그인</button>
        </div>
      )}
    </div>
  );
};

export default Login;
-----------------------------------------------------------------------------
App.js

12   const [products, setProducts] = useState([]);
13     const convertPrice = (price) => {
14       return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");}

24   <Home 
25                   products={products}
26                   setProducts={setProducts} 
27                   convertPrice={convertPrice}
28                 />

-----------------------------------------------------------------------------
home.js

import { Main } from "../components/main/main";

const Home = ({ products, setProducts, convertPrice }) => {
  return <Main 
    products={products} 
    setProducts={setProducts} 
    convertPrice={convertPrice}
  />;
};
export default Home;
}





-- 김종혁님
{파일 이름}
{코드 복붙}
{제출하지 않고, logic에 대한 설명들..?}




-- 서지영님
{파일 이름}
{코드 복붙}
{제출하지 않고, logic에 대한 설명들..?}





-- 심영우님
{파일 이름}
{코드 복붙}
{제출하지 않고, logic에 대한 설명들..?}
