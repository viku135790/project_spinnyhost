import React from 'react'
import Checkout from '../Component/CheckOut/Checkout'
import CheckNav from '../Component/CheckOut/CheckNav'
import CheckSec from '../Component/CheckOut/CheckSec'

export default function CheckOut() {
  window.scrollTo(0, 0);
  return (
    <>
    <CheckNav/>
    <Checkout/>
    <CheckSec/>
    </>
  )
}
