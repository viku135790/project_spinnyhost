import React from 'react'
import "./ContactUs.css"

function ContactUs() {
  window.scrollTo(0, 0);
  return (
    <div className='contact-head'>
      <div className='contact-main'>
        <div className='contact-us-head'>
          <div className='contact-head-span'>
            <span>Contact us</span> <span className='span-p'> We're ready and waiting for your questions</span>
          </div>
          <hr />
          <p className='head-span'>Portal Home / <span className='span-two'>Pre Sales Contact Us </span></p>

        </div>
        <form className='main-form'>
          <div className='form-group'>
            <label>Name</label>
            <input type='text' className='form-control' />
          </div>
          <div className='form-group'>
            <label>Email </label>
            <input type='text' className='form-control' />
          </div>
          <div className='form-group'>
            <label>Subject</label>
            <input type='text' className='form-control' />
          </div>
          <div className='form-group'>
            <label>Message</label>
            <textarea></textarea>
          </div>
          <div className='form-group'>
            <p>Send Message</p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs