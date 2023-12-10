import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";

export const TopNavigationBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/">
          <h1 className={styles.logo}></h1>
        </Link>
        
      </div>

      <div className={styles.menu}>
        <Link to="/cart">
          <div className={styles.shopping_cart}>
            <img src="/images/icon-shopping-cart.svg" alt="cart" />
            <span>장바구니</span>
          </div>
        </Link>
        <Link to="/login">
          <div className={styles.mypage}>
            <img src="/images/icon-user.svg" alt="user" />
            <span>로그인</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
