import BrandName from "../BrandName/brand_name";
import NavItem from "../NavItems/nav_item";
import './navbar.css';
import React from "react";
import AppsIcon from '@mui/icons-material/Apps';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Sidebar from "../Sidebar/sidebar";
export default class Navbar extends React.Component {

    constructor() {
        super();

        this.myViews = {
            1: <>SOCKS</>,
            2: <>T-SHIRTS</>,
            3: <>SHORTS</>,
            4: <>SCARFS</>,
            5: <>NEW ARRIVALS</>,
            6: <>BEST SELLER</>,
            11: <>Loffer Socks</>,
            12: <>Ankle Socks</>,
            21: <>Long sleeves tshirts</>,
            22: <>Short sleeves tshirts</>,
        }

        this.state = {
            itemData: [{
                id: 1,
                item: "SOCKS",
                icon: <></>,
                subItem: [
                    {
                        id: 11,
                        item: "Loffer Socks"
                    },
                    {
                        id: 12,
                        item: "Ankle Socks",
                    }
                ],
            }, 
            {
                id: 2,
                item: "T-SHIRTS",
                icon: <></>,
                subItem: [{
                    id: 21,
                    item: "Full sleeves t-shirts"
                },{
                    id: 22,
                    item: "Half sleeves t-shirts"
                }]
            },
            {
                id: 3,
                item: "SHORTS",
                icon: <></>,
                subItem: []
            },{
                id: 4,
                item: "SCARFS",
                icon: <></>,
                subItem: []
            },
            {
                id: 5,
                item: "NEW ARRIVALS",
                icon: <></>,
                subItem: []
            },
            {
                id: 6,
                item: "BEST SELLER",
                icon: <></>,
                subItem: []
            }
            ],
            width: "0px",
            isOpen: false,
            visibility: "hidden"
        }
    }

    render() {
        console.log("saa");
        return (<div id="nav">
            <section id="section1">
                <span id="nav-pop-icon">
                    <AppsIcon onClick={() => {
                        this.openDrawer();
                    }}/>
                    
                </span>
                <span className="nav-bar-extra1">
                    <SearchOutlinedIcon id="search-icon" />
                </span>
                <BrandName />
                <span className="nav-bar-extra2">
                    <Person2OutlinedIcon id="profile-icon" />
                    <ShoppingCartOutlinedIcon id="cart-icon" />
                </span>
            </section>

            <section id="section2">

                {
                    this.state.itemData.map((data,index) => {
                        return <NavItem name={data.item} subItems={data.subItem} />
                    })
                }
                {/* <NavItem name="SOCKS" subItems={this.state.socks} />
                <NavItem name="T-SHIRTS" subItems={this.state.tshirts} />
                <NavItem name="SHORTS" subItems={[]} />
                <NavItem name="SCARFS" subItems={[]} />
                <NavItem name="NEW ARRIVALS" subItems={[]} />
                <NavItem name="BEST SELLER" subItems={[]} /> */}
            </section>
            <Sidebar visibility={this.state.visibility} items={this.state.itemData} isOpen={this.state.isOpen} width={this.state.width} closeDrawer={ () => this.closeDrawer()}/>
        </div>);
    }


    openDrawer = () => {
        document.body.style.overflow = "hidden"
        this.setState({
            visibility: "visible",
            width: "250px",
            isOpen: true
        });
    }

    closeDrawer = () => {
        document.body.style.overflow = "scroll"
        this.setState({
            visibility: "hidden",
            width: "0px",
            isOpen: false
        });
    }

}