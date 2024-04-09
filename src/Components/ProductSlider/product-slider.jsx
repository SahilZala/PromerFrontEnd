import React, { useState } from 'react';
import './product-slider.css';

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1) % products.length);
  };

  return (
    <div className="horizontal-product-slider">
      <button onClick={handlePrevious}>Previous</button>
      <div className="product-slider">
        {products[currentIndex]}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ProductSlider;