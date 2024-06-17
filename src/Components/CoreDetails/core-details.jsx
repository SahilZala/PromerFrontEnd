import React from "react";
import './core-details.css';
export default function CoreDetails(props){
    return (<section id="core-details">
        <section id="image-section">
            <img alt="" src={props.url}></img>
        </section>
        <section id="detail-section">
            <h2>{props.head}</h2>
            {props.details}
        </section>
    </section>);
}