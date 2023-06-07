import React, { useState, useEffect } from 'react';
import { products, categories } from './data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'; 

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [animatedText, setAnimatedText] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category === ''
        ? products
        : products.filter((product) => product.category === category)
    );
  };

  const handleBuyNow = (product) => {
    // Handle the buy now functionality for the product
    console.log('Buy Now:', product);
  };

  useEffect(() => {
    const textArray = ['Missan', 'Product', 'Filter', 'Assignment', 'Submitted By','Pranav Choudhary'];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setAnimatedText(textArray[currentIndex]);
      currentIndex = (currentIndex + 1) % textArray.length;
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container">
      <header>
        <h1 className="animated-text">{animatedText}</h1>
      </header>

      <main>
        <h2 className="headings">Categories</h2>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle btn-category"
            type="button"
            id="categoryDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedCategory === '' ? 'All Categories' : selectedCategory}
          </button>
          <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleCategorySelect('')}
              >
                All Categories
              </button>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <button
                  className="dropdown-item"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <h2 className='headings'>Products</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {filteredProducts.map((product) => (
            <div className="col" key={product.id}>
              <div className="card product-card">
                <div className="product-img-wrapper">
                  <img
                    src={product.imageURL}
                    className="card-img-top"
                    alt={product.name}
                  />
                </div>
                <div className="card-body">
                  <h6 className="card-title">{product.name}</h6>
                  <h3 className="card-text">Price: {product.price}</h3>
                  <button
                    className="btn btn-buy-now" onClick={() => handleBuyNow(product)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default App;
