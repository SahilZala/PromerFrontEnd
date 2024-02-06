import React from "react";

import './nav_item.css';
export default function NavItem(param){
    return(<li onClick={() => param.onMainClick()} className="nav-item" key={param.keyVal}>
        <h3 >{param.name}
            <ul className="submenu">
                {param.subItems.map((val,index) => <li key={index} ><h5 onClick={() => val.onClick()}>{val.item}</h5></li>)}
            </ul>
        </h3>
    </li>);
}