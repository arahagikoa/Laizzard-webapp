import React from 'react'
import './converter.css';
import { openai, tik } from '../brand/imports';
const Converter = () => {
  return (
    <div className='liz__converter section__padding' id='converter'>
      <div className='liz__converter-image'>
        <img  src={openai} alt='converter'/>
      </div>
      <div className='liz__converter-content'>
        <h4><a href='#request'>Request for Private Access</a></h4>
        <h1 className='gradient__text'>Convert candidate's CV to you template faster than ever</h1>
        <p>Let our advanced AI systems convert CV a candidate to templat eused in Your company. 
            You can get either PDF od DOC file as output. Are you struggling with language conversion? 
            AI will translate CV to one of the language you choose.
        </p>
        <div className='liz__converter-content-item'>
          <img src={tik} alt='tik' />  
          <h4>DOCX, PDF as output files</h4>
        </div>
        <div className='liz__converter-content-item'>
          <img src={tik} alt='tik' />    
          <h4>Product that will be adjusted just for You</h4>
        </div>
        <div className='liz__converter-content-item'>
          <img src={tik} alt='tik' />    
          <h4>English/German/French/Polish language translation</h4>
        </div>
        <div className='liz__converter-content-item'>  
          <img src={tik} alt='tik' />  
          <h4>Time saver</h4>
        </div>
        
      </div>
    </div>
  )
}

export default Converter
