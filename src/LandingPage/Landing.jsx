import React from 'react'
import './Landing.css'
import Welcom from './Page1/Welcom'
import Whychooseus from './Page2/Whychooseus'
import EduandSkills from './page3/EduandSkills';

export default function Landing() {
  return (
    <div className='landffd'>
      <div className='landsector1'>
        <Welcom></Welcom>
      </div>
      <div className='landsector2'>
        <Whychooseus></Whychooseus>
      </div>
      <div className='landsector3'>
        <EduandSkills></EduandSkills>
      </div>
    </div>
  )
}
