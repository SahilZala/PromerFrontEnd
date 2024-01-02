import React from "react"
import "./top-pics-products.css";
import ProductCard from "../ProductCard/product-card";
export default class TopPicsProducts extends React.Component{
    render(){
        return <section className="top-pics-section">
            <header>
                <h2>
                    #TOP PICS FOR YOU
                </h2>
            </header>
            <section className="top-pics-body">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </section>
            <br/>
            <br/>
            <footer className="top-pics-footer">
                <button>GET MORE</button>
            </footer>
        </section>;
    }
}