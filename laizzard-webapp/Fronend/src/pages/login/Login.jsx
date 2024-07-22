import React, { useState, useEffect } from 'react'
import { Loading } from '../../components';
import "./login.css"
const Login = () => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value
    });
  };


  const checkData = (e) => {
    setisLoading(true);
    setErrorPassword(false);
    if (userData.rePassword !== userData.password) {
        setErrorPassword(true);
    }
    else {
        window.location.href = '/'
    }

  }
  const initialState = {
      firstName: '',
      lastName: '',
      businessEmail: '',
      password: '',
      rePassword: '',
    };
    
  const [userData, setUserData] = useState(initialState);
  const [passwordError, setErrorPassword] = useState(false);
  const [isLoading, setisLoading] = useState(false)


  return (
    <div className='liz__login'>
      {isLoading ? <Loading /> : <></>}
      <div className='liz__login-content_box'>
        <div className='liz__login-content-inputs'>
          <div className='liz__login-input'>
            <label>First Name</label>
            <input 
            required
            placeholder="John"
            type='text'
            name='firstName'
            value={userData.firstName}
            onChange={handleChange}
            />
          </div>
          <div className='liz__login-input'>
          <label>Last Name</label>
            <input 
            required
            placeholder="Johnson"
            type='text'
            name='lastName'
            value={userData.lastName}
            onChange={handleChange}
            />
          </div>
          <div className='liz__login-input'>
            <label>Business Email</label>
            <input 
            required
            placeholder="email@email.pl"
            type='email'
            name='businessEmail'
            value={userData.businessEmail}
            onChange={handleChange}
            />
          </div>
          <div className='liz__login-input'>
            <label>Password</label>
            <input 
            required
            placeholder=""
            type='password'
            name='password'
            value={userData.password}
            onChange={handleChange}
            />

            {passwordError ? <h4>Password don't match</h4> : <></>}
            
          </div>
          <div className='liz__login-input'>
            <label>Repeat Password</label>
            <input 
            required
            placeholder=""
            type='password'
            name='rePassword'
            value={userData.rePassword}
            onChange={handleChange}
            />
          </div>
          <div className='liz__login-button'>
            <button onClick={checkData}>Log In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
