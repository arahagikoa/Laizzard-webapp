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
        
        <h1 className='gradient__text'>
        Convert Candidates' CVs to Your Template Faster Than Ever</h1>
        <p>Let our advanced AI systems convert candidates' CVs to the template used in your company. You can choose to receive the output as either a PDF or DOC file. Struggling with language conversion? Our AI will translate CVs into the language of your choice.
        </p>
        <div className='liz__converter-content-item'>
          <img src={tik} alt='tik' />  
          <h4>DOCX and PDF output files</h4>
        </div>
        <div className='liz__converter-content-item'>
          <img src={tik} alt='tik' />    
          <h4>Customized product tailored just for you</h4>
        </div>
        <div className='liz__converter-content-item'>
          <img src={tik} alt='tik' />    
          <h4>English, German, French, and Polish language translation</h4>
        </div>
        <div className='liz__converter-content-item'>  
          <img src={tik} alt='tik' />  
          <h4>Significant time saver</h4>
        </div>
        <h4><a href='#request'>Request access now and streamline your recruitment process!</a></h4>
      </div>
    </div>
  )
}

export default Converter
