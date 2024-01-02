import React from "react";
import './descriptinon-label.css';
import { AcUnit, LocalLaundryService, RvHookup, SelfImprovement } from "@mui/icons-material";
export default function DescriptionLabel(){
    return(<div id="description-lable-body">
        <h4 id="d1"><spam><RvHookup style={{padding: '5px'}}/></spam>SPEED DELIVERY</h4>
        
        <h4 id="d2"><spam><AcUnit style={{padding: '5px'}}/></spam>BEST FABRIC</h4>
        <h4 id="d3"><spam><SelfImprovement style={{padding: '5px'}}/></spam>FLEXIBLE IN SIZE </h4>
        <h4 id="d4"><spam><LocalLaundryService style={{padding: '5px'}}/></spam>EASY TO WASH</h4>
    </div>);
}