
import React from "react";
import './product_list_view.css';
import Navbar from "../../Components/Navbar/navbar";
import gsap from "gsap/gsap-core";
import CSSPlugin from "gsap/CSSPlugin";
import { Expo } from "gsap";
import ProductListSidebarItem from "../../Components/SidebarItem/product-list-sidebar-item";
import ProductCard from "../../Components/ProductCard/product-card";

class ProductList extends React.Component {

    constructor(props) {
        super();
        this.gsap = gsap;
        this.gsap.registerPlugin(CSSPlugin);
        this.effect = Expo.easeInOut;
    }

    render() {
        return <section id="main">
            <section id="nav-section">
                <Navbar navigate={this.props.navigate} gsap={this.gsap} effect={this.effect} />
            </section>
            <br/>
            <h1 id="head-title">PRODUCTS</h1>
            
            <section id="body-section">
                
                <section id="sidebar-section">
                    <h2 id="title" >Filters</h2>
                    <br/>
                    <ProductListSidebarItem mainItem="Product Type"/>
                    <ProductListSidebarItem mainItem="Category"/>
                    <ProductListSidebarItem mainItem="Size"/>
                    <ProductListSidebarItem mainItem="Gender"/>
                </section>
                
                <br/>

                <section id="nav-section">
                    <div id="item1"><h3>Filters</h3></div>
                    <div id="item2"><h3>Sort by</h3></div>
                </section>


                <section id="product-list-section">
                    
                    <section id="product-list-section-body">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                    </section>
                </section>
            </section>
        </section>;
    }
}




export default function ProductListView() {
    return <ProductList />
}