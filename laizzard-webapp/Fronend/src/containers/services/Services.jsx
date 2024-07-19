import React from 'react'
import './services.css'


const Services = () => {
    return (
    <div className='liz__services section__padding' id ='services'>
        <div className='liz__services-heading'>
            <h1 className='gradient__text'>
                Our services
            </h1>
        </div>
        <div className='liz__serivces-content'> 
            <p>
            We offer a range of services, including:
            <li>

                Implementing chatbots tailored to your data
            </li>
            <li>
                Developing specialized models (locally and via API, including LLMs and CNNs) for unique use cases
            </li>
            <li>
                Creating AI-powered applications
            </li>
            <li>
                Providing expert AI consulting
            </li>

            </p>
            <h3><a href='#request'>
                Get in touch if you have any questions or would like to discuss a potential project, please contact us, and we will respond promptly.
                </a>
            </h3>
        </div>
    </div>
    )
}

export default Services