import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import './about_us.css';
import gsap from "gsap/gsap-core";
import { Expo } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useNavigate } from 'react-router-dom';
import Footer from "../../Components/Footer/footer";
import OurStory from "../../Components/OurStory/our-story";
import Gallery from "../../Components/Gallery/gallery";


class AboutUsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.gsap = gsap;
        this.gsap.registerPlugin(CSSPlugin);
        this.effect = Expo.easeInOut;
    }
    render() {
        return <section id="aboutus-main">
            <section id="nav-section">
                <Navbar navigate={this.props.navigate} gsap={this.gsap} effect={this.effect} />
            </section>
            <section className="banner">
                <section className="banner-container">
                    <img src="https://firebasestorage.googleapis.com/v0/b/miraclesstyle-1d805.appspot.com/o/Banner%2Fabout_us.jpeg?alt=media&token=2d5d882a-0f2e-48d6-9f28-6f9917ef3bdc" alt="" />
                    <section className="gradient"></section>
                    <h1>ABOUT US</h1>
                </section>
            </section>
            <br />
            <br />
            <section className="ourstory-section">
                <OurStory />
            </section>
            <br />
            <br />
            <br />
            <br />
            <section className="ourteam-section">
                <h2>OUR TEAM</h2>
                <div style={{
                    backgroundColor: "var(--brand-color)",
                    width: "5%",
                    padding: "3px",
                    borderRadius: "3px"
                }}></div>
                <br/>

                <section className="team-container">
                    <div className="team">
                        <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
                        <h2>Ketan Vaghela</h2>
                        <h4>Cheif Executive Officer, Co-founder</h4>
                    </div>
                    <div className="team">
                        <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
                        <h2>Ketan Vaghela</h2>
                        <h4>Cheif Executive Officer, Co-founder</h4>
                    </div>
                    <div className="team">
                        <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
                        <h2>Ketan Vaghela</h2>
                        <h4>Cheif Executive Officer, Co-founder</h4>
                    </div>
                </section>
            </section>
            <br />
            <br />
            <section className="record-section">
                <section className="container">
                        <div className="record">
                            <h1>+50</h1>
                            <h4>Variety of products</h4>
                        </div>
                        <div className="record">
                            <h1>+5</h1>
                            <h4>Years of experience</h4>
                        </div>
                        <div className="record">
                            <h1>+50</h1>
                            <h4>Variety of products</h4>
                        </div>
                        <div className="record">
                            <h1>+5</h1>
                            <h4>Years of experience</h4>
                        </div>
                   
                    {/* <section className="record-container1">
                        <div className="record">
                            <h1>+50</h1>
                            <h4>Variety of products</h4>
                        </div>
                        <div className="record">
                            <h1>+5</h1>
                            <h4>Years of experience</h4>
                        </div>
                    </section> */}
                </section>
                
               


                
                {/* <section className="brand-image">
                    <img src="https://firebasestorage.googleapis.com/v0/b/miraclesstyle-1d805.appspot.com/o/Banner%2Fpromer.png?alt=media&token=71103483-ab84-48db-8c4e-7cf1470fea5a" alt=""/>
                </section> */}
            </section>
            <br />
            <br />
            <br />
            <br />
            
            <section id="gallery-section">
                <Gallery />
            </section>

            <br />
            <br />

            <section id="footer-section">
                <Footer />
            </section>
        </section>;
    }
}


export default function AboutUs() {
    console.log(useNavigate().name);
    return <AboutUsComponent navigate={useNavigate()} />
}