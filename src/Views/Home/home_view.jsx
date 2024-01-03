import React from "react";
import './home_view.css';
import Navbar from "../../Components/Navbar/navbar";
import CustomeCarousel from "../../Components/Carousel/custome_carousel";
import OurStory from "../../Components/OurStory/our-story";
// import ProductCard from "../../Components/ProductCard/product-card";
import TopPicsProducts from "../../Components/TopPicsProduct/top-pics-products";
import CoreDetails from "../../Components/CoreDetails/core-details";
import DescriptionLabel from "../../Components/DescriptionLabel/description-label";
// import Footer from "../../Components/Footer/footer";
export default class HomeView extends React.Component
{
    

    render(){
        return(
            <section id="main">
                    <section id="nav-section">
                    <Navbar/>
                </section>

                <section id="crousal-section">
                    <CustomeCarousel/>
                </section>
                <br/>
                <br/>
                <section id="ourstory-section">
                    <OurStory/>
                </section>
                <br/>
                <br/>
                <section id="description-lable"> 
                    <DescriptionLabel/>
                </section>
                <br/>
                <br/>
                <section id="top-pics-section">
                    <TopPicsProducts/>
                </section>
                <br/>
                <br/>
                <section id="core-details-section">
                    <CoreDetails/>
                </section>  
                <br/>
                <br/>

                <section id="footer-section"> 
                    {/* <Footer/> */}
                </section>
            </section>
        );
    }
}