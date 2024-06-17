
import React from "react";
import './product_list_view.css';
import Navbar from "../../Components/Navbar/navbar";
import gsap from "gsap/gsap-core";
import CSSPlugin from "gsap/CSSPlugin";
import { Expo } from "gsap";
import ProductListSidebarItem from "../../Components/SidebarItem/product-list-sidebar-item";
// import ProductCard from "../../Components/ProductCard/product-card";
import ProductTransaction from "../../Transaction/product_transaction";
import NewProductCard from "../../Components/NewProductCard/new_product_card";
import Footer from "../../Components/Footer/footer";
import CategoryTrasaction from "../../Transaction/category_transaction";
import {useLocation,useNavigate} from 'react-router-dom';
import SizeTransaction from "../../Transaction/size_transaction";

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
            products: [],
            categorys: [],
            mainCategory: [],
            subCategory: [],
            productSizeList: [],
            type: props.productType
        }
    }


    componentDidMount(){
        ProductTransaction.getAllProducts().then((data) =>{

            this.setState({
                products: data
            });

            SizeTransaction.getProductSize().then((data) => {
               this.setState({
                    productSizeList: data.map((sub) => {
                        return {id: sub.id,title: sub.title, checked: this.state.products.map((val) => val.productVariant.size.id === sub.id ? true : false)};
                    })
               })
            });
        }).catch((err) => {
            console.log(err);
        });

        CategoryTrasaction.getMainandSubCategory().then((data) => {

            let finalData = [];
            
            data.forEach((val) =>{
                finalData.push({
                id: val.id,
                title: val.title,
                checked: this.props.productType.toString().toLowerCase() === "all" ? true : val.title.toString().toLowerCase() === this.props.productType.toString().toLowerCase() ? true : false,

                subCategory: val.subCategory.map((sub) => {
                    return {id: sub.id,title: sub.title, checked: false};
                })
            })}
            
            )

            this.setState({
                categorys: finalData
            })


        }).catch((err) => {
            console.log(err);
        })
    }

    render() { 
        if(this.props.productType !== this.state.type){
            let finalData = [];
            
            this.state.categorys.forEach((val) =>{
                finalData.push({
                id: val.id,
                title: val.title,
                checked: this.props.productType.toString().toLowerCase() === "all" ? true : val.title.toString().toLowerCase() === this.props.productType.toString().toLowerCase() ? true : false,

                subCategory: val.subCategory.map((sub) => {
                    return {id: sub.id,title: sub.title, checked: false};
                })
            })}
            
            )

            this.setState({
                type: this.props.productType,
                categorys: finalData
            });
        }

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
                    <ProductListSidebarItem mainItem="Category" subItem={this.state.categorys} onCheckedClick = {(id) => {
                        let c = this.state.categorys;
                        c.filter(d => d.id === id )[0].checked = !c.filter(d => d.id === id )[0].checked;
                        this.setState({
                            categorys: c
                        });
                    }}/>
                    {/* <ProductListSidebarItem mainItem="Size" subItem={this.state.productSizeList} onCheckedClick = {(id) => {
                        let c = this.state.productSizeList;
                        c.filter(d => d.id === id )[0].checked = !c.filter(d => d.id === id )[0].checked;
                        this.setState({
                            categorys: c
                        });
                    }} />
                    <ProductListSidebarItem mainItem="Gender" subItem={[]}/> */}
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
                        <ProductListSidebarItem mainItem="Category" subItem={this.state.categorys} onCheckedClick = {(id) => {
                        let c = this.state.categorys;
                        c.filter(d => d.id === id )[0].checked = !c.filter(d => d.id === id )[0].checked;
                        this.setState({
                            categorys: c
                        });
                    }}/>
                    {/* <ProductListSidebarItem mainItem="Size" subItem={[]} />
                    <ProductListSidebarItem mainItem="Gender" subItem={[]}/> */}
                    </> : <></>}


                    {this.state.isSortByOpen ? <>
                        {/* <ProductListSidebarItem mainItem="Product Type"/>
                    <ProductListSidebarItem mainItem="Category"/> */}
                    </> : <></>}
                    
                </div>
                </section>
                    
               

                <section id="product-list-section">
                    
                    {this.state.categorys.length > 0 ?  <section id="product-list-section-body">
                        {this.state.products.map((data,index) => this.state.categorys.filter((val) => val.id === data.productVariant.mainCategory.id)[0].checked ? <NewProductCard onClick={(data) => {this.props.navigate('/product/details',{state: {data : data}})}} key={index} data={data}/> : <></>)}
                    </section> : <></>}
                   
                    
                </section>

                
            </section>
            <br/>
                <br/>
                {/* <section id="gallery-component-section">
                    <Gallery/>
                </section>
                <br/>
                <br/> */}

                <section id="footer-section"> 
                    <Footer/>
                </section>
        </section>;
    }
}




export default function ProductListView() {

    console.log(useLocation().state.type);
    return <ProductList navigate={useNavigate()} productType = {useLocation().state.type} />
}