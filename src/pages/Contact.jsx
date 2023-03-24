import React, { useRef } from 'react'
import {FaInstagram, FaTwitter, FaFacebook, FaMapMarker, } from 'react-icons/fa'
import Img from '../assets/shake.jpeg'

import Layout from '../components/Layout'

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Layout>
      <section id="request" className="request">
        <div className='request-cont'>
          <div className="statue">
            <h4 className="tophead">lets talk about <span>everything!</span></h4>
            <p>
              Hate forms? Send us an email instead. Or contact us on social media.
            </p>
            <div className="flex">
              <span>
                <FaMapMarker />
              </span>
              <span>
                Adelodun Plaza, Phase II, Suite 2/13, Agbara road, Atan Ota, Ogun State.
              </span>
            </div>
            <br />
            <ul>
              <li>
                  <a href="https://instagram.com/neboav?igshid=YmMyMTA2M2Y">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/neboascending.ventures?mibextid=ZbWKwL">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/NeboVentures?t=prR4tuUned3z8WIJgLFiRQ&s=09">
                    <FaTwitter />
                  </a>
                </li>
            </ul>
            <img src={Img} alt="lot" />
          </div>


          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-input">
              <label>Your name</label>
              <input type="text" name="user_name" required/>
            </div>
            <div className="form-input">
              <label>Your email</label>
              <input type="email" name="user_email" required />
            </div>
            <div className='form-input'>
              <label>Your message</label>
              <textarea rows='10' name='message' required/>
            </div>
            <button type='submit' value='send' className='btn btn-blue'>send message</button>
          </form>  
        </div>  
    </section>
    </Layout>

  )
}

export default Contact