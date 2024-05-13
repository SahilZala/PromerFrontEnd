import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import './contact_us.css';
import gsap from "gsap/gsap-core";
import { Expo } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useNavigate } from 'react-router-dom';
import Footer from "../../Components/Footer/footer";
import ContactusTransaction from "../../Transaction/contactus-transaction";

class ContactUsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.gsap = gsap;
        this.gsap.registerPlugin(CSSPlugin);
        this.effect = Expo.easeInOut;

        this.state = {
            username: "",
            emailAddress: "",
            query: ""
        }
    }
    render() {
        return <section id="contactus-main">
            <section id="nav-section">
                <Navbar navigate={this.props.navigate} gsap={this.gsap} effect={this.effect} />
            </section>
            <section className="banner">
                <section className="banner-container">
                    <img src="https://firebasestorage.googleapis.com/v0/b/miraclesstyle-1d805.appspot.com/o/Banner%2Fcontact_us.jpg?alt=media&token=89564e7c-e55d-4472-be5c-bfee9ccae495" alt="" />
                    <section className="gradient"></section>
                    <h1>CONTACT US</h1>
                </section>
            </section>  

            <br/><br/>

            


            <section className="contactus-container">
                <section className="user-info">
                    <form onSubmit={(event) => {

                        event.preventDefault();
                        this.onSubmit();
                    }}>
                        <h1>#Your Query</h1>
                        <input onChange={(val) =>  this.setState({
                            username: val.target.value
                        })} placeholder="user name"></input>
                        <input onChange={(val) =>  this.setState({
                            emailAddress: val.target.value
                        })}  placeholder="email address"></input>
                        <textarea onChange={(val) =>  this.setState({
                            query: val.target.value
                        })}   placeholder="any query"></textarea>
                        <button>SUBMIT</button>
                    </form>
                </section>
                <section className="owner-info">
                    <h1>#REACH TO US</h1>
                    <h3>Triyash Enterprise : Ketan Vaghela</h3>
                    <p>Complete address with full description should be here, with proper pincode.</p>
                    <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.748437449!2d72.4149341707085!3d23.020474096694556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1708670716862!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </section>

          


            <br/><br/>

            <section id="footer-section">
                <Footer />
            </section>
        </section>;
    }

    onSubmit(){
        if(this.state.username === "" || this.state.emailAddress === "" || this.state.query === ""){
            alert("before submiting please complete all fields!");
        }
        else{
          console.log(this.state);
            ContactusTransaction.createContact(this.state).then((data) => alert("Your query is generated, We will get back to you soon.")).catch((err) => alert("something went wrong try letter." + err));
        }
    }
}


export default function ContactUs() {
    console.log(useNavigate().name);
    return <ContactUsComponent navigate={useNavigate()} />
}