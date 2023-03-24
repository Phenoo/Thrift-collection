import React, {useEffect, useState} from 'react'
import {  NavLink } from 'react-router-dom'
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
                  <NavLink to='/'>
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    about
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/contact'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    contact us
                  </NavLink>
                </li>
            </ul>
            
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