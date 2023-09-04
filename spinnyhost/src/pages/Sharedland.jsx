import React from 'react'
import SharedHost from '../Component/Landing/SharedHost'
import FAQSection from '../Component/Landing/FAQSection'
import StatisticsSection from '../Component/Landing/StatisticsSection'
import ServiceSection from '../Component/Landing/ServiceSection'
import HostingService from '../Component/Landing/SharedHosting'
import NavbarSec from '../Component/Landing/NavbarSec'

function Sharedland() {
  window.scrollTo(0, 0);
  return (
    <>
    <NavbarSec/>
    <HostingService/>
    <ServiceSection/>
    <FAQSection/>
    <SharedHost/>
    <StatisticsSection />
    </>
  )
}

export default Sharedland