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
                        <li><a href="#">contact us</a></li>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our products</a></li>
                        <li><a href="#">privacy policy</a></li>
                        
                    </ul>
                </div>
                
               
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="#"><Facebook/></a>
                        <a href="#"><Instagram/></a>
                        <a href="#"><Twitter/></a>
                        <a href="#"><WhatsApp/></a>
                    </div>
                </div>

                
            </div>
        </div>
   </footer>
    }
}