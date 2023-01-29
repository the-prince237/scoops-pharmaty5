import React, { useState } from 'react'
import { BiPhone } from 'react-icons/bi'
import { BsWhatsapp, BsMailbox } from 'react-icons/bs'

import heroImg from '../../assets/photos/hero.png'

import { useFormContext } from '../../context'

import { contacts, cw } from '../../utils/constants'
import { HeroWrapper } from './heroStyle'

const Hero = () => {

  const [contactsOn, setContactsOn] = useState(false)
  const { setEmail, handleChange, form } = useFormContext()


  return (
    <HeroWrapper id='hero'>
      <div className='left-side' data-aos="fade-right">
        <h1 className='title1 gradient__text'>{cw.hero.title}</h1>
        <p className="text1">{cw.hero.description}</p>
        <div className='hero-buttons'>
          <form onSubmit={(e) => setEmail(e)}>
            <input type="email" name="email" value={form.email} onChange={(e) => handleChange(e)} id="" placeholder='Entrez votre adresse email' />
            <button type='submit' className='button consult-btn'>Consultez</button>
          </form>
          <button className={`button contact-btn ${contactsOn ? "contact-btn_on" : "contact-btn_off"}`} onClick={() => setContactsOn((contactsOn) => !contactsOn)}>Contacez nous</button>
        </div>
        {contactsOn && 
          <div data-aos="fade-up" className='contact-infos'>
            <div className="space"></div>
            <div className="contact-infos__container">
              <span className='contact-info'><BiPhone /><p>{contacts.phone}</p></span>
              <span className='contact-info'><BsMailbox /><p>{contacts.email}</p></span>
              <a className='contact-info' href={contacts.whatsapp}><BsWhatsapp /><i>suivez le lien whatsapp</i> </a>
            </div>
          </div>
        }
      </div>
      <div className='hero-img' data-aos="fade-down" id='mission'>
        <img src={ heroImg } alt="" />
      </div>
    </HeroWrapper>
  )
}

export default Hero
