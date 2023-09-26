import React from 'react'

export default function HeaderTopBar() {
  return (
  <>
  <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="header-top-left">
                            <ul className="phone-wrap">
                                <li><span>Telephone Enquiry:</span><a href="#">(+123) 123 321 345</a></li>
                            </ul>
                        </div>
                    </div>
                   
                    <div className="col-lg-9 col-md-8">
                        <div className="header-top-right">
                            <ul className="ht-menu">
                                <li>
                                    <div className="ht-setting-trigger"><span>Setting</span></div>
                                    <div className="setting ht-setting">
                                        <ul className="ht-setting-list">
                                            <li><a href="login-register.html">My Account</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="login-register.html">Sign In</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <span className="currency-selector-wrapper">Currency :</span>
                                    <div className="ht-currency-trigger"><span>USD $</span></div>
                                    <div className="currency ht-currency">
                                        <ul className="ht-setting-list">
                                            <li><a href="#">EUR €</a></li>
                                            <li className="active"><a href="#">USD $</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <span className="language-selector-wrapper">Language :</span>
                                    <div className="ht-language-trigger"><span>English</span></div>
                                    <div className="language ht-language">
                                       <ul className="ht-setting-list">
                                            <li className="active"><a href="#"> 
                                         
                                            
                                            English</a>
                                            </li>
                                            <li><a href="#"> 
                                         
                                            <img src="/asset/images/menu/flag-icon/2.jpg" alt=""/> 
                                          
                                            Français</a>
                                            </li>
                                        </ul> 
                                    </div>
                                </li>
                             
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
  </>
  )
}
