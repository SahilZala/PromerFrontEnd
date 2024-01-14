import React from "react";
import './footer.css';
import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";

export default class Footer extends React.Component{
    render(){
        return   <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="https://www.instagram.com/hookerstore.in/">contact us</a></li>
                        <li><a href="https://www.instagram.com/hookerstore.in/">about us</a></li>
                        <li><a href="https://www.instagram.com/hookerstore.in/">our products</a></li>
                        <li><a href="https://www.instagram.com/hookerstore.in/">privacy policy</a></li>
                        
                    </ul>
                </div>
                
               
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="https://www.instagram.com/hookerstore.in/"><Facebook/></a>
                        <a href="https://www.instagram.com/hookerstore.in/"><Instagram/></a>
                        <a href="https://www.instagram.com/hookerstore.in/"><Twitter/></a>
                        <a href="https://www.instagram.com/hookerstore.in/"><WhatsApp/></a>
                    </div>
                </div>

                
            </div>
        </div>
   </footer>
    }
}