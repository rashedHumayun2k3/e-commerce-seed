"use client"
import React from 'react'
import Link from 'next/link';
import { useGetAllProductQuery } from '@/redux/api/productAPI'
import ProductList from '@/app/components/product-details/ProductList';
import DemoSlider from '../slider/slider';

export default function NewProduct() {

     const { data, isLoading: loading, error, isSucces } = useGetAllProductQuery()
     let content
     console.log(data, loading, error,isSucces)

  return (
   <>
    <div className="tab-content">
        <div id="li-new-product" className="tab-pane active show" role="tabpanel">
            <div className="row">
                <DemoSlider/>
            </div>
        </div>
    </div>
   </>
  )
}
