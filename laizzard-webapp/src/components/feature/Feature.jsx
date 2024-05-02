import React from 'react'
import './feature.css'
import { Feat } from '..'

const featuresData = [
  {
    title: "Improving time efectivness",
    text: "something someaaaaaaaaaaaaaaaaaa"
  },
  {
    title: "Do your tasks better",
    text: "something someaaaaaaaaaaaaaaaaaa"
  },
  {
    title: "Achive your goals with less effort",
    text: "something someaaaaaaaaaaaaaaaaaa"
  },
]


const Feature = () => {
  return (
    <div className='liz__features section__padding' id='features'>
      <div className='liz__features-heading'>
        <h1 className='gradient__text'>
          Don't let the others take your job! Step into the future of AI automation and take a lead today.
        </h1>
        <p>Request access for your company</p>
      </div>
      <div className='liz__features-container'>
        {featuresData.map((item, index) => (
         <Feat title={item.title} text={item.text} key={item.title + index} /> 
        ))}
      </div>
      
    </div>
  )
}

export default Feature
