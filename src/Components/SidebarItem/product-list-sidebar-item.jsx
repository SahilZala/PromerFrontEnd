import { Add, Minimize } from '@mui/icons-material';
import './product-list-sidebar-item.css';
import React, { useState } from 'react';
export default function ProductListSidebarItem(props) {

    const [isop,isOpen] = useState(false);

    return <div className='product-list-sidebar-item'>
        <div className='main-item'>
            <h3>{props.mainItem}</h3>
            {isop === false ? <Add onClick={()=>{
                isOpen(true);
            }} className='add-icon'/> 
            : <Minimize onClick={() => isOpen(false)} className='add-icon'/>}
                

            
        </div>
        <div style={{
            maxHeight: isop ? '1000px' : '0'
        }} className='sub-item'>
            <div className='sub-item-body'>
                <h4>Socks</h4>
                <input type="checkbox" />
            </div>
            <div className='sub-item-body'>
                <h4>Socks</h4>
                <input type="checkbox" />
            </div>
            <div className='sub-item-body'>
                <h4>Socks</h4>
                <input type="checkbox" />
            </div>
        </div>
    </div>;
}
