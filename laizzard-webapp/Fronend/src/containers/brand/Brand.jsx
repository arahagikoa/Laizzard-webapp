import React from 'react'
import './brand.css'
import {azure, openai, deepL, langC, pytorch, hug} from './imports';

const Brand = () => {
  return (
    <div className='liz'>
        <h1 className='gradient__text'>Technologies We Specialize In</h1>
    <div className='liz__brand section__padding'>
        <div>
            <img src={azure} alt='azure' className='liz__brand-img-azure'/>
        </div>
        <div>
            <img src={openai} alt='openai' className='liz__brand-img'/>
        </div>
        <div>
            <img src={pytorch} alt='openai' className='liz__brand-img-deepL'/>
        </div>
        <div>
            <img src={langC} alt='openai' className='liz__brand-img-langC' />
        </div>
        <div>
            <img src={hug} alt='openai' className='liz__brand-img-hug' />
        </div>

        
    </div>

    </div>
  )
}

export default Brand
