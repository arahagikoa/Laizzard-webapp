import React from 'react'
import { openai, tik, fpe } from '../brand/imports'
import './lister.css';

const Lister = () => {
  return (
    <div className='liz__lister section__padding' id='finde'>
      <div className='liz__lister-content'>
        
        <h1 className='gradient__text'>Find the Best Candidates for Your Job Offer</h1>
        <p>We have developed a tool that helps you find the best candidates for any job offer. Simply upload the job offer file (PDF, DOC, or TXT) and the CV files. Our AI model will handle the rest! At the end of the process, you will receive a sorted list of candidates. For your convenience, you also have the option to download the record of the current session.
        </p>
        <div className='liz__lister-content-item'>
          <li>
            DOCX, PDF, and TXT file support
          </li>
          <li>
            Process multiple CV files simultaneously
          </li>
          <li>
            User-friendly design
          </li>
          <li>
            Significant time saver
          </li>

        </div>
        <h4><a href='#request'>Request access now and streamline your candidate selection process!</a></h4>
      </div>
      <div className='liz__lister-image'>
        <img  src={fpe} alt='lister'/>
      </div>
      
    </div>
  )
}

export default Lister
