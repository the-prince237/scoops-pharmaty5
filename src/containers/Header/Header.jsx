import React from 'react'
import './Header.css'

import { BiPhone } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'

const Header = () => {
  return (
    <header>
      <img src="" alt="scoops-pharmacy" data-aos="fade-right" className='logo'/>
      <nav className='large-nav'>
        <ul>
          <li><a className='nav-link' href="#mission">Mission</a></li>
          <li><a className='nav-link' href="#specs">Spécialités</a></li>
          <li><a className='nav-link' href="#prods">Produits</a></li>
          <li><a className='nav-link' href="#tests">Témoignages</a></li>
        </ul>
      </nav>
      <div className='header-buttons'>
        <span className='contact-btn whatsapp'><BsWhatsapp /> <span className='contact-btn__text'>whatsapp</span></span>
        <span className='contact-btn telephone'><BiPhone /> <span className='contact-btn__text'>6 55 06 18 36</span></span>
        <div className='toggle-menu'>
          <div className='nav-button'><BiMenu data-aos="fade-left" /></div>
          <nav className='small-nav'>
            <a href="#mission">Mission</a>
            <a href="#specs">Spécialités</a>
            <a href="#prods">Produits fars</a>
            <a href="#tests">Témoignages</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
