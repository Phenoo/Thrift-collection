import React from 'react'
import { Link } from 'react-router-dom'

import LogoImg from '../assets/logo.webp'

const Logo = () => {
  return (
    <Link to='/'>
        <div className="logo">
          <img src={LogoImg} alt="logo" />
          <h4>
            nebo.
          </h4>
        </div>
    </Link>
  )
}

export default Logo