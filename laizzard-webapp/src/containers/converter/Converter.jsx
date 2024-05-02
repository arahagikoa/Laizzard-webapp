import React from 'react'
import './converter.css';
import { openai } from '../brand/imports';
const Converter = () => {
  return (
    <div className='liz__converter section__padding' id='converter'>
      <div className='liz__converter-image'>
        <img  src={openai} alt='converter'/>
      </div>
      <div className='liz__converter-content'>
        <h4>Request for Private Access</h4>
        <h1 className='gradient__text'>Convert candidate's CV to you template faster than ever</h1>
        <p>Let our advanced AI systems convert CV a candidate to templat eused in Your company. 
            You can get either PDF od DOC file as output. Are you struggling with language conversion? 
            AI will translate CV to one of the language you choose.
        </p>
        <h4>Request for Private Access</h4>
      </div>
    </div>
  )
}

export default Converter
