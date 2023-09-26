"use client"
import IndexProductDetails from '@/app/components/product-details/IndexProductDetails'
import React from 'react'
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';

export default function page() {
  return (
        <>
        <Header/>
        <Breadcrumb/>
        <IndexProductDetails/>
        <Footer/>
        </>
  )
}
