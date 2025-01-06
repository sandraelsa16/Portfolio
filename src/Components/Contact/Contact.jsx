import React from 'react'
import './Contact.css'
import Theme from '../ColorTheme/Theme'
function Contact() {
  return (
    <>
      <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <Theme/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>Feel free to reach out to me!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <i class="fa-regular fa-envelope"></i> <p>vsandraelsa@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <i class="fa-solid fa-phone"></i>
                    <p>+91 9496121607</p>
                    </div>
                    <div className="contact-detail">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Kochi,Kerala</p>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter Your Email' name='email' />
                <label htmlFor="">Write your message</label>
                <textarea name="message" rows="5" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
