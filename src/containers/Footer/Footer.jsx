import React from 'react'

import { BiGitCommit, BiPhone } from 'react-icons/bi'
import { MdDomain, MdProductionQuantityLimits, MdLocationPin } from 'react-icons/md'
import { BsWhatsapp, BsMailbox } from 'react-icons/bs'

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <section className='footer--logo logo'>
        <img data-aos="fade-down" src="favicon.png" alt="" />
        <div data-aos="fade-right" className='title2 logo--text'>SCOOPS <br /> PHARMATY 5</div>
      </section>
      <section className='footer--nav' data-aos="fade-down">
        <h3>Liens de Page</h3>
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
            <p>téléphone</p>
          </li>
          <li>
            <BsWhatsapp />
            <p>whatsapp</p>
          </li>
          <li>
            <BsMailbox />
            <p>email</p>
          </li>
          <li>
            <MdLocationPin />
            <p>localisation</p>
          </li>
        </ul>
      </section>
      <section className='footer--consult' data-aos="fade-left">
        <h3>Consultez</h3>
        <form>
          <input type="text"  placeholder='Addresse email'/>
          <button type="submit" onClick={(e) => e.preventDefault()}>Consultez</button>
        </form>
      </section>
    </footer>
  )
}

export default Footer