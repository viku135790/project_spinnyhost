import React from 'react'
import NavDed from "../Component/Dedicated/NavDed"
import AddonsSection from "../Component/Dedicated/AddonsSection"
import DedicatedServers from '../Component/Dedicated/DedicatedServers'
import FeaturesSection from "../Component/Dedicated/FeaturesSection"
import PricingDed from "../Component/Dedicated/PrcingDed"

export default function Dedicated() {
  window.scrollTo(0, 0);
  return (
    <>
      <NavDed />
      < DedicatedServers />
      <PricingDed />
      <AddonsSection />
      <FeaturesSection />
    </>
  )
}
