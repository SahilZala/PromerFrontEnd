import React from "react";
import './sidebar.css';
import { Close } from "@mui/icons-material";
import SidebarItem from "../SidebarItem/sidebar-item";
export default class Sidebar extends React.Component{
    
    render(){
        return(<section  style={{width: this.props.width, visibility:this.props.visibility}} className="sidebar-section">
            <section className="items">
                <br/>
                <div className="closebtn" onClick={()=>this.props.closeDrawer()}>
                    <Close/>
                </div>
                <br/>
                {
                    this.props.items.map((data,index) => <SidebarItem item={data}/>)
                }                
                
                
            </section>
        </section>);
    }
}