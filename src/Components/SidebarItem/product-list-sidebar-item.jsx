import { Add, Minimize } from '@mui/icons-material';
import './product-list-sidebar-item.css';
import React, { useState } from 'react';
export default function ProductListSidebarItem(props) {
    const [isop,isOpen] = useState(false);


    return <div className='product-list-sidebar-item'>
        <div className='main-item'>
            <h3 style={{margin: '0px'}}>{props.mainItem}</h3>
            {isop === false ? <Add onClick={()=>{
                isOpen(true);
            }} className='add-icon'/> 
            : <Minimize onClick={() => isOpen(false)} className='add-icon'/>}
                

            
        </div>
        <div style={{
            maxHeight: isop ? '1000px' : '0'
        }} className='sub-item'>

            {props.subItem.map((data) => 
                <div key = {data.id} className='sub-item-body'>
                <h4>{data.title}</h4>
                <input onClick={()=>{
                    props.onCheckedClick(data.id);
                }} checked={data.checked}  type="checkbox" />
            </div>   
            )}

        </div>
    </div>;
}
