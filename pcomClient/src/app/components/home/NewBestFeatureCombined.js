"use client"
import React from 'react'
import { useState } from "react";
import NewProduct from './NewProduct'
import BestSellerProduct from './BestSellerProduct'
import FeaturedProduct from './FeaturedProduct'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function NewBestFeatureCombined() {
 
  return (
        <>
            <div className="product-area pt-60 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                                 <Tabs className={'li-product-tab'}>
                                    <TabList className={'nav li-product-menu'}>
                                        <Tab>
                                            <a className="active" data-toggle="tab"><span>New Arrival</span></a>
                                            </Tab>
                                        <Tab>
                                            <a data-toggle="tab" ><span>Bestseller</span></a>
                                        </Tab>
                                        <Tab>
                                            <a data-toggle="tab"><span>Featured Products</span></a>
                                        </Tab>
                                    </TabList>
                                <TabPanel>
                                    <NewProduct/>
                               </TabPanel>
                                <TabPanel>
                                    <BestSellerProduct/>
                                </TabPanel>
                                <TabPanel>
                                    <FeaturedProduct/>
                                </TabPanel>
                            </Tabs> 

                           

                        </div>
                        
                    </div>
                   
                </div>
                <div>
               
                </div>
            </div>
        </>
  )
}
