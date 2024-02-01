
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

        document.body.style.overflow = "scroll";
        this.gsap = gsap;
        this.gsap.registerPlugin(CSSPlugin);
        this.effect = Expo.easeInOut;


        this.state = {
            isFilterOpen: false,
            isSortByOpen: false,
            isExpanderOpen: false,
        }
    }

    render() {
        return <section id="main">
            <section id="nav-section">
                <Navbar navigate={this.props.navigate} gsap={this.gsap} effect={this.effect} />
            </section>
            <br/>
            <h1 id="head-title">PRODUCTS</h1>
            
            <section id="body-section">
                
                <section id="product-sidebar-section">
                    <h2 id="title" >Filters</h2>
                    <br/>
                    <ProductListSidebarItem mainItem="Product Type"/>
                    <ProductListSidebarItem mainItem="Category"/>
                    <ProductListSidebarItem mainItem="Size"/>
                    <ProductListSidebarItem mainItem="Gender"/>
                </section>
                
                <br/>

                <section id="nav-section">
                <div style={{display: 'flex',justifyContent: 'space-between'}}>
                    <div onClick={ () => this.setState({
                         isFilterOpen: !this.state.isFilterOpen,
                         isSortByOpen: false,
                         isExpanderOpen: !this.state.isFilterOpen
                    })} id="item1"><h3>Filters</h3></div>
                    <div onClick={ () => this.setState({
                         isFilterOpen: false,
                         isSortByOpen: !this.state.isSortByOpen,
                         isExpanderOpen: !this.state.isSortByOpen,
                    })} id="item2"><h3>Sort by</h3></div>
                </div>
                <div id="product-nav-expander" style={{
                    maxHeight: this.state.isExpanderOpen ? '1000px' : '0px'
                }}>
                    {this.state.isFilterOpen ? <>
                        <ProductListSidebarItem mainItem="Product Type"/>
                    <ProductListSidebarItem mainItem="Category"/>
                    <ProductListSidebarItem mainItem="Size"/>
                    <ProductListSidebarItem mainItem="Gender"/>
                    </> : <></>}


                    {this.state.isSortByOpen ? <>
                        <ProductListSidebarItem mainItem="Product Type"/>
                    <ProductListSidebarItem mainItem="Category"/>
                    </> : <></>}
                    
                </div>
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