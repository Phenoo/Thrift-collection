import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

import {FaInstagram, FaTwitter, FaFacebook, FaPhone, FaMapMarker} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="footer-container">
          <div className="footer-body">
            <div className="foot">
              <Logo />
              <br />
              <p>
                Nebo Ascending Ventures is a thrifting contributions and money lending service business. We meet the little
                petty cash needs that comes urgent at little interest for the customer to pay at convenience and spread
                over a time or at a target date to soothe personal and business needs. 
              </p>
            </div>
            <div className="foot">
              <h6>
                Support
              </h6>
              <ul>
                <li>
                 <Link to='/privacy'>
                  Terms and Conditions
                 </Link>        
                </li>
                <li>
                  <Link to='/privacy'>
                    privacy policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="foot">
              <h6>
                Contact us
              </h6>
              <div className='social'>
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
              </div>
              <div className="flex">
                <span>
                  <FaPhone />
                </span>
                  <p>
                    08034868862
                  </p>
              </div>
              <div className="flex">
                <span>
                  <FaMapMarker />
                </span>
                <p>
                  Adelodun Plaza, Phase II, Suite 2/13, Agbara road, Atan Ota, Ogun State.
                </p>
              </div>
            </div>
          </div>
          <div className='bottom'>
            <div>
              <p>&copy; 2022. All rights reserved</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer