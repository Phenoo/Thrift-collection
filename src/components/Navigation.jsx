import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  const [fixed, setFixed] = useState('');

  useEffect(() => {

    const windowScroll = () => {
      let windowHeight = window.scrollY
  
      if(windowHeight > 500){
        setFixed('fixed');
      } else{
        setFixed('')
      }
    }
    window.addEventListener('scroll', windowScroll);
  })
  
  return (
    <nav className={`${fixed}`}>
      <header>
        <section className="header">
          <Logo />
          <div className={`menu ${navbar ? 'navbar' : ''}`} >
            <div className='none'>
              {
                navbar ?  <Logo /> : ''
              }
            </div>
            <ul onClick={() => setNavbar(!navbar)} className='navanimate'>
              <li>
                <Link to='/'>
                  home
                </Link>
              </li>
              <li>
                <Link to='/blog'>
                  about
                </Link>
              </li>
              <li>
                <Link to='/contact'>
                  contact us
                </Link>
              </li>
            </ul>
            <div className="started-btn">
              <button className="btn btn-blue">
                sign up
              </button>
              <button className="btn btn-trans">
                Sign in
              </button>
            </div>
          </div>
          <button className='menu-btn' onClick={() => setNavbar(!navbar)}>
            {
              navbar ? <FaTimes/ > : <FaBars />
            }
          </button>
        </section>
      </header>
    </nav>
  )
}

export default Navigation