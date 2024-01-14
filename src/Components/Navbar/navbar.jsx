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

    
    constructor(props) {
        super();

        this.myViews = {
            1: <>HOME</>,
            2: <>PRODUCTS</>,
            3: <>NEW ARRIVAL</>,
            4: <>BEST SELLER</>,
            5: <>ABOUT US</>,
            6: <>CONTACT DETAILS</>,
            21: <>SOCKS</>,
            22: <>SHORTS</>,
            23: <>T-SHIRTS</>,
            24: <>SCARFS</>,
            25: <>HOODIES</>,
            26: <>SWEAT SHIRTS</>
        }

        this.state = {
            itemData: [{
                id: 1,
                item: "HOME",
                icon: <></>,
                subItem: [

                ],
            }, 
            {
                id: 2,
                item: "PRODUCTS",
                icon: <></>,
                subItem: [ {
                    id: 21,
                    item: "SOCKS"
                },
                {
                    id: 22,
                    item: "SHORTS",
                },
                {
                    id: 23,
                    item: "T-SHIRTS",
                },
                {
                    id: 24,
                    item: "SCARFS",
                },
                {
                    id: 25,
                    item: "HOODIES",
                },
                {
                    id: 26,
                    item: "SWEAT SHIRTS",
                }]
            },
            {
                id: 3,
                item: "NEW ARRIVALS",
                icon: <></>,
                subItem: []
            },{
                id: 4,
                item: "BEST SELLER",
                icon: <></>,
                subItem: []
            },
            {
                id: 5,
                item: "ABOUT US",
                icon: <></>,
                subItem: []
            },
            {
                id: 6,
                item: "CONTACT DETAILS",
                icon: <></>,
                subItem: []
            }
            ],
            width: "0px",
            isOpen: false,
            visibility: "hidden"
        }

        this.appIconAnim = React.createRef(null);
    }

    componentDidMount(){
        console.log("component did mount");
        this.props.gsap.to([this.appIconAnim.current,"#search-icon","#brand-name","#profile-icon","#cart-icon"],{
            top: "0px",
            easy: this.props.effect,
            duration: 1,
            stagger: .3
        })

        this.props.gsap.to("#section2",{
            opacity: 100,
            ease: this.props.effect,
            duration: 3
            
        });
        this.setState();

    }

    render() {
        
        console.log("saa");
        return (<div id="nav">
            <section id="section1">
                
                <span className="nav-bar-extra1">
                    <SearchOutlinedIcon id="search-icon" />
                    <AppsIcon ref={this.appIconAnim} id="nav-pop-icon-body" onClick={() => {
                        this.openDrawer();
                    }}/>
                </span>
                <span className="nav-bar-brandname">
                    <BrandName id="brand-name"/>
                </span>
                <span className="nav-bar-extra2">
                    <Person2OutlinedIcon id="profile-icon" />
                    <ShoppingCartOutlinedIcon id="cart-icon" />
                </span>
            </section>

            <section id="section2">

                {
                    this.state.itemData.map((data,index) => {
                        return <NavItem timeline={this.props.timeline} effect={this.props.effect} name={data.item} subItems={data.subItem} />
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