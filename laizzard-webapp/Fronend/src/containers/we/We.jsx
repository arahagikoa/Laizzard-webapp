import React from 'react'
import './we.css'
import {olek, kamil} from './imports.js'
const We = () => {
    return (
      <div className='liz__we section__padding' id ='we'>
        <div className='liz__we-content'>
            <h1 className='gradient__text'>
                Aleksander Majkowski
            </h1>
            <img src={olek} alt='zdj1'/>
            <p>
            I am an Applied Physics student in my third year, specializing in computer physics with a focus on the nuclear field. I am also a certified AI expert, with a specialization in large language models (LLMs) and generative AI. My experience includes working on various AI projects, from enterprise-class endeavors such as unstandardized document classification using OCR combined with LLMs (like Llama3) to smaller personal projects. I excel in creating applications with APIs, such as Azure OpenAI, using open-source technologies like LangChain, and training smaller LLMs like Meta Llama and Mistral locally for specific use cases. With two years of experience in AI, I have a deep understanding of its mechanics and current limitations. Outside of academics, I am passionate about sports, having been a former professional swimmer, and aquaristics.
            </p>
        </div>
        <div className='liz__we-content'>
            <h1 className='gradient__text'>
                Kamil Krzemiński
            </h1>
            <img src={kamil} alt='zdj2'/>
            <p>
            I am an Applied Physics student in my third year, specializing in computer physics with a focus on complex systems analysis. I am a software developer with expertise in Convolutional Neural Networks (CNNs) and a solid understanding of generative AI. My experience includes training CNNs for document classification and developing a comprehensive website (peopleofequality.pl) with a database for a company. My main skills encompass:

            Developing and training CNN models
            Backend and frontend software development
            Rigorous software testing
            In addition to my technical skills, I am passionate about classical music and playing piano(graduated music school), and physics, as evidenced by my achievement as a finalist in the national physics olympiad.
            </p>
        </div>
      </div>
    )
  }
  
  export default We