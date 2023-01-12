import React from 'react'
import Logo from './Logo'

import {FaLinkedin, FaTwitter, FaFacebook, FaPhone, FaMapMarker} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="footer-container">
          <div className="footer-body">
            <div className="foot">
              <Logo />
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
                <li>License</li>
                <li>terms & condition</li>
                <li>privacy policy</li>
              </ul>
            </div>
            <div className="foot">
              <h6>
                Contact us
              </h6>
              <div className='social'>
                <ul>
                  <li>
                    <FaLinkedin />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaFacebook />
                  </li>
                </ul>
              </div>
              <div className="flex">
                <span>
                  <FaPhone />
                </span>
                <span>
                  <p>
                    08034868862
                  </p>
                </span>
              </div>
              <div className="flex">
                <span>
                  <FaMapMarker />
                </span>
                <span>
                  Adelodun Plaza, Phase II, Suite 2/13, Agbara road, Atan Ota, Ogun State.
                </span>
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