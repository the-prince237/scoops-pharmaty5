import React from 'react'
import './Header.css'

import { BiPhone } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'
import logo from '../../assets/logo.png'
import { contacts } from '../../utils/constants'

const Header = () => {
  return (
    <header>
      <div className='logo'><img src={logo} alt="scoops-pharmacy" data-aos="fade-right" /><span className='logo--text'>SCOOPS <span className='black'>PHARMATY5</span></span></div>
      <nav className='large-nav'>
        <ul>
          <li className='nav-link'><div className='link-dot'/><a href="#mission">Mission</a></li>
          <li className='nav-link'><div className='link-dot'/><a href="#specs">Spécialités</a></li>
          <li className='nav-link'><div className='link-dot'/><a href="#prods">Produits</a></li>
          <li className='nav-link'><div className='link-dot'/><a href="#tests">Témoignages</a></li>
        </ul>
      </nav>
      <div className='header-buttons'>
        <a className='contact-btn whatsapp' href={contacts.whatsapp} target="_blank" rel="noopener noreferrer"><BsWhatsapp /><span className='contact-btn__text'>whatsapp</span></a>
        <span className='contact-btn telephone'>
          <BiPhone /> 
          <span className='contact-btn__text'>{contacts.phone}</span>
        </span>
        <div className='toggle-menu'>
          <div className='nav-button'><BiMenu data-aos="fade-left" /></div>
          <div className='small-nav'>
            <div className='space' />
            <nav>
              <a href="#mission">Mission</a>
              <a href="#specs">Spécialités</a>
              <a href="#prods">Produits fars</a>
              <a href="#tests">Témoignages</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
