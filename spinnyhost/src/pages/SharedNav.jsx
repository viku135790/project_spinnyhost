import React from 'react'
import Shredprem from '../Component/shared/Shredprem'
import ServiceStation from '../Component/shared/ServiceStation'
import FAQSection from '../Component/shared/FAQSection'
import SharedHost from '../Component/shared/SharedHost'
import NavbarThird from '../Component/shared/NavbarThird'

function SharedNav() {
  window.scrollTo(0, 0);
  return (
    <>
    <NavbarThird/>
   <Shredprem />
   <ServiceStation/>
   <FAQSection/>
   <SharedHost/>
    </>
  )
}

export default SharedNav