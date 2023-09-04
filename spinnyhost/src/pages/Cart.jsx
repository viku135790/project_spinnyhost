import React from 'react'
import NavCart from "../Component/Cart/NavCart"

import Carte from '../Component/Cart/Carte'

export default function Cart() {
  window.scrollTo(0, 0);
  return (
    <div>
        <NavCart/>
        <Carte/>

    </div>
  )
}
