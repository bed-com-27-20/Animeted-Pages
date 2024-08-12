import React from 'react'
import { TbBriefcase } from "react-icons/tb";
import { SiCreatereactapp } from "react-icons/si";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaJetFighterUp } from "react-icons/fa6";
import './Whychooseus.css'

function Whychooseus() {
  return (
   <div className='oppac'>
    <div className='sukuna'><h1 id='piz'>WHY CHOOSE US</h1></div>
    <div className='whyUs'>
        <div id='left'>
            <div id='top'>
                <div id='tiwone'>
                    <div id='iconpos'><TbBriefcase size={60} color='white'/></div>
                    <h1 id='h1pos'>5+ SITES</h1>
                </div>
                <p id='ppos'>
                With over 5 successfully deployed websites, our portfolio 
                showcases our ability to handle diverse projects across 
                various industries.
                </p>
            </div>
            <div id='bottom'>
               <div id='tiwone'>
                    <div id='iconpos'><SiCreatereactapp  size={60} color='white'/></div>
                    <h1 id='h1pos'>DEVELOPMENT</h1>
               </div>
                <p id='ppos'>
                Our team of seasoned developers is dedicated to crafting high-quality
                code that ensures optimal performance and seamless user experiences.   
                </p>
            </div>
        </div>
        <div id='middle'>
            <div id='midleimg'></div>
        </div>
        <div id='right'>
            <div id='top'>
                <div id='tiwone'>
                    <div id='iconpos'><RiCustomerService2Fill size={60} color='white'/></div>
                    <h1 id='h1pos'>SUPPORT</h1>
                </div>
                <p id='ppos'>
                Our support team is available around the clock to assist you with 
                any issues or inquiries, ensuring minimal downtime and uninterrupted service
                </p>
            </div>
            <div id='bottom'>
                <div id='tiwone'>
                    <div id='iconpos'><FaJetFighterUp size={60} color='white'/></div>
                    <h1 id='h1pos'>EFFECTIVE</h1>
                </div>
                <p id='ppos'>
                We focus on delivering measurable results, ensuring that our solutions
                align with your business goals and drive tangible outcomes
                </p>
            </div>
        </div>
    </div></div>
  )
}

export default Whychooseus
