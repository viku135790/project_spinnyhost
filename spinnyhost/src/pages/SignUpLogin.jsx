import React from 'react'
import NavReg from '../Component/Register/NavReg'
import RegHead from '../Component/Register/RegHead'
import SignupLogin from '../Component/Register/SignupLogin'

export default function SignUpLogin() {
  window.scrollTo(0, 0);
  return (
    <>
      <NavReg />
      <RegHead />
      <SignupLogin />
    </>
  )
}
