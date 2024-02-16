
import React from "react";
import './product-details.css';
import Navbar from "../../Components/Navbar/navbar";
import {useNavigate,useLocation} from 'react-router-dom';
import gsap from "gsap/gsap-core";
import CSSPlugin from "gsap/CSSPlugin";
import { Expo } from "gsap";
import Footer from "../../Components/Footer/footer";

class ProductDetailsComponent extends React.Component{

    constructor(props){
        super(props);
        this.gsap = gsap;
        this.gsap.registerPlugin(CSSPlugin);
        this.effect = Expo.easeInOut;
        

        this.state = {
            selectedImageUrl : props.data.productImages === undefined ? "https://www.collinsdictionary.com/images/full/sock_99256316_1000.jpg" : 
                this.props.data.productImages[0].url
        }

    }

    render(){
        return <section className="product-details">
            <section className="nav-section">
                <Navbar navigate={this.props.navigate} gsap={this.gsap} effect={this.effect} />
            </section>
            
            <section className="container">
                <section className="product-image">
                    <section className="main">
                        <img src={this.props.data.productImages === undefined ? "https://www.collinsdictionary.com/images/full/sock_99256316_1000.jpg" : this.state.selectedImageUrl} alt=""/>
                    </section>

                    <section className="sub">
                        <div className="image-container">

                            {this.props.data.productImages === undefined ? <></> : this.props.data.productImages.map((image,index) => 
                                <img style={image.url === this.state.selectedImageUrl ? {
                                    border: "3px tomato solid",
                                    padding: "2px",
                                    borderRadius: ".4rem",
                                    
                                } : {}}  key={index} onClick={() => {
                                    this.setState({
                                        selectedImageUrl: image.url
                                    })
                                }} src={image.url} alt=""/>
                            )}

                            {/* <img src={this.props.data.productImages === undefined ? "https://www.collinsdictionary.com/images/full/sock_99256316_1000.jpg" : this.props.data.productImages[0].url} alt=""/> */}
                            {/* <img src={this.props.data.productImages === undefined ? "https://www.collinsdictionary.com/images/full/sock_99256316_1000.jpg" : this.props.data.productImages[0].url} alt=""/>
                            <img src={this.props.data.productImages === undefined ? "https://www.collinsdictionary.com/images/full/sock_99256316_1000.jpg" : this.props.data.productImages[0].url} alt=""/>
                            <img src={this.props.data.productImages === undefined ? "https://www.collinsdictionary.com/images/full/sock_99256316_1000.jpg" : this.props.data.productImages[0].url} alt=""/>
                            <img src={this.props.data.productImages === undefined ? "https://www.collinsdictionary.com/images/full/sock_99256316_1000.jpg" : this.props.data.productImages[0].url} alt=""/>
                            <img src={this.props.data.productImages === undefined ? "https://www.collinsdictionary.com/images/full/sock_99256316_1000.jpg" : this.props.data.productImages[0].url} alt=""/>
                            <img src={this.props.data.productImages === undefined ? "https://www.collinsdictionary.com/images/full/sock_99256316_1000.jpg" : this.props.data.productImages[0].url} alt=""/>
                            <img src={this.props.data.productImages === undefined ? "https://www.collinsdictionary.com/images/full/sock_99256316_1000.jpg" : this.props.data.productImages[0].url} alt=""/> */}
                        </div>
                    </section>
                </section>
                 
                <section className="product-info">

                    <div className="sub" style={{
                        borderBottom: "1px grey solid"
                    }}>
                        <p className="index">#{this.props.data.productDetails.articleNumber} </p>
                        <h1 className="product-name">{this.props.data.productDetails.title} ({this.props.data.productDetails.subTitle})</h1>
                        <div className="price-container">
                            <label className="discount-price">₹ {this.props.data.productPricing.discountPrice}</label>
                            <label className="original-price">₹ {this.props.data.productPricing.realPrice}</label>
                        </div>
                    </div>
                    

                    <br/>

                    <div className="sub">
                        <label>
                            SIZE
                        </label>
                        <div className="size-container">
                            {
                                this.props.data.productVariant.size.id === "2" ? 
                                    <div className="size-style"><p>32</p></div> 
                                    : this.props.data.productVariant.size.id === "1" ? 
                                    <div className="size-style"><p>S</p></div> 
                                    : <div className="size-style"><p>FREESIZE</p></div> 
                                    
                                    
                            }
                        </div>    
                    </div>

                    <div className="sub">
                        <label>
                            GENDER
                        </label>
                        <div className="size-container">
                            {
                               <div className="size-style"><p>{this.props.data.productVariant.gender}</p></div>
                            }
                        </div>
                    </div>

                    <div className="sub">
                        <label>
                            DESCRIPTION
                        </label>
                        <p className="product-description">{this.props.data.productDetails.description}
                        </p>
                    </div>
                
                    <div className="sub">
                        <label>
                            MORE INFO
                        </label>
                        <p className="product-description">
                            {
                                this.props.data.productDetails.moreInfo
                            }
                        </p>
                    </div>
                </section>
            </section>

            <br/>
                <br/>
                {/* <section id="gallery-component-section">
                    <Gallery/>
                </section>
                <br/>
                <br/> */}

                <section id="footer-section"> 
                    <Footer/>
                </section>
        </section>;
    }
}

export default function ProductDetails(props){

    const navigate = useNavigate();

    console.log(useLocation().state.data);

    return (<ProductDetailsComponent data={useLocation().state.data} navigate={navigate}/>);
}