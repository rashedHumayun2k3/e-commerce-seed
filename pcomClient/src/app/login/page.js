"use client"
import React from "react"
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import IndexLogin from '../components/login/IndexLogin'

export default function page() {
  return (
    <>
    <Header/>
    <Breadcrumb/>
    <IndexLogin/>
    <Footer/>
    </>
    
  )
}




