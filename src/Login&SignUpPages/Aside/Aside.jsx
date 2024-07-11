import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook,FaGithub,FaLinkedin } from "react-icons/fa";
import './Aside.css'

function Aside() {
  return (
    <div id='www'>
       <div className='sswapdiv'>
          <div className='ssffdiv1'>
                <div id='mland'>
                    <h1 id='dama'>Sign In</h1>
                    <div id='icons'>
                    <FcGoogle size={25}/>
                    <FaFacebook size={25} color='blue'/>
                    </div>
                    <div id='icons'> 
                    <FaGithub size={25} color='blue'/>
                    <FaLinkedin size={25} color='blue'/>
                    </div>
                    <div id='singbox'>
                    <p>Or use your Email and Password</p>
                    <input id='singput' placeholder='Email'></input>
                    <input id='singput' placeholder='Password'></input>
                    <p id='kantu'>Forget your password?</p>
                    </div>
                    <button id='straight'>SIGN IN</button>
                </div>
            </div>
            <div className='ssffdiv2'>
               <div className='gome'>
                    <h1 id='zaza'>Hello, Friend!</h1>

                    <p id='kaka'>Register with your personal details to use all of site features</p>

                    <button id='makaz'>SIGN UP</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Aside
