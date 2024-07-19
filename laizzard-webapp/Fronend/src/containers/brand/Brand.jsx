import React from 'react'
import './brand.css'
import {azure, openai, deepL, langC} from './imports';

const Brand = () => {
  return (
    <div className='liz__brand section__padding'>
        <div>
            <img src={azure} alt='azure' className='liz__brand-img'/>
        </div>
        <div>
            <img src={openai} alt='openai' className='liz__brand-img'/>
        </div>
        <div>
            <img src={deepL} alt='openai' className='liz__brand-img'/>
        </div>
        <div>
            <img src={langC} alt='openai' className='liz__brand-img' />
        </div>
        
    </div>
  )
}

export default Brand
