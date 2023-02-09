import React from 'react'
import { useLanguageContext } from '../../context/index.jsx'

import { MissionWrapper, Statistics } from './missionStyle.js'
import { BsPeople, BsBookmarkHeart, BsClipboardData } from 'react-icons/bs'
import { StatItem } from '../../components/index.js'

const Mission = () => {

  const { cw } = useLanguageContext()

  return (
    <MissionWrapper className="section__margin">
      <h1 className='title2'>{ cw.mission.title }</h1>
      <p className='text1'>{ cw.mission.description }</p>
      <Statistics id='specs'>
        <StatItem aosDir="right" title="Tradithérapeutes" number={50} text="Nous sommes une communauté d'experts unis pour le même but !" Icon={BsPeople} />
        <StatItem aosDir="down" title="Patients" number={70} text="Nous mettons à votre disposition le temps, l'énergie, et l'expertise dont a besoin chacun de nos patients" Icon={BsBookmarkHeart} />
        <StatItem aosDir="left" title="Satisfaction" number={`${80}% de`} text="Nous mettons la santé de nos patients au coeur de notre service, et nous assurons de leur satisfaction à chaque fois." Icon={BsClipboardData} />
      </Statistics>
    </MissionWrapper>
  )
}

export default Mission