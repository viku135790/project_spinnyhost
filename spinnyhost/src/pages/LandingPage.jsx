import FirstMain from '../Component/Landingpage/FirstMain';
import Header from '../Component/Landingpage/Header';
import Secondmain from '../Component/Landingpage/Secondmain';
import Thirdmain from '../Component/Landingpage/Thirdmain';
import Slider from '../Component/Landingpage/Slider';
import Cards from '../Component/Landingpage/Cards';


import React from 'react'
import Navbar from '../Component/Landingpage/Navbar';

export default function LandingPage() {
  window.scrollTo(0, 0);
  return (
    <div>
      <Navbar/>
      <Header />
      <FirstMain />
      <Secondmain />
      <Thirdmain />
      <Slider />
      <Cards />
      
      
    </div>
  )
}
