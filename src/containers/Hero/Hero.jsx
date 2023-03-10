import React, { useState } from 'react'
import { BiPhone } from 'react-icons/bi'
import { BsWhatsapp, BsMailbox } from 'react-icons/bs'


import { HeroWrapper } from './heroStyle'
import { useFormContext, useLanguageContext } from '../../context'

import { contacts } from '../../utils/constants'
import heroImg from '../../assets/photos/hero.png'

const Hero = () => {

  const [contactsOn, setContactsOn] = useState(false)
  const { setEmail, handleChange, form } = useFormContext()
  const { language, cw } = useLanguageContext()


  return (
    <HeroWrapper id='hero'>
      <div className='left-side' data-aos="fade-right">
        <h1 className='title1 gradient__text'>{cw.hero.title}</h1>
        <p className="text1">{cw.hero.description}</p>
        <div className='hero-buttons'>
          <a className="consult" href={ contacts.whatsapp } target="_blank">
            {/* <form> */}
            {/* <input type="email" name="email" value={form.email} onChange={(e) => handleChange(e)} id="" placeholder='Entrez votre adresse email' /> */}
              <button type='submit' className='button consult-btn'>{language === "fr" ? "Consultez" : "Consult"}</button>
            {/* </form> */}
          </a>
          <button className={`button contact-btn ${contactsOn ? "contact-btn_on" : "contact-btn_off"}`} onClick={() => setContactsOn((contactsOn) => !contactsOn)}>{ language === "fr" ? "Contacez nous" : "Contact us"}</button>
        </div>
        {contactsOn && 
          <div data-aos="fade-up" className='contact-infos'>
            <div className="space"></div>
            <div className="contact-infos__container">
              <span className='contact-info'><BiPhone /><p>{contacts.phone}</p></span>
              <a className='contact-info contact-info__email' href={`mailto:${ contacts.email }`}><BsMailbox /><p>{contacts.email}</p></a>
              <a className='contact-info' href={contacts.whatsapp} target="_blank"><BsWhatsapp /><i>suivez le lien whatsapp</i> </a>
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
