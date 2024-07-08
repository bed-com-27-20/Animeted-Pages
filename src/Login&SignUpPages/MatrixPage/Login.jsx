import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='logDiv'>
    <h2>GAMBIT</h2>

          <input type="text" name="username" placeholder='Enter Name'/>

          <input type="password" name="password" placeholder='Enter password'/>

          <div className='texdiv'>
            <h4>Alredy have an account </h4>
           <h4> <Link to="#">Register</Link></h4>
          </div>

        <button type="submit" className='lgbtz'>Login</button>
    </div>
  )
}
