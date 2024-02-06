import React from "react";
import './product-card.css';
export default function ProductCard(props){
    return <div className="product-container">
        <div className="product-image">
        <img src={props.data.productImages === undefined ? "https://www.collinsdictionary.com/images/full/sock_99256316_1000.jpg" : props.data.productImages[0].url} alt="productx"/>
        </div>
        <h5 className="product-name">{props.data.productDetails.title + " (" + props.data.productDetails.subTitle+")"}</h5>
        <div className="productpricing-division">
            <p className="product-discounted-price">${props.data.productPricing.discountPrice}</p>
            {/* <p className="product-real-price">$10</p> */}
        </div>
        <div className="product-button">
            <button id="b1">VIEW DETAILS</button>
            {/* <button id="b2">VIEW DETAILS</button> */}
        </div>

    </div>;
}