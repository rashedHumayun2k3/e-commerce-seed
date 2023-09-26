"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import SearchBar from './SearchBar';

export default function HeaderMiddleBar() {
    const [isOpen, setOpen] = useState(false);
    const toggleMiniCart = () => setOpen(!isOpen);

    return (
    <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
    <div className="container">
        <div className="row">
           
            <div className="col-lg-3">
                <div className="logo pb-sm-30 pb-xs-30">
                    <Link href="/tablets/apple--xiaomi-brand--amazon--redmi/?from=filter&service=INSTALLMENT,COD&location=-21&rating=5&price=100-5000&ppath=7:192950,7:4498,7:123719065,8:4447,31084:185427" >
                        <img src="/asset/images/menu/logo/1.jpg" alt=""/> 
                    </Link>
                </div>
            </div>
        
            <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
               
                <div className="hm-searchbox">
                    <SearchBar/>
                    
                    <button className="li-btn" type="submit"><i className="fa fa-search"></i></button>
                </div>
               
                <div className="header-middle-right">
                    <ul className="hm-menu">
                      
                        <li className="hm-wishlist">
                            <a href="wishlist.html">
                                <span className="cart-item-count wishlist-item-count">0</span>
                                <i className="fa fa-heart-o"></i>
                            </a>
                        </li>
                       
                        <li className="hm-minicart" onClick={toggleMiniCart}>
                            <div className={`hm-minicart-trigger ${isOpen ? 'is-active':''}`}>
                                <span className="item-icon"></span>
                                <span className="item-text">£80.00
                                    <span className="cart-item-count">2</span>
                                </span>
                            </div>
                            <span></span>
                            <div className={`minicart ${isOpen ? 'is-show':''}`} >
                                <ul className="minicart-product-list">
                                    <li>
                                        <a href="single-product.html" className="minicart-product-image">
                                            <img src="/asset/images/product/small-size/5.jpg" alt="cart products"/>
                                        </a>
                                        <div className="minicart-product-details">
                                            <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                                            <span>£40 x 1</span>
                                        </div>
                                        <button className="close" title="Remove">
                                            <i className="fa fa-close"></i>
                                        </button>
                                    </li>
                                    <li>
                                        <a href="single-product.html" className="minicart-product-image">
                                            <img src="/asset/images/product/small-size/6.jpg" alt="cart products"/> 
                                        </a>
                                        <div className="minicart-product-details">
                                            <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                                            <span>£40 x 1</span>
                                        </div>
                                        <button className="close" title="Remove">
                                            <i className="fa fa-close"></i>
                                        </button>
                                    </li>
                                </ul>
                                <p className="minicart-total">SUBTOTAL: <span>£80.00</span></p>
                                <div className="minicart-button">
                                    <Link href="/shopping-cart" className="li-button li-button-fullwidth li-button-dark">
                                        <span>View Full Cart</span>
                                    </Link>
                                    <Link href="/checkout" className="li-button li-button-fullwidth">
                                        <span>Checkout</span>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    
                    </ul>
                </div>
              
            </div>
         
        </div>
    </div>
</div>
  )
}
