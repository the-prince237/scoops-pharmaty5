import React, { useState } from 'react'
import { useLanguageContext } from '../../context/index.jsx'

import { SpecDot, SpecDots, SpecLink, SpecWrapper } from './specStyle.js'
import { specialities } from '../../utils/constants'
import { Speciality } from '../../components'
import { SpecNav } from './specStyle'

const Specialities = () => {

  const [activeSpec, setActiveSpec] = useState(specialities[0])
  const { cw } = useLanguageContext()

  return (
    <SpecWrapper className='section__margin'>
      <h1 className="title2">{ cw.specialities.title }</h1>
      <p className='text1'>{ cw.specialities.description } <br /><b>{ cw.specialities.subDescription }</b></p>
      <SpecNav>
        {specialities.map(({title, description, color, Icon, image, examples}, index) => (
          <SpecLink 
            // data-aos="fade-right" 
            // data-aos-duration="600" 
            // data-aos-delay={`${300+index*10}`} 
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
      <SpecDots id="prods">
        {specialities.map((spec, index) => (
          <SpecDot key={index} isActive = {spec.title === activeSpec.title} onClick={() => setActiveSpec(spec)}></SpecDot>
        ))}
      </SpecDots>
    </SpecWrapper>
  )
}

export default Specialities