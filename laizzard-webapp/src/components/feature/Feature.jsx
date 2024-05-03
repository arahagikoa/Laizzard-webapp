import React from 'react'
import './feature.css'
import { Feat } from '..'

const featuresData = [
  {
    title: "Improving time efectivness",
    text: "Out tools help you in performing montonous and time-consumng tasks. You can focus on what's importats and let the AI handle rest"
  },
  {
    title: "Do Your tasks better",
    text: "Our solutions improve quality of work you do. They are specially designed for given tasks and trained to be trusted in what they do"
  },
  {
    title: "Achive Your goals with less effort",
    text: "With friendly user interface of out products you can grab Yourself cup of coffee while AI is handling the task"
  },
]


const Feature = () => {
  return (
    <div className='liz__features section__padding' id='features'>
      <div className='liz__features-heading'>
        <h1 className='gradient__text'>
          Don't let the others take your job! Step into the future of AI automation and take a lead today.
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
