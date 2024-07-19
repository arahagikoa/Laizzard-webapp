import React from 'react'
import { openai, tik } from '../brand/imports'
import './lister.css';

const Lister = () => {
  return (
    <div className='liz__lister section__padding' id='finde'>
      <div className='liz__lister-content'>
        
        <h1 className='gradient__text'>Find the Best Candidates for Your Job Offer</h1>
        <p>We have developed a tool that helps you find the best candidates for any job offer. Simply upload the job offer file (PDF, DOC, or TXT) and the CV files. Our AI model will handle the rest! At the end of the process, you will receive a sorted list of candidates. For your convenience, you also have the option to download the record of the current session.
        </p>
        <div className='liz__lister-content-item'>
          <img src={tik} alt='tik' />  
          <h4>DOCX, PDF, and TXT file support</h4>
        </div>
        <div className='liz__lister-content-item'>
          <img src={tik} alt='tik' />    
          <h4>Process multiple CV files simultaneously</h4>
        </div>
        <div className='liz__lister-content-item'>
          <img src={tik} alt='tik' />    
          <h4>User-friendly design</h4>
        </div>
        <div className='liz__lister-content-item'>  
          <img src={tik} alt='tik' />  
          <h4>Significant time saver</h4>
        </div>
        <h4><a href='#request'>Request access now and streamline your candidate selection process!</a></h4>
      </div>
      <div className='liz__lister-image'>
        <img  src={openai} alt='lister'/>
      </div>
      
    </div>
  )
}

export default Lister
