import React from 'react'
import { Link } from 'react-router-dom';
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
      <div className='landsector4'>
      <ul id='vermin'>
      <Link to="/matrixpage" className='listyle'>MatrixPage</Link>
      <Link to="/Login" className='listyle'>Login</Link>
      <Link to="/Logins" className='listyle'>Logins</Link>
      <Link to="/Land" className='listyle'>LandingPage</Link>
      <Link to="/Aside" className='listyle'>Aside</Link>
     </ul>
      </div>
    </div>
  )
}
