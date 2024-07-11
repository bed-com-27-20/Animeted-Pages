import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook,FaGithub,FaLinkedin } from "react-icons/fa";
import './Logins.css'

const Logins = () => {
  const [showDiv2, setShowDiv2] = useState(true);
  const [isSwapped, setIsSwapped] = useState(false);

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
    setTimeout(() => {
      setShowDiv2(!showDiv2);
    }, 500); // 1000 milliseconds = 5 seconds
  };

  return (
    <div className='fswapdiv'>
      {showDiv2 ? (
        <div className='sswapdiv'>
          <div className={`ssffdiv1 ${isSwapped ? 'swapped' : ''}`}>
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
            <div className={`ssffdiv2 ${isSwapped ? 'swapped' : ''}`}>
            <div className='gome'>
                    <h1 id='zaza'>Hello, Friend!</h1>

                    <p id='kaka'>Register with your personal details to use all of site features</p>

                    <button onClick={handleSwap} id='makaz'>SIGN UP</button>
               </div>
                
            </div>
        </div>
      ) : (
        <div className='sswapdiv'>
          <div className={`ssffdiv3 ${isSwapped ? 'swapped' : ''}`}>
          <div className='gome'>
                    <h1 id='zaza'>Hello, Friend!</h1>

                    <p id='kaka'>Register with your personal details to use all of site features</p>

                    <button id='makaz'>SIGN UP</button>
               </div>
            </div>
            <div className={`ssffdiv4 ${isSwapped ? 'swapped' : ''}`}>
                create 
                account
                <button onClick={handleSwap} className="swap-button">go to sign up</button> 
            </div>
        </div>
      )}
    </div>
  );
};

export default Logins;
