import React from 'react'
import './footer.css'
import { logo } from '../brand/imports';
const Footer = () => {
  return (
    <div className='liz__footer section__padding' id='contact'>
      <div className='liz__footer-heading'>
        <h1 className='gradient__text'>Step into the future with AI</h1>
      </div>
      <div className='liz__footer-btn'>
        <p><a href='#request'>Request private access</a></p>
      </div>
      <div className='liz__footer-links'>
        <div className='liz__footer-links_logo'>
          <img  src={logo} alt='logo'/>
          <p>LaizzardAI, All Rights Reserved</p>

        </div>
        <div className='liz__footer-links_div'>
          <h4>Links</h4>
          <p><a href='https://www.linkedin.com/company/lizardai/?viewAsMember=true'>Linkedin</a></p>
        </div>
        <div className='liz__footer-links_div'>
          <h4>Company</h4>
          <p><a href='/terms.txt' download>Terms & Conditions</a></p>
          <p><a href='/privacy.txt' download>Privacy Policy</a></p>

        </div>
        <div className='liz__footer-links_div'>
          <h4>Get in touch</h4>
          <p>ul. Plac Politechniki 1</p>
          <p>00-661</p>
          <p>lizardai2024@gmail.com</p>
        </div>

      </div>
      <div className='liz__footer-copyright'>
        <p>2024 Laizzard. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer;
