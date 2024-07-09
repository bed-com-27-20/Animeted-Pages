import React, { useState } from 'react';
import './Logins.css'

const Logins = () => {
  const [showDiv2, setShowDiv2] = useState(true);

  const handleSwap = () => {
    setShowDiv2(!showDiv2);
  };

  return (
    <div className='fswapdiv'>
      {showDiv2 ? (
        <div className='sswapdiv'>
          <div className='ssffdiv1'>
                sign in
            </div>
            <div className='ssffdiv2'>
                hello 
                friends
                <button onClick={handleSwap} className='swapbtz'>go to acc create</button>
            </div>
        </div>
      ) : (
        <div className='sswapdiv'>
          <div className='ssffdiv1'>
                welcom 
                back
            </div>
            <div className='ssffdiv2'>
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
