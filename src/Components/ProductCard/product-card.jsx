import React from "react";
import './product-card.css';
export default function ProductCard(){
    return <div className="product-container">
        <img className="product-image" src="https://www.collinsdictionary.com/images/full/sock_99256316_1000.jpg" alt="productx"/>
        <h5 className="product-name">Socks Name and Description in detail</h5>
        <div className="productpricing-division">
            <p className="product-discounted-price">$10</p>
            {/* <p className="product-real-price">$10</p> */}
        </div>
        <div className="product-button">
            <button id="b1">VIEW DETAILS</button>
            {/* <button id="b2">VIEW DETAILS</button> */}
        </div>

    </div>;
}