import React from "react";
import './footer.css';
import { Facebook, Instagram, LocationOn, Twitter, WhatsApp } from "@mui/icons-material";
export default class Footer extends React.Component{
    render(){
        return <section className="footer-section">
            <section className="contact-section">
                <h3>Contact Us</h3>
                <p><LocationOn style={{fontSize: '20px',padding: '5px',color: 'var(--main-color-black)'}}/> Address in details should be here.</p>
                <div style={{width: '100% ', display: 'flex', justifyContent: 'space-between'}}><Facebook className="social-icon"/><Instagram/><WhatsApp/><Twitter/></div>
                <br/><br/>
            </section>
            <section className="links-section"></section>
            <section className="ask-question-section"></section>
            
        </section>;
    }
}