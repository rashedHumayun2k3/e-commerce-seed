import React from 'react'
import Link from 'next/link';
import DemoSlider from '../slider/slider';

export default function BestSellerProduct() {
  return (
        <>
            <div id="li-bestseller-product" className="tab-pane" role="tabpanel">
                <div className="row">
                    <DemoSlider/>
                </div>
            </div>  
        </>
  )
}
