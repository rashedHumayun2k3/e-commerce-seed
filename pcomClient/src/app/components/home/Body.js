import React, { useEffect } from 'react'
import NewBestFeatureCombined from './NewBestFeatureCombined'
import Link from 'next/link'
import { setSelectedProduct, getSelectedProduct } from '@/redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'



export default function Body() {
    const dispatch = useDispatch();
    const selectedProduct=useSelector(getSelectedProduct);
    console.log(selectedProduct);
    useEffect(()=>{
        console.log(selectedProduct)
    },[selectedProduct])
  return (
    <>
        <div className="body-wrapper">
           <NewBestFeatureCombined/> 
            <div className="li-static-banner">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="single-banner">
                                <a href="#">
                                    <img src="/asset/images/banner/1_3.jpg" alt="Li's Static Banner"/>
                                </a>
                            </div>
                        </div>
                        
                        
                        <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                            <div className="single-banner">
                                <a href="#">
                                    <img src="/asset/images/banner/1_4.jpg" alt="Li's Static Banner"/>
                                </a>
                            </div>
                        </div>
                        
                        
                        <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                            <div className="single-banner">
                                <a href="#">
                                    <img src="/asset/images/banner/1_5.jpg" alt="Li's Static Banner"/>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            
            <section className="product-area li-laptop-product pt-60 pb-45">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="li-section-title">
                                <h2>
                                    <span>Laptop</span>
                                </h2>
                               
                                <ul className="li-sub-category-list">
                                    <li className="active"><a href="shop-left-sidebar.html">Prime Video</a></li>
                                    <li><a href="shop-left-sidebar.html">Computers</a></li>
                                    <li><a href="shop-left-sidebar.html">Electronics</a></li>
                                </ul>
                            </div>
                            <div className="row">
                         
                                <div className="product-active owl-carousel">
                               
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/1.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/2.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$71.80</span>
                                                        <span className="old-price">$77.22</span>
                                                        <span className="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/3.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/4.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$71.80</span>
                                                        <span className="old-price">$77.22</span>
                                                        <span className="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/5.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/6.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$71.80</span>
                                                        <span className="old-price">$77.22</span>
                                                        <span className="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
           
            
            <section className="product-area li-laptop-product li-tv-audio-product pb-45">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="li-section-title">
                                <h2>
                                    <span>TV & Audio</span>
                                </h2>
                                <ul className="li-sub-category-list">
                                    <li className="active"><a href="shop-left-sidebar.html">Chamcham</a></li>
                                    <li><a href="shop-left-sidebar.html">Sanai</a></li>
                                    <li><a href="shop-left-sidebar.html">Meito</a></li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="product-active owl-carousel">
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/3.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/5.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$71.80</span>
                                                        <span className="old-price">$77.22</span>
                                                        <span className="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/7.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/9.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$71.80</span>
                                                        <span className="old-price">$77.22</span>
                                                        <span className="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/11.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/11.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$71.80</span>
                                                        <span className="old-price">$77.22</span>
                                                        <span className="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
           
            <div className="li-static-home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                           
                            <div className="li-static-home-image"></div>
                           
                            <div className="li-static-home-content">
                                <p>Sale Offer<span>-20% Off</span>This Week</p>
                                <h2>Featured Product</h2>
                                <h2>Meito Accessories 2018</h2>
                                <p className="schedule">
                                    Starting at
                                    <span> $1209.00</span>
                                </p>
                                <div className="default-btn">
                                    <a href="shop-left-sidebar.html" className="links">Shopping Now</a>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
           
            <section className="product-area li-trending-product pt-60 pb-45">
                <div className="container">
                    <div className="row">
                     
                        <div className="col-lg-12">
                            <div className="li-product-tab li-trending-product-tab">
                                <h2>
                                    <span>Trendding Products</span>
                                </h2>
                                <ul className="nav li-product-menu li-trending-product-menu">
                                   <li><a className="active" data-toggle="tab" href="#home1"><span>Sanai</span></a></li>
                                   <li><a data-toggle="tab" href="#home2"><span>Camera Accessories</span></a></li>
                                   <li><a data-toggle="tab" href="#home3"><span>XailStation</span></a></li>
                                </ul>               
                            </div>
                        
                            <div className="tab-content li-tab-content li-trending-product-content">
                                <div id="home1" className="tab-pane show fade in active">
                                    <div className="row">
                                        <div className="product-active owl-carousel">
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/2.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price">$46.80</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/4.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price new-price-2">$71.80</span>
                                                                <span className="old-price">$77.22</span>
                                                                <span className="discount-percentage">-7%</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/6.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price">$46.80</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/8.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price new-price-2">$71.80</span>
                                                                <span className="old-price">$77.22</span>
                                                                <span className="discount-percentage">-7%</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/10.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price">$46.80</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/12.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price new-price-2">$71.80</span>
                                                                <span className="old-price">$77.22</span>
                                                                <span className="discount-percentage">-7%</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="home2" className="tab-pane fade">
                                    <div className="row">
                                        <div className="product-active owl-carousel">
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/11.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price">$46.80</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/7.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price new-price-2">$71.80</span>
                                                                <span className="old-price">$77.22</span>
                                                                <span className="discount-percentage">-7%</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/9.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price">$46.80</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/5.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price new-price-2">$71.80</span>
                                                                <span className="old-price">$77.22</span>
                                                                <span className="discount-percentage">-7%</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/7.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price">$46.80</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/5.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price new-price-2">$71.80</span>
                                                                <span className="old-price">$77.22</span>
                                                                <span className="discount-percentage">-7%</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="home3" className="tab-pane fade">
                                    <div className="row">
                                        <div className="product-active owl-carousel">
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/3.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price">$46.80</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/7.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price new-price-2">$71.80</span>
                                                                <span className="old-price">$77.22</span>
                                                                <span className="discount-percentage">-7%</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/9.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price">$46.80</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/1.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price new-price-2">$71.80</span>
                                                                <span className="old-price">$77.22</span>
                                                                <span className="discount-percentage">-7%</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/11.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price">$46.80</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                
                                                <div className="single-product-wrap">
                                                    <div className="product-image">
                                                        <a href="single-product.html">
                                                            <img src="/asset/images/product/large-size/9.jpg" alt="Li's Product Image"/>
                                                        </a>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                    <div className="product_desc">
                                                        <div className="product_desc_info">
                                                            <div className="product-review">
                                                                <h5 className="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                            <div className="price-box">
                                                                <span className="new-price new-price-2">$71.80</span>
                                                                <span className="old-price">$77.22</span>
                                                                <span className="discount-percentage">-7%</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-actions">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                                <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                       
                    </div>
                </div>
            </section>
            
            
            <section className="product-area li-laptop-product li-trendding-products best-sellers pb-45">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="li-section-title">
                                <h2>
                                    <span>Bestsellers</span>
                                </h2>
                            </div>
                            <div className="row">
                                <div className="product-active owl-carousel">
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/11.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/7.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$71.80</span>
                                                        <span className="old-price">$77.22</span>
                                                        <span className="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/9.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/5.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$71.80</span>
                                                        <span className="old-price">$77.22</span>
                                                        <span className="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/7.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        
                                        <div className="single-product-wrap">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="/asset/images/product/large-size/5.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span className="sticker">New</span>
                                            </div>
                                            <div className="product_desc">
                                                <div className="product_desc_info">
                                                    <div className="product-review">
                                                        <h5 className="manufacturer">
                                                            <a href="shop-left-sidebar.html">Studio Design</a>
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
                                                    <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                                    <div className="price-box">
                                                        <span className="new-price new-price-2">$71.80</span>
                                                        <span className="old-price">$77.22</span>
                                                        <span className="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div className="add-actions">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
          
            <div className="modal fade modal-wrapper" id="exampleModalCenter" >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-inner-area row">
                                <div className="col-lg-5 col-md-6 col-sm-6">
                                  
                                    <div className="product-details-left">
                                        <div className="product-details-images slider-navigation-1">
                                            <div className="lg-image">
                                                <img src="/asset/images/product/large-size/1.jpg" alt="Product Image"/>
                                            </div>
                                            <div className="lg-image">
                                                <img src="/asset/images/product/large-size/2.jpg" alt="Product Image"/>
                                            </div>
                                            <div className="lg-image">
                                                <img src="/asset/images/product/large-size/3.jpg" alt="Product Image"/>
                                            </div>
                                            <div className="lg-image">
                                                <img src="/asset/images/product/large-size/4.jpg" alt="Product Image"/>
                                            </div>
                                            <div className="lg-image">
                                                <img src="/asset/images/product/large-size/5.jpg" alt="Product Image"/>
                                            </div>
                                            <div className="lg-image">
                                                <img src="/asset/images/product/large-size/6.jpg" alt="Product Image"/>
                                            </div>
                                        </div>
                                        <div className="product-details-thumbs slider-thumbs-1">                                        
                                            <div className="sm-image"><img src="/asset/images/product/small-size/1.jpg" alt="product image thumb"/></div>
                                            <div className="sm-image"><img src="/asset/images/product/small-size/2.jpg" alt="product image thumb"/></div>
                                            <div className="sm-image"><img src="/asset/images/product/small-size/3.jpg" alt="product image thumb"/></div>
                                            <div className="sm-image"><img src="/asset/images/product/small-size/4.jpg" alt="product image thumb"/></div>
                                            <div className="sm-image"><img src="/asset/images/product/small-size/5.jpg" alt="product image thumb"/></div>
                                            <div className="sm-image"><img src="/asset/images/product/small-size/6.jpg" alt="product image thumb"/></div>
                                        </div>
                                    </div>
                                  
                                </div>

                                <div className="col-lg-7 col-md-6 col-sm-6">
                                    <div className="product-details-view-content pt-60">
                                        <div className="product-info">
                                            <h2>Today is a good day Framed poster</h2>
                                            <span className="product-details-ref">Reference: demo_15</span>
                                            <div className="rating-box pt-20">
                                                <ul className="rating rating-with-review-item">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="review-item"><a href="#">Read Review</a></li>
                                                    <li className="review-item"><a href="#">Write Review</a></li>
                                                </ul>
                                            </div>
                                            <div className="price-box pt-20">
                                                <span className="new-price new-price-2">$57.98</span>
                                            </div>
                                            <div className="product-desc">
                                                <p>
                                                    <span>100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="product-variants">
                                                <div className="produt-variants-size">
                                                    <label>Dimension</label>
                                                    <select className="nice-select">
                                                        <option value="1" title="S" selected="selected">40x60cm</option>
                                                        <option value="2" title="M">60x90cm</option>
                                                        <option value="3" title="L">80x120cm</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="single-add-to-cart">
                                                <form action="#" className="cart-quantity">
                                                    <div className="quantity">
                                                        <label>Quantity</label>
                                                        <div className="cart-plus-minus">
                                                            <input className="cart-plus-minus-box" value="1" type="text"/>
                                                            <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                                            <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                                        </div>
                                                    </div>
                                                    <button className="add-to-cart" type="submit">Add to cart</button>
                                                </form>
                                            </div>
                                            <div className="product-additional-info pt-25">
                                                <a className="wishlist-btn" href="wishlist.html"><i className="fa fa-heart-o"></i>Add to wishlist</a>
                                                <div className="product-social-sharing pt-25">
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="fa fa-facebook"></i>Facebook</a></li>
                                                        <li className="twitter"><a href="#"><i className="fa fa-twitter"></i>Twitter</a></li>
                                                        <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i>Google +</a></li>
                                                        <li className="instagram"><a href="#"><i className="fa fa-instagram"></i>Instagram</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
           
        </div>
      
</>
  )
}
