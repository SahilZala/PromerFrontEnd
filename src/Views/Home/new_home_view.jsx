import React from "react";
import './new_home_view.css';
import {useNavigate} from 'react-router-dom';
import { Expo } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import Navbar from "../../Components/Navbar/navbar";
import gsap from "gsap/gsap-core";

class NewHomeViewMain extends React.Component{

    constructor(){
        super();
        this.gsap = gsap;
        this.gsap.registerPlugin(CSSPlugin);
        this.effect = Expo.easeInOut;
    }


    render(){
        return (<section id="body">
        {/* <div class="nav-bar">
            <h1 class="brand-name">
                PROMER
            </h1>
        </div> */}

        <section id="nav-section">
            <Navbar navigate={this.props.navigate} gsap={this.gsap} effect={this.effect}/>
        </section>

        <div className="title-body">        
            <p>where style meets substances: unveling the essence elegance.</p>
            <button>view products</button>
        </div>

        <div className="marquee1">
            <h2><span className="dot"></span>TEXTILE        <span className="dot"></span>MATERAIL        <span className="dot"></span>QUALITY        <span className="dot"></span>EXPERIENCE        <span className="dot"></span>COMFORT</h2>
            <h2><span className="dot"></span>TEXTILE        <span className="dot"></span>MATERAIL        <span className="dot"></span>QUALITY        <span className="dot"></span>EXPERIENCE        <span className="dot"></span>COMFORT</h2>
            <h2><span className="dot"></span>TEXTILE        <span className="dot"></span>MATERAIL        <span className="dot"></span>QUALITY        <span className="dot"></span>EXPERIENCE        <span className="dot"></span>COMFORT</h2>
            <h2><span className="dot"></span>TEXTILE        <span className="dot"></span>MATERAIL        <span className="dot"></span>QUALITY        <span className="dot"></span>EXPERIENCE        <span className="dot"></span>COMFORT</h2>
            <h2><span className="dot"></span>TEXTILE        <span className="dot"></span>MATERAIL        <span className="dot"></span>QUALITY        <span className="dot"></span>EXPERIENCE        <span className="dot"></span>COMFORT</h2>
        </div>
        <br/>
        <br/>
        
        <div className="title-label-box">
            <div id="https://firebasestorage.googleapis.com/v0/b/miraclesstyle-1d805.appspot.com/o/Product%2F1707112815419%2F1707112816554.png?alt=media&token=cdaaf0ad-050b-4e83-bb42-95e552d9b1ac" className="label-box">
                <div className="shutter1"></div>
                <div className="shutter2"></div>
                <h1>PRODUCTS</h1>
            </div>
            <div id="https://static.wixstatic.com/media/6a07fd_6c70b4eb5c6f406abe12eb52f826bc42~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6a07fd_6c70b4eb5c6f406abe12eb52f826bc42~mv2.jpg" className="label-box">
                <div className="shutter1"></div>
                <div className="shutter2"></div>
                <h1>SPECIAL EDITION</h1>
            </div>
            <div id="https://imgs.pexels.com/photos/13796728/pexels-photo-13796728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="label-box">
                <div className="shutter1"></div>
                <div className="shutter2"></div>
                <h1>CONTACT US</h1>
            </div>
            <div id="https://media.istockphoto.com/id/1256096552/vector/about-us-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=KKozSJIgaX2lu1OIRY9Oc5Rp1GhQzpTIKatBtc_4lQQ=" className="label-box">
                <div className="shutter1"></div>
                <div className="shutter2"></div>
                <h1>ABOUT US</h1>
            </div>

            
            {/* <div className="hover-image">
                <image id="hover-image" src="" alt="s" />
            </div> */}
        </div>
        <br/>
        <br/>
      
        <div class="best-products">
            <div class="product-container">
                <img src="https://firebasestorage.googleapis.com/v0/b/miraclesstyle-1d805.appspot.com/o/Product%2F1707112815419%2F1707112816554.png?alt=media&token=cdaaf0ad-050b-4e83-bb42-95e552d9b1ac" alt="" />
                <p>Product Name dsds sd sd sd </p>
                <div class="view-details-button-container">
                    <p>view details</p>
                </div>
            </div>
            
            <div class="product-container">
                <img src="https://firebasestorage.googleapis.com/v0/b/miraclesstyle-1d805.appspot.com/o/Product%2F1707112815419%2F1707112816554.png?alt=media&token=cdaaf0ad-050b-4e83-bb42-95e552d9b1ac" alt="" />
                <p>Product Name dsds sd sd sd </p>
                <div class="view-details-button-container">
                    <p>view details</p>
                </div>
            </div>

            <div class="product-container">
                <img src="https://firebasestorage.googleapis.com/v0/b/miraclesstyle-1d805.appspot.com/o/Product%2F1707112815419%2F1707112816554.png?alt=media&token=cdaaf0ad-050b-4e83-bb42-95e552d9b1ac" alt="" />
                <p>Product Name dsds sd sd sd </p>
                <div class="view-details-button-container">
                    <p>view details</p>
                </div>
            </div>

            <div class="product-container">
                <img src="https://firebasestorage.googleapis.com/v0/b/miraclesstyle-1d805.appspot.com/o/Product%2F1707112815419%2F1707112816554.png?alt=media&token=cdaaf0ad-050b-4e83-bb42-95e552d9b1ac" alt="" />
                <p>Product Name dsds sd sd sd </p>
                <div class="view-details-button-container">
                    <p>view details</p>
                </div>
            </div>

            <div class="product-container">
                <img src="https://firebasestorage.googleapis.com/v0/b/miraclesstyle-1d805.appspot.com/o/Product%2F1707112815419%2F1707112816554.png?alt=media&token=cdaaf0ad-050b-4e83-bb42-95e552d9b1ac" alt="" />
                <p>Product Name dsds sd sd sd </p>
                <div class="view-details-button-container">
                    <p>view details</p>
                </div>
            </div>

            <div class="product-container">
                <img src="https://firebasestorage.googleapis.com/v0/b/miraclesstyle-1d805.appspot.com/o/Product%2F1707112815419%2F1707112816554.png?alt=media&token=cdaaf0ad-050b-4e83-bb42-95e552d9b1ac" alt="" />
                <p>Product Name dsds sd sd sd </p>
                <div class="view-details-button-container">
                    <p>view details</p>
                </div>
            </div>

            <div class="product-container">
                <img src="https://firebasestorage.googleapis.com/v0/b/miraclesstyle-1d805.appspot.com/o/Product%2F1707112815419%2F1707112816554.png?alt=media&token=cdaaf0ad-050b-4e83-bb42-95e552d9b1ac" alt="" />
                <p>Product Name dsds sd sd sd </p>
                <div class="view-details-button-container">
                    <p>view details</p>
                </div>
            </div>

            <div class="product-container">
                <img src="https://firebasestorage.googleapis.com/v0/b/miraclesstyle-1d805.appspot.com/o/Product%2F1707112815419%2F1707112816554.png?alt=media&token=cdaaf0ad-050b-4e83-bb42-95e552d9b1ac" alt="" />
                <p>Product Name dsds sd sd sd </p>
                <div class="view-details-button-container">
                    <p>view details</p>
                </div>
            </div>
            
        </div>

        <br/>
        <br/>

        <div class="bamboo-socks-branding">
            <div id="t1">
                <h1>BAMBOO SOCKS</h1>
                <h1>BAMBOO SOCKS</h1>
                <h1>BAMBOO SOCKS</h1>
                <h1>BAMBOO SOCKS</h1>   
                <h1>BAMBOO SOCKS</h1>    
            </div>

            <div id="t2">
                <h1>BAMBOO SOCKS</h1>
                <h1>BAMBOO SOCKS</h1>
                <h1>BAMBOO SOCKS</h1>
                <h1>BAMBOO SOCKS</h1>   
                <h1>BAMBOO SOCKS</h1>    
            </div>

            <div id="t3">
                <h1>BAMBOO SOCKS</h1>
                <h1>BAMBOO SOCKS</h1>
                <h1>BAMBOO SOCKS</h1>
                <h1>BAMBOO SOCKS</h1>   
                <h1>BAMBOO SOCKS</h1>    
            </div>
            <img src="https://www.mintandoak.in/cdn/shop/products/IMG_1953_2_0b0aa742-8c07-4a7f-b49b-79f109e74680_1024x1024@2x.jpg?v=1689227245" alt=""></img>
        </div>

        <br/>

        <br/>
        <br/>
            
        </section>);
    }
}


export default function NewHomeView(){
    console.log(useNavigate().name);
    return <NewHomeViewMain navigate = {useNavigate()}/>
}