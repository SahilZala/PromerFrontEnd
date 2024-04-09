import React from "react";
import './home_view.css';
import Navbar from "../../Components/Navbar/navbar";
import CustomeCarousel from "../../Components/Carousel/custome_carousel";
import OurStory from "../../Components/OurStory/our-story";
import DescriptionLabel from "../../Components/DescriptionLabel/description-label";
import gsap from "gsap/gsap-core";
import { Expo } from "gsap";
import MarqueeBanner from "../../Components/MarqueeBanner/marquee_banner";
import { CSSPlugin } from "gsap/CSSPlugin";
import CoreDetails from "../../Components/CoreDetails/core-details";
import Footer from "../../Components/Footer/footer";
import {useNavigate} from 'react-router-dom';
import Banner from "../../Components/Banner/banner";
import ProductSlider from "../../Components/ProductSlider/product-slider";

// import Gallery from "../../Components/Gallery/gallery";
// import Footer from "../../Components/Footer/footer";
// const C = CSSPlugin;
class HomeViewMain extends React.Component
{
    constructor(){
        super();
        this.gsap = gsap;
        this.gsap.registerPlugin(CSSPlugin);
        this.effect = Expo.easeInOut;
    }

    render(){
        return(
            <section id="main">
                <section id="nav-section">
                    <Navbar navigate={this.props.navigate} gsap={this.gsap} effect={this.effect}/>
                </section>

                <section id="crousal-section">
                    <CustomeCarousel gsap={this.gsap} effect={Expo.easeIn} />
                </section>
                <br/>
                <br/>
                <section id="ourstory-section">
                    <OurStory/>
                </section>
                <br/>
                <br/>

               
                <section id="description-lable"> 
                    <DescriptionLabel gsap={this.gsap} effect={this.effect}/>
                </section>
                <br/>
                <br/>

                <section>
                    <Banner/>
                </section>
                
                <br/>
                <br/>

                <section id="marquee-banner"> 
                    <MarqueeBanner gsap={this.gsap} effect={this.effect}/>
                </section>
                <br/>
                <br/>
                
                {/* <section id="top-pics-section">
                    <TopPicsProducts/>
                </section>
                <br/>
                <br/> */}
                <section id="core-details-section">
                    <CoreDetails/>
                </section>  
                <br/>
                <br/>

                <section id="core-details-section">
                    {/* <ProductSlider products={}/> */}
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
            </section>
        );
    }
}


export default function HomeView(){
    console.log(useNavigate().name);
    return <HomeViewMain navigate = {useNavigate()}/>
}