import React from 'react'
import './feature.css'
import { Feat } from '..'

const featuresData = [
  {
    title: "Improve Time Effectiveness",
    text: "Our tools help you perform monotonous and time-consuming tasks, allowing you to focus on what's important while the AI handles the rest."
  },
  {
    title: "Do Your Tasks Better",
    text: "Our solutions are designed to enhance the quality of your work. They are specially tailored for specific tasks and are trained to be reliable and efficient."
  },
  {
    title: "Achieve Your Goals with Less Effort",
    text: "With the user-friendly interface of our products, you can enjoy a cup of coffee while the AI handles the tasks."
  },
]


const Feature = () => {
  return (
    <div className='liz__features section__padding' id='features'>
      <div className='liz__features-heading'>
        <h1 className='gradient__text'>
        Don't Let Others Take Your Job!
        Step into the future of AI automation and take the lead today.
        </h1>
        <p><a href='#request'>Request access for your company</a></p>
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
