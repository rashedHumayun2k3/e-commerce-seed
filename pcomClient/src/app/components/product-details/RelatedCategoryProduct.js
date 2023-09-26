import React from 'react'
import Link from 'next/link';
import DemoSlider from '../slider/slider';


export default function RelatedCategoryProduct() {
  return (
    <section className="product-area li-laptop-product pt-30 pb-50">
    <div className="container">
        <div className="row">
          
            <div className="col-lg-12">
                <div className="li-section-title">
                    <h2>
                        <span>15 other products in the same category:</span>
                    </h2>
                </div>
                <div className="row">
                    <div className="product-active">
                    <div id="li-new-product" className="tab-pane active show" role="tabpanel">
                <div className="row">
                    <div className="product-active owl-carousel owl-loaded owl-drag ">
                        <div className='owl-stage-outer'>
                            <div className="owl-stage" >
                                <div className="owl-item cloned  product-list-flex">
                                    <DemoSlider/>
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
  )
}
