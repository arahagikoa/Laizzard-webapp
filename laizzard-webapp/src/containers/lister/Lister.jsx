import React from 'react'
import { openai, tik } from '../brand/imports'
import './lister.css';

const Lister = () => {
  return (
    <div className='liz__lister section__padding' id='finde'>
      <div className='liz__lister-content'>
        <h4><a href='#request'>Request for private access</a></h4>
        <h1 className='gradient__text'>Find best candidates for a job offer for Your Company </h1>
        <p>We developed a tool that helps in finding the best candidates for a given job offer.
          All You have to do is to upload job offer file (PDF, DOC, txt) and CV files. Our AI model will handle the rest for you!
          At the end of the process you will be given list with sorted candidates, for Your convienience there is also a possibility to download the record of current session.
        </p>
        <div className='liz__lister-content-item'>
          <img src={tik} alt='tik' />  
          <h4>DOCX, PDF,TXT</h4>
        </div>
        <div className='liz__lister-content-item'>
          <img src={tik} alt='tik' />    
          <h4>Many CV files simultaneously</h4>
        </div>
        <div className='liz__lister-content-item'>
          <img src={tik} alt='tik' />    
          <h4>User friendly design</h4>
        </div>
        <div className='liz__lister-content-item'>  
          <img src={tik} alt='tik' />  
          <h4>Time saver</h4>
        </div>
      </div>
      <div className='liz__lister-image'>
        <img  src={openai} alt='lister'/>
      </div>
    </div>
  )
}

export default Lister
