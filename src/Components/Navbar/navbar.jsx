import BrandName from "../BrandName/brand_name";
import NavItem from "../NavItems/nav_item";
import './navbar.css';
import React from "react";
import AppsIcon from '@mui/icons-material/Apps';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default class Navbar extends React.Component{

    constructor(){
        super();

        this.state = {
            socks: ["Ankle Socks","Loffer socks"],
            tshirts: ["Long Sleeves Tshirts","Short Sleeves Tshirst"]
        }
    }

    render(){
        console.log("saa");
        return(<div id="nav">
            <section id="section1">
                <span id="nav-pop-icon">
                    <AppsIcon/>
                </span>
                <span className="nav-bar-extra1">
                    <SearchOutlinedIcon id="search-icon"/>
                </span>
                <BrandName/>
                <span className="nav-bar-extra2">
                    <Person2OutlinedIcon id="profile-icon" />
                    <ShoppingCartOutlinedIcon id="cart-icon"/>
                </span>
            </section>
            
            <section id="section2">
                <NavItem name="SOCKS" subItems={this.state.socks}/>
                <NavItem name="T-SHIRTS" subItems={this.state.tshirts}/>
                <NavItem name="SHORTS" subItems={[]}/>
                <NavItem name="SCARFS" subItems={[]}/>
                <NavItem name="NEW ARRIVALS" subItems={[]}/>
                <NavItem name="BEST SELLER" subItems={[]}/>
            </section>
        </div>);
    }
}