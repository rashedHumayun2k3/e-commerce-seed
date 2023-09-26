"use client"
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];

export default function HomePageSlider() {
  return (
   <>
   <div className="slider-with-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="slider-area">
                           
                            <div className="slide-container">
                                <Slide>
                                {/* {slideImages.map((slideImage, index)=> (
                                    <div key={index}>
                                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                        <span style={spanStyle}>{slideImage.caption}</span>
                                    </div>
                                    </div>
                                ))}  */}
                                 <div key={0} className="single-slide align-center-left  animation-style-01 bg-1">
                                    <div className="slider-progress"></div>
                                    <div className="slider-content">
                                        <h5>Sale Offer <span>-20% Off</span> This Week</h5>
                                        <h2>Chamcham Galaxy S9 | S9+</h2>
                                        <h3>Starting at <span>$1209.00</span></h3>
                                        <div className="default-btn slide-btn">
                                            <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                        </div>
                                    </div>
                                </div>
                              
                                   
                                    <div  key={1} className="single-slide align-center-left animation-style-02 bg-2">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>Black Friday</span> This Week</h5>
                                            <h2>Work Desk Surface Studio 2018</h2>
                                            <h3>Starting at <span>$824.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                            </div>
                                        </div>
                                    </div>
                                  
                                    <div  key={2} className="single-slide align-center-left animation-style-01 bg-3">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>-10% Off</span> This Week</h5>
                                            <h2>Phantom 4 Pro+ Obsidian</h2>
                                            <h3>Starting at <span>$1849.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>


                               
                            </div>
                        </div>
                       
                       
                     
                    </div>
                </div>
            </div>




    
   </>
  )
}
