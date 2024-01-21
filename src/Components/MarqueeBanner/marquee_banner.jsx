import './marquee_banner.css';
import React from 'react';
export default function MarqueeBanner(props){

    const style = {
        color: 'white',
        textShadow: ' 0px 0px 2px #000'
    }
   
    return(
        <section id='marquee-banner-section-main'>
            <section id='marquee-banner-section1'>
                <h1 >MADE IN INDIA <span style={style} > DESIGN IN INDIA</span> MADE IN INDIA <span style={style} >DESIGN IN INDIA</span> MADE IN INDIA <span style={style} >DESIGN IN INDIA</span> MADE IN INDIA <span style={style} >DESIGN IN INDIA</span> </h1>
            </section>
        </section>
    );
}