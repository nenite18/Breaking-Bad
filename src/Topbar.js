import React from 'react'
import './TopBar.css'

export const Topbar = () => {
    return (
        <div className="topBar">
            <div className="topLeft">
                <h1><span>Br</span>eaking <span>Ba</span>d</h1>
            </div>
            <div className="top">    
            {/* <i class="fas fa-search"></i>             */}
            <input type="text" className="top" placeholder="search" />         
                        
            </div>


           <div className="topRight"></div>
        </div>
    )
}
