import React from 'react'
import Logo from './Logo'

import {FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="footer-container">
          <div className="footer-body">
            <div className="foot">
              <Logo />
              <p>
              Bird is an international banking app that offers to non-US residents and businesses a fully featured US-domiciled, FDIC insured bank account with debit cards, international and local transfers, wealth building account, payment consolidation and a checkout solution.
              </p>
            </div>
            <div className="foot">
              <h6>
                app features
              </h6>
              <ul>
                <li>
                  US Checking Account
                </li>
                <li>
                Wealth Building Account
                </li>
                <li>
                Cross-border & Local Transfer
                </li>
                <li>
                Account Consolidation
                </li>
                <li>
                  Bird Checkout
                </li>
              </ul>
            </div>
            <div className='foot'>
              <h6>
                help
              </h6>
              <ul>
                <li>payment</li>
                <li>shipping</li>
                <li>exchange and returns</li>
              </ul>
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
          </div>
          <div className='bottom'>
            <div>
              <p>&copy; 2022. All rights reserved</p>
            </div>
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
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer