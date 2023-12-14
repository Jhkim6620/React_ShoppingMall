import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";
import React from 'react';

export const TopNavigationBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topNav}>
      <Link to="/">
        <img src="/images/logo.jpg" alt="Logo" className={styles.logo} />
      </Link>
        
      </div>

      <div className={styles.menu}>
        <Link to="/cart">
          <div className={styles.shopping_cart}>
            <img src="/images/cart.png" alt="cart" />
            <span>장바구니</span>
          </div>
        </Link>
        <Link to="/login">
          <div className={styles.mypage}>
            <img src="/images/login.png" alt="user" />
            <span>로그인</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
