import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import React from 'react'
import IndexCheckOut from '@/app/components/checkout-activity/IndexCheckOut'
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';

export default function Page() {
  return (
    <>
    <Header/>
     <Breadcrumb/>
     <IndexCheckOut/>
     <Footer/>
    </>
    
  )
}
