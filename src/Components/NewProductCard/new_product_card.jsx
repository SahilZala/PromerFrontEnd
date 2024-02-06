import { InfoRounded } from '@mui/icons-material';
import './new_product_card.css';
import React from 'react';
export default function NewProductCard(props){
    return <section className = "new-product-card-section">
        <section className="new-product-image-container">
            <img src={props.data.productImages === undefined ? "https://www.collinsdictionary.com/images/full/sock_99256316_1000.jpg" : props.data.productImages[0].url} alt="productx"/>
        </section>

        <section className='new-product-info-section'>
            <div className='new-product-label-section'>
                <h3 className='title'>PRODUCT TITLE IN DETAILS</h3>
                <h4 className='price'>$ 125/-</h4>
            </div>
            <div className='new-product-button-section'>
                <InfoRounded className='icon'/>
            </div>
        </section>
    </section>;
}