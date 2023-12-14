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