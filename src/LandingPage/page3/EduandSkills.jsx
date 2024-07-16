import React from 'react'
import { RiUserLocationFill } from "react-icons/ri";
import { LuPhoneOutgoing } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import './EduandSkills.css'

export default function EduandSkills() {
  return (
    <div>
      <div className='landsector3'>
        <div id='yg4top'>
          <div id='yg4right'>
            <h1 id='eduic'>EDUCATION</h1>
            <div id='edudiv'>
              <span id='eduspn'> UNIMA</span>
              <span id='eduyr'>2020-2025</span>
              <span id='eduspn'>master in edu computer</span>
            </div>

            <h1 id='eduic'>EXPERIENCE</h1>
            <div id='edudiv'>
              <span id='eduspn'>LIWONDE</span>
              <span id='eduyr'>2024-CURRENT</span>
              <span id='eduspn'>part of dev team</span>
            </div>
          </div>
          <div id='yg4left'>
            i think the links here
          </div>
        </div>
        <div id='yg4bottom'>
          <div id='ygbtm'>
            <span id='ygbticon'><RiUserLocationFill size={40} color='gold'/></span>
            <span id='ygbticon'><h2>adress</h2></span>
            <span id='ygbticon'>Zomba Malawi Chancellor College</span>
            <span id='ygbticon'>P.O Box 280, Zomba, Malawi</span>
          </div>
          <div id='ygbtm'>
            <span id='ygbticon'><LuPhoneOutgoing size={40} color='gold'/></span>
            <span id='ygbticon'><h2>Phone</h2></span>
            <span id='ygbticon'>+265 997 138 340</span>
          </div>
          <div id='ygbtm'>
            <span id='ygbticon'><HiOutlineMail size={40} color='gold'/></span>
            <span id='ygbticon'><h2>Email</h2></span>
            <span id='ygbticon'>gambizamax@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}
