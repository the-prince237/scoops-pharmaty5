import React, { useState } from 'react'
import { SpecDots, SpecLink, SpecWrapper } from './specStyle.js'
import { specialities } from '../../utils/constants'
import { Speciality } from '../../components'
import { SpecNav } from './specStyle'

const Specialities = () => {

  const [activeSpec, setActiveSpec] = useState(specialities[0])

  return (
    <SpecWrapper className='section__margin'>
      <h1 className="title2">Nos Spécialités</h1>
      <p className='text1'>Il est une solution pour tout, même pour les situations les plus difficiles à surpasser ! <br /><b>Nous savons quelle est la voie à suivre !</b></p>
      <SpecNav>
        {specialities.map(({title, description, color, Icon, image, examples}, index) => (
          <SpecLink 
            data-aos="fade-right" 
            data-aos-duration="600" 
            data-aos-delay={`${300+index*10}`} 
            key={index} isActive = {title === activeSpec.title} 
            onClick={() => setActiveSpec({title, description, color, Icon, image, examples})}>
              <span className='spec-link__text'>{title}</span>
              <span className="spec-link__icon"><Icon /></span>
          </SpecLink>
        ))}
      </SpecNav>
      <div className="specialities" data-aos="fade">
        <Speciality speciality={activeSpec} />
      </div>
      <SpecDots isActive id="prods">
        {specialities.map((spec, index) => (
          <SpecDots key={index} isActive = {spec.title === activeSpec.title} onClick={() => setActiveSpec(spec)}></SpecDots>
        ))}
      </SpecDots>
    </SpecWrapper>
  )
}

export default Specialities