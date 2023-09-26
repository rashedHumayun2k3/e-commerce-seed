import React from "react";
import {useGetAllProductQuery} from '@/redux/api/productAPI'
import ActionOnProduct from '@/app/components/action-on-product/ActionOnProduct'
import Link from 'next/link'

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
const options = {
  responsiveClass: true,
  nav: true,
  autoplay: false,
  navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
  smartSpeed: 1000,
  // responsive: {
  //     0: {
  //         items: 1,
  //     },
  //     400: {
  //         items: 1,
  //     },
  //     600: {
  //         items: 2,
  //     },
  //     700: {
  //         items: 3,
  //     },
  //     1000: {
  //         items: 5,
  //     }
  // },
};


export default function DemoSlider() {
  const { data, isLoading: loading, error, isSucces } = useGetAllProductQuery()
    let content
  console.log(data)
  return (
    <>
      {
        data && data.products ?
        <OwlCarousel className="product-active" {...options}>

       {data.products?.map((item, index) => (
       
          <div key={index} className="col-lg-12">
              <div className="single-product-wrap">
                  <div className="product-image">
                  <Link href="/products/single-product-details-show">  
                  <img src={item.thumbnail} alt="Li's Product Image"/>
                  </Link>
                  <span className="sticker">New</span>
                  </div>
                  <div className="product_desc">
                      <div className="product_desc_info">
                          <div className="product-review">
                              <h5 className="manufacturer">
                                  <a href="shop-left-sidebar.html">{item.category}</a>
                              </h5>
                              <div className="rating-box">
                                  <ul className="rating">
                                      <li><i className="fa fa-star-o"></i></li>
                                      <li><i className="fa fa-star-o"></i></li>
                                      <li><i className="fa fa-star-o"></i></li>
                                      <li className="no-star"><i className="fa fa-star-o"></i></li>
                                      <li className="no-star"><i className="fa fa-star-o"></i></li>
                                  </ul>
                              </div>
                          </div>
                          <h4>
                              <Link href="/products/single-product-details-show">{item.title}</Link>
                              </h4>
                          <div className="price-box">
                              <span className="new-price">{item.price}</span>
                          </div>
                      </div>
                      <div className="add-actions">
                        <ActionOnProduct />
                      </div>
                  </div>
                </div>
            </div>
       
       ))}  

      </OwlCarousel> : null
    }
    </>
  );
}

