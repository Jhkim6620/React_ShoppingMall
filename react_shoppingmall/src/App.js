import React from 'react';
import './web.css';

function App() {
  const products = [
    {
      id: 1,
      name: '상품 1',
      description: '상품 설명 Lorem ipsum dolor sit amet.',
      price: '$19.99',
    },
    {
      id: 2,
      name: '상품 2',
      description: '상품 설명 Consectetur adipiscing elit.',
      price: '$24.99',
    },
    {
      id: 3,
      name: '상품 3',
      description: '상품 설명 Consectetur adipiscing elit.',
      price: '$34.99',
    },
    {
      id: 4,
      name: '상품 4',
      description: '상품 설명 Consectetur adipiscing elit.',
      price: '$34.99',
    },
  ];

  return (
    <div className="App">
      <header>
        <h1>옷 쇼핑몰</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#">홈</a></li>
          <li><a href="#">제품</a></li>
          <li><a href="#">장바구니</a></li>
          <li><a href="#">고객 지원</a></li>
        </ul>
      </nav>
      <section className="product-list">
        {products.map((product) => (
          <article className="product" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span className="price">{product.price}</span>
            <button className="add-to-cart">장바구니에 추가</button>
          </article>
        )
      )
    }
      </section>
    </div>
  );
}

export default App;
