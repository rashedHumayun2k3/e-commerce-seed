"use client"
import Body from '@/app/components/home/Body'
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import SliderWithBanner from '@/app/components/header/SliderWithBanner';

export default function Home() {
  return (
    <>
      <Header/>
        <SliderWithBanner/>
        <Body/>
      <Footer/>
    </>
  )
}
