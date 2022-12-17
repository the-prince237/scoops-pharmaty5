import React from 'react'
import { MissionWrapper, Statistics } from './missionStyle.js'
import { BsPeople, BsBookmarkHeart, BsClipboardData } from 'react-icons/bs'
import { StatItem } from '../../components/index.js'

const Mission = () => {
  return (
    <MissionWrapper className="section__margin">
      <h1 className='title2'>Ouvrir les yeux du monde sur ce qui est à la porté de tous</h1>
      <p className='text1'>Le sol regorge de tous les traitements dont nous avons besoin. Nous engageons à les vulgariser et à mettre terme à beaucoup de souffrances inutiles.</p>
      <Statistics id='specs'>
        <StatItem aosDir="right" title="Tradithérapeutes" number={50} text="Nous sommes une communauté d'experts unis pour le même but !" Icon={BsPeople} />
        <StatItem aosDir="down" title="Patients" number={70} text="Nous mettons à votre disposition le temps, l'énergie, et l'expertise dont a besoin chacun de nos patients" Icon={BsBookmarkHeart} />
        <StatItem aosDir="left" title="Satisfaction" number={`${80}% de`} text="Nous mettons la santé de nos patients au coeur de notre service, et nous assurons de leur satisfaction à chaque fois." Icon={BsClipboardData} />
      </Statistics>
    </MissionWrapper>
  )
}

export default Mission