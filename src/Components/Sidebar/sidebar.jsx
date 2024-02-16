import React from "react";
import './sidebar.css';
import { Close } from "@mui/icons-material";
import SidebarItem from "../SidebarItem/sidebar-item";
export default class Sidebar extends React.Component{
    
    constructor(props){
        super();
    }

    render(){
        return(<section  style={{width: this.props.width, visibility:this.props.visibility}} className="sidebar-section">
            <section className="items">
                <br/>
                <div className="closebtn" onClick={()=>this.props.closeDrawer()}>
                    <Close/>
                </div>
                <br/>
                {
                    this.props.items.map((data,index) => <SidebarItem onClick={(type) => { 
                        this.props.navigate('/product',{state: {type: type}}) 
                         
                    }} key={index} item={data}/>)
                }                
                
                
            </section>
        </section>);
    }
}