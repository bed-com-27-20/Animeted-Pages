import React, { useState } from 'react';
import './Logins.css'

const Logins = () => {
  const [showDiv2, setShowDiv2] = useState(true);
  const [isSwapped, setIsSwapped] = useState(false);

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
    setTimeout(() => {
      setShowDiv2(!showDiv2);
    }, 1000); // 1000 milliseconds = 5 seconds
  };

  return (
    <div className='fswapdiv'>
      {showDiv2 ? (
        <div className='sswapdiv'>
          <div className={`ssffdiv1 ${isSwapped ? 'swapped' : ''}`}>
                sign in
            </div>
            <div className={`ssffdiv2 ${isSwapped ? 'swapped' : ''}`}>
                hello 
                friends
                <button onClick={handleSwap} className='swapbtz'>go to acc create</button>
            </div>
        </div>
      ) : (
        <div className='sswapdiv'>
          <div className={`ssffdiv3 ${isSwapped ? 'swapped' : ''}`}>
                welcom 
                back
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
