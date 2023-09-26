"use client"
import IndexSearch from '@/app/components/search/IndexSearch'
import React from 'react'
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';


export default function page() {
  return (
      <>
      <Header/>
      <IndexSearch/>
      <Footer/>
    </>
  )
}
