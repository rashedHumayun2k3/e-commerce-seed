"use client"
import React, { useEffect } from 'react'
import FilterCheckBoxGateway from '@/app/components/search/FilterCheckBoxGateway';
import ClearAllFilter from '@/app/components/search/ClearAllFilter'

export default function SearchLandingLeft() {
  

    return (
    <div className="col-filter-part order-2">
                    
    <div className="sidebar-categores-box mt-sm-30 mt-xs-30">
        <div className="sidebar-title">
            <h2>Laptop</h2>
        </div>
       
      
        <div className="category-sub-menu">
            {/* <ul>
                <li className="has-sub"><a href="# ">Prime Video</a>
                    <ul>
                        <li><a href="#">All Videos</a></li>
                        <li><a href="#">Blouses</a></li>
                        <li><a href="#">Evening Dresses</a></li>
                        <li><a href="#">Summer Dresses</a></li>
                        <li><a href="#">T-Rent or Buy</a></li>
                        <li><a href="#">Your Watchlist</a></li>
                        <li><a href="#">Watch Anywhere</a></li>
                        <li><a href="#">Getting Started</a></li>  
                    </ul>
                </li>
                <li className="has-sub"><a href="#">Computer</a>
                    <ul>
                        <li><a href="#">TV & Video</a></li>
                        <li><a href="#">Audio & Theater</a></li>
                        <li><a href="#">Camera, Photo</a></li>
                        <li><a href="#">Cell Phones</a></li>
                        <li><a href="#">Headphones</a></li>
                        <li><a href="#">Video Games</a></li>
                        <li><a href="#">Wireless Speakers</a></li> 
                    </ul>
                </li>
                <li className="has-sub"><a href="#">Electronics</a>
                    <ul>
                        <li><a href="#">Amazon Home</a></li>
                        <li><a href="#">Kitchen & Dining</a></li>
                        <li><a href="#">Bed & Bath</a></li>
                        <li><a href="#">Appliances</a></li>    
                    </ul>
                </li>
            </ul> */}
        </div>
       
    </div>
    
   
    <div className="sidebar-categores-box">
        <div className="sidebar-title">
            <h2>Filter By</h2>
        </div>
        <ClearAllFilter/>
        <FilterCheckBoxGateway/>
    </div>
  </div>
  )
}
