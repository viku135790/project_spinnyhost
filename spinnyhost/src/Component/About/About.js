import React from 'react'
import "./About.css";

function About() {
  return (
    <div className='about-head'>
      <div className='about-main-head'>
        <div className='aboutus-head'>
          <p>About Us</p>
        </div>
        <div className='about-us-why'>
          <p>Why Choose Spinny Host?</p>
        </div>
        <div className='aboutus-head-list'>
          <p><i class="fi fi-ss-check-circle"></i>Best hosting provider</p>
          <p>  <i class="fi fi-ss-check-circle"></i>Award cloud infrastructure</p>
          <p>  <i class="fi fi-ss-check-circle"></i>Awesome control panels</p>
          <p> <i class="fi fi-ss-check-circle"></i> Reference Domain solutions</p>
          <p>  <i class="fi fi-ss-check-circle"></i>Support Premium 24/7/365</p>
        </div>
      </div>
      <div className='about-sub-head'>
        <div className='subhead-first'>
          <div className='subhead-mat'>
            <img src="img/woman.svg"></img>
            <p>19,322+ Clients</p>
            <i>More than 19,322+ active customers trust to us daily about 52,120 services. </i>
          </div>
        </div>
        <div className='subhead-second'>
          <div className='subhead-mat'>
          <img src="img/comp.svg"></img>
            <p>9,510 Infrastructure</p>
            <i>Our 3 Datacenters with more than 500+ servers have high availability redundant systems. </i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About