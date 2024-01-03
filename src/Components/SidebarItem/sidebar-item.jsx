import React, { useState } from "react";
import './sidebar-item.css';
import { Add, Minimize } from "@mui/icons-material";
export default function SidebarItem(props){
    const [isop,isOpen] = useState(false);
    return <div className="sidebar-item"><div className="mainitem">
        <h3>{props.item.item}</h3>
        {props.item.subItem.length !== 0 ? isop === true ? <Minimize onClick={()=>isOpen(false)}/> : <Add onClick={() => isOpen(true)}/> : <></>}
        
        </div>  
        {isop === true ? <div className="subitem">
            {props.item.subItem.map((data,index) => <h4>{data.item}</h4>)}
            
        </div> : <></>}
       
    </div>;   
}