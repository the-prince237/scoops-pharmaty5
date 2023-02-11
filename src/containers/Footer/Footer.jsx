import React from 'react'
import { useLanguageContext } from '../../context'

import { BiGitCommit, BiPhone } from 'react-icons/bi'
import { MdDomain, MdProductionQuantityLimits, MdLocationPin } from 'react-icons/md'
import { BsWhatsapp, BsMailbox } from 'react-icons/bs'

import logo from '../../assets/logo.png'

import './Footer.css'
import { contacts } from '../../utils/constants'

const Footer = () => {

  const { language } = useLanguageContext()

  return (
    <footer>
      <section className='footer--logo logo'>
        <img data-aos="fade-down" src={logo} alt="" />
        <div data-aos="fade-right" className='title2 logo--text'>SCOOPS <br /> PHARMATY 5</div>
      </section>
      <section className='footer--nav' data-aos="fade-down">
        <h3>{ language === "fr" ? "Liens de Page" : "Page links"}</h3>
        <nav>
          <div className="footer--nav--link">
            <BiGitCommit />
            <div className='nav--link--text'>
              <a href="#mission">Mission</a>
              <em>Mission</em>
            </div>
          </div>
          <div className="footer--nav--link">
            <MdDomain /> 
            <div className='nav--link--text'>
              <a href="#specs">Spécialités</a>
              <em>Specialities</em>
            </div>
          </div>
          <div className="footer--nav--link">
            <MdProductionQuantityLimits />
            <div className='nav--link--text'>
              <a href="#prods"> Produits</a>
              <em>Products</em> 
            </div>
          </div>
        </nav>
      </section>
      <section className='footer--infos' data-aos="fade-up">
        <h3>Infos</h3>
        <ul>
          <li>
            <BiPhone />
            <p>{contacts.phone}</p>
          </li>
          <li>
            <BsWhatsapp />
            <p><a href={contacts.whatsapp} target="_blank">whatsapp</a></p>
          </li>
          <li>
            <BsMailbox />
            <p>{contacts.email}</p>
          </li>
          <li>
            <MdLocationPin />
            <p>{contacts.location}</p>
          </li>
        </ul>
      </section>
      <section className='footer--consult' data-aos="fade-left">
        <h3>{ language === "fr" ? "Consultez" : "Consult" }</h3>
        <form>
          <input type="text"  placeholder='Addresse email'/>
          <button type="submit" onClick={(e) => e.preventDefault()}>{ language === "fr" ? "Consultez" : "Consult" }</button>
        </form>
      </section>
    </footer>
  )
}

export default Footer