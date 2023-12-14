import styles from "./cart.module.css";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>장바구니</h1>
      </header>
      <div className={styles.cart_title_wrap}>
        <div className={styles.tab_title}>
          <input type="checkbox" />
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>

          <p>전체선택</p>
        </div>
      </div>

      <section className={styles.cart_product_list}>
        <input type="checkbox" />
        <div className={styles.cart_product_wrap}>
          <div className={styles.cart_product_image}>
            <img src="images/image1.PNG" alt="product-img" />
          </div>

          <div className={styles.cart_product_info}>
            <p className={styles.seller_store}>Polaris</p>
            <p className={styles.product_name}>별 모양 목걸이</p>
            <p className={styles.price}>20.000원</p>
            <p className={styles.delivery}>택배배송 / 무료배송</p>
          </div>
        </div>

        <div className={styles.cart_product_count}>
          <img
            className={styles.minus}
            src="/images/icon-minus-line.svg"
            alt="minus"
          />

          <div className={styles.count}>
            <span>1</span>
          </div>
          <img
            className={styles.plus}
            src="/images/icon-plus-line.svg"
            alt="plus"
          />
        </div>

        <div className={styles.cart_product_price}>
          <p className={styles.total_price}></p>
          <Link to="/Credit">
          <button className={styles.btn_submit}>주문하기</button>
          </Link>
        </div>
        
      </section>
      <div className={styles.total}>
        <div className={styles.total_price}>
          <p className={styles.cart_product_total_price}>총 상품금액</p>
          <p className={styles.cart_product_price}>0</p>
        </div>
        <div className={styles.pay_minus}>
          <img src="/images/icon-minus-line.svg" alt="minus" />
        </div>
        <div className={styles.sale}>
          <p className={styles.cart_product_sale}>상품 할인</p>
          <p className={styles.cart_product_sale_price}>0원</p>
        </div>
        <div className={styles.pay_plus}>
          <img src="/images/icon-plus-line.svg" alt="plus" />
        </div>
        <div className={styles.delivery}>
          <p className={styles.cart_product_delivery}>배송비</p>
          <p className={styles.cart_product_delivery_price}>0원</p>
        </div>

        <div className={styles.payment}>
          <p className={styles.cart_prouct_payment}>결제 예정 금액</p>
          <p className={styles.cart_prouct_payment_price}>0</p>
        </div>
      </div>
    </>
  );
};
