import React from 'react'
import './Header.css'

import { BiPhone } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import logo from '../../assets/logo.png';
import nouveau from '../../assets/new.gif';
import { contacts } from '../../utils/constants';

import { useLanguageContext } from '../../context'

const Header = () => {

  const { language, switchLanguage } = useLanguageContext()

  return (
    <header>
      <div className='logo'><img src={logo} alt="scoops-pharmacy" data-aos="fade-right" /><span className='logo--text'>SCOOPS <span className='black'>PHARMATY5</span></span></div>
      <nav className='large-nav'>
        <ul>
          <li className='nav-link'><div className='link-dot'/><a href="#mission">{`${language === "fr" ? "Mission" : "Mission"}`}</a></li>
          <li className='nav-link'><div className='link-dot'/><a href="#specs">{`${language === "fr" ? "Spécialités" : "Specialities"}`}</a></li>
          <li className='nav-link'><div className='link-dot'/><a href="#prods">{`${language === "fr" ? "Produits" : "Products"}`}</a></li>
          <li className='nav-link'><div className='link-dot'/><a href="#tests">{`${language === "fr" ? "Témoignages" : "Testimonies"}`}</a></li>
        </ul>
      </nav>
      <div className='header-buttons'>
        <div className='choose-language'>
          <div className='new'>
            <p>{`${language === "fr" ? "Nouveau" : "New"}`}</p>
            <img src={nouveau} alt="nouveau" />
          </div>
          <div className="languages" onClick={switchLanguage}>
            <span>fr</span>
            <span>en</span>
            <button className={`${language === "fr" ? "left" : "right"}`}>{language}</button>
          </div>
        </div>
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
              <a href="#mission">{`${language === "fr" ? "Mission" : "Mission"}`}</a>
              <a href="#specs">{`${language === "fr" ? "Spécialités" : "Specialities"}`}</a>
              <a href="#prods">{`${language === "fr" ? "Produits" : "Products"}`}</a>
              <a href="#tests">{`${language === "fr" ? "Témoignages" : "Testimonies"}`}</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
