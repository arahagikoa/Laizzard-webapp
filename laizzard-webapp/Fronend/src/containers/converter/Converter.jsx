import React from 'react'
import './converter.css';
import { openai, tik, conver } from '../brand/imports';
const Converter = () => {
  return (
    <div className='liz__converter section__padding' id='converter'>
      <div className='liz__converter-image'>
        <img  src={conver} alt='converter'/>
      </div>
      <div className='liz__converter-content'>
        
        <h1 className='gradient__text'>
        Convert Candidates' CVs to Your Template Faster Than Ever</h1>
        <p>Let our advanced AI systems convert candidates' CVs to the template used in your company. You can choose to receive the output as either a PDF or DOC file. Struggling with language conversion? Our AI will translate CVs into the language of your choice.
        </p>
        <div className='liz__converter-content-item'>

          <li>
            DOCX and PDF output files
          </li>
          <li>
          Customized product tailored just for you
          </li>
          <li>
          English, German, French, and Polish language translation
          </li>
          <li>
          Significant time saver
          </li>
        </div>
        <h4><a href='#request'>Request access now and streamline your recruitment process!</a></h4>
      </div>
    </div>
  )
}

export default Converter
