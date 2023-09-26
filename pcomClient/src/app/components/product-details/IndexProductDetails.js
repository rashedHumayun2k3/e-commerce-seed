import React from 'react'
import ProductDescription from '@/app/components/product-details/ProductDescription'
//import ProductReview from '@/app/components/components/product-details/ProductReview'
import RelatedCategoryProduct from '@/app/components/product-details/RelatedCategoryProduct'
import ProductSlide from '@/app/components/slider/ProductSlide'
//import ProductDescriptionManual from '@/app/components/components/product-details/ProductDescriptionManual'
//import  ProductDetailsManufacturer from '@/app/components/components/product-details/ProductDetailsManufacturer'

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import 'react-tabs/style/react-tabs.css';

export default function IndexProductDetails() {
  return (
    <>
            <div className="content-wraper">
                <div className="container">
                    <div className="row single-product-area">
                        <div className="col-lg-5 col-md-6">
                            <ProductSlide/>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <ProductDescription/>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="product-area pt-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-product-tab">
                            
                                {/* <Tabs className={'li-product-tab'}>
                                    <TabList className={'nav li-product-menu'}>
                                        <Tab>
                                            <a className="active" data-toggle="tab"><span>Description</span></a>
                                        </Tab>
                                        <Tab>
                                            <a data-toggle="tab" ><span>Product Details</span></a>
                                        </Tab>
                                        <Tab>
                                            <a data-toggle="tab"><span>Reviews</span></a>
                                        </Tab>
                                    </TabList>
                                   
                                    <TabPanel>
                                        <div id="description" className="tab-pane active show" role="tabpanel">
                                            <div className="product-description">
                                                <ProductDescriptionManual/>
                                            </div>
                                        </div>
                                    
                                    </TabPanel>
                                    <TabPanel>
                                        <div id="product-details" className="tab-pane" role="tabpanel">
                                            <div className="product-details-manufacturer">
                                                <ProductDetailsManufacturer/>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div id="reviews" className="tab-pane" role="tabpanel">
                                            <div className="product-reviews">
                                                <ProductReview/>
                                            </div>
                                        </div>
                                    
                                    </TabPanel>
                                     
                                    </Tabs> */}
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
           
          <RelatedCategoryProduct/>
    </>
   
  )
}
