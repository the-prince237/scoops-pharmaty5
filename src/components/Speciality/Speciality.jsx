import React from 'react'
import { SpecBody, SpecDescription, SpecFooter, SpecHeader, SpecialityWrapper } from './style'

const Speciality = ({speciality}) => {
  const { title, description, color, Icon, image, examples } = speciality;
  return (
    <SpecialityWrapper color={color}>
      <SpecBody color={color}>
        <SpecHeader className='spec-header' color={color}>
          <Icon className="icon" />
          <h1 className='title4'>{title}</h1>
        </SpecHeader>
        <SpecDescription color={color} className='description'>
          <div />
          <p>{description}</p>
        </SpecDescription>
        <SpecFooter color={color}>
          {examples.map(({name, status}, index) => (
            <div key={index}>
              <h2 className='text1'>{name}</h2>
              <span>{status}</span>
            </div>
          ))}
        </SpecFooter>
      </SpecBody>
      <img src={image} alt="" />
    </SpecialityWrapper>
  )
}

export default Speciality