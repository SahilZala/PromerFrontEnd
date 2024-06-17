import React from "react";
import './home_view.css';
import Navbar from "../../Components/Navbar/navbar";
import CustomeCarousel from "../../Components/Carousel/custome_carousel";
// import OurStory from "../../Components/OurStory/our-story";
import DescriptionLabel from "../../Components/DescriptionLabel/description-label";
import gsap from "gsap/gsap-core";
import { Expo } from "gsap";
import MarqueeBanner from "../../Components/MarqueeBanner/marquee_banner";
import { CSSPlugin } from "gsap/CSSPlugin";
// import CoreDetails from "../../Components/CoreDetails/core-details";
import Footer from "../../Components/Footer/footer";
import {useNavigate} from 'react-router-dom';
import Banner from "../../Components/Banner/banner";
import Gallery from "../../Components/Gallery/gallery";
import CoreDetails from "../../Components/CoreDetails/core-details";

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
                {/* <section id="ourstory-section">
                    <OurStory/>
                </section> */}
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
                
              
                <section id="core-details-section">
                    <CoreDetails url = "https://images.pexels.com/photos/4495756/pexels-photo-4495756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" head = "#GET SET GO" details={<p>Why conform to the ordinary when you can stand out brilliantly with Promer? Celebrate your uniqueness, and we'll join the party! Our vibrant and imaginative designs aren't just fashion statements—they're an embodiment of your distinct personality.
{<br/>}{<br/>}Promer is more than just socks; it's a canvas for your self-expression, sparking conversations and leaving an indelible mark wherever you go.</p>}/>
                </section>  
                <br/>
                <br/>

              
                <section id="gallery-component-section">
                    <Gallery/>
                </section>
                <br/>
                <br/>
                
                <section id="core-details-section">
                    <CoreDetails url = "https://firebasestorage.googleapis.com/v0/b/miraclesstyle-1d805.appspot.com/o/Coredetails%2Fqqqq.JPG?alt=media&token=35e41b7a-123a-4da2-abd6-c3a0158dc763" head = "#CUSHIONED BOTTOM" details={<p>Featuring a cushioned layer at the bottom, the Promer Men's Striped Ankle-length Socks Set can provide exceptional comfort and absorb impact on the feet during various activities such as running and walking. Also, this cushioning ensures that your feet stay comfortable and protected, even during long hours of wear. Whether you're going for a casual stroll or engaging in intense physical activities like sports or gym sessions, these socks offer the ideal balance of support and comfort. Furthermore, the broad stripes and colours are the highlight of these socks."</p>} />
                </section>  
                <br/>
                <br/>

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