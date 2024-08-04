import React from 'react'
import './Welcom.css'
import { IoLogoTwitter } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { FaInstagram,FaFacebookF,FaWhatsappSquare } from "react-icons/fa";

function Welcom() {
  return (
    <div className='iweyo'>
    <div id='anime'>
    <div id='flag'></div>
    <div className='movingText'>
        <h1 id='qqq'> Thank U For Visiting Gambit The Code Master </h1>
     </div>
    </div>
     <main className='mainbody'>
       <section id='sect11'>
        <h1 id='name'>Hello, My Name Is Tafadzwa Gambiza</h1>
        <p id='explain'>Welcome to my portfolio! I am a passionate UI and UX
          developer dedicated to crafting engaging and intuitive 
          user experiences. With a background in both design and
          development, I bridge the gap between aesthetics and 
          functionality to create seamless digital interfaces.
          This page showcases my journey and expertise in the world of
          UI/UX, featuring my latest projects and insights into my 
          design process. Whether you're looking to collaborate or 
          simply explore my work, I invite you to delve into the
          details and see how thoughtful design can transform user
          interactions.</p>
          <div id='iconlink'>
              <a href="https://www.facebook.com/GAMBITGAMBIZA" target="_blank" rel="noreferrer noopener">
                <span id='spn4'><FaFacebookF  size={25} color='blue'/></span>
              </a>
              <a href="https://twitter.com/GambitGamb48482" target="_blank" rel="noreferrer noopener">
                <span id='spn4'><IoLogoTwitter size={25} color='blue'/></span>
              </a>
              <a href="https://wa.me/265997138340" target="_blank" rel="noreferrer noopener">
                <span id='spn4'><FaWhatsappSquare size={25} color='green'/>
              </span></a>
              <a href="https://www.instagram.com/gambit_gambiza/" target="_blank" rel="noreferrer noopener">
                <span id='spn4'><FaInstagram size={25} color='purple'/></span>
              </a>
              <span id='spn4'><RiLinkedinFill size={25} color='blue'/></span>
          </div>
       </section>
       <section id='sect22'></section>
     </main>
    </div>
  )
}

export default Welcom
