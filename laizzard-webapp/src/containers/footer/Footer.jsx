import React from 'react'
import './footer.css'
import { openai } from '../brand/imports';
const Footer = () => {
  return (
    <div className='liz__footer section__padding'>
      <div className='liz__footer-heading'>
        <h1 className='gradient__text'>Step into the future with AI</h1>
      </div>
      <div className='liz__footer-btn'>
        <p>Request private access</p>
      </div>
      <div className='liz__footer-links'>
        <div className='liz__footer-links_logo'>
          <img  src={openai} alt='logo'/>
          <p>LaizzardAI sp. z.o.o, All Rights Reserved</p>

        </div>
        <div className='liz__footer-links_div'>
          <h4>Links</h4>
          <p>Linkedin</p>
          <p>Instagram</p>
          <p>Contact</p>
        </div>
        <div className='liz__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='liz__footer-links_div'>
          <h4>Get int touch</h4>
          <p>ul. świętego mikołaja 112</p>
          <p>000-997</p>
          <p>biuro_laizzard@lol.pl</p>
        </div>

      </div>
      <div className='liz__footer-copyright'>
        <p>2024 Laizzard. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer;
