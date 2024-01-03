import React from "react";
import './nav_item.css';
export default function NavItem(param){
    console.log(param);
    return(<li  className="nav-item">
        <h3>{param.name}
            <ul className="submenu">
                {param.subItems.map((val,index) => <li><h5>{val.item}</h5></li>)}
            </ul>
        </h3>
        {/* <ul className="submenu">
            <li>ankle socks</li>
            <li>Lofer socks</li>
        </ul> */}
    </li>);
}