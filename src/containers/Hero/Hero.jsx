import React from 'react'
import { HeroWrapper } from './heroStyle'

const Hero = () => {
  return (
    <HeroWrapper id='hero'>
      <div className='left-side' data-aos="fade-right">
        <h1 className='title1 gradient__text'>Soigner Le Monde Ensemble</h1>
        <p className="text1">Nous oeuvrons tous les jours pour une Afrique et un Monde meilleur.</p>
        <div className='hero-buttons' data-aos="fade-up">
          <span className='button'>Contacez nous</span><span className='button'>Consultez</span>
        </div>
      </div>
      <div className='hero-img' data-aos="fade-down" id='mission'>
        <img src="/images/heroImage.png" alt="" />
      </div>
    </HeroWrapper>
  )
}

export default Hero
