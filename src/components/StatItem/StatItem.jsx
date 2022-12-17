import React from 'react'
import { StatItemWrapper } from './style'

const StatItem = ({aosDir, title, number, text, Icon}) => {
  return (
    <StatItemWrapper data-aos={`fade-${aosDir}`} >
      <div className='stat-item__header'>
        <Icon className='item-icon' />
        <div>
          <h1 className="title2">+{number}</h1>
          <h1 className="title3">{title}</h1>
        </div>
      </div>
      <p className='subTitle2'>{text}</p>
    </StatItemWrapper>
  )
}

export default StatItem