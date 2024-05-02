import React from 'react'
import './brand.css'
import {azure, openai} from './imports';

const Brand = () => {
  return (
    <div className='liz__brand section__padding'>
        <div>
            <img src={azure} alt='azure' />
        </div>
        <div>
            <img src={openai} alt='openai' />
        </div>
        
    </div>
  )
}

export default Brand
