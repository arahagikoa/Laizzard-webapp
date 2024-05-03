import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='liz__header section__padding' id='home'>
      <div className='liz__header-content'>
        <h1 className='gradient__text'>
          Let Us help You automate your work!
        </h1>
        <p>
        We are Laizzard.ai We are start-up that takes reqruitment process to a whole diffrent level. We are hard working everyday to implement new solutions and help companies achievieng Their deadlines more effective.
        </p>
      <div className='liz__header-content__input'>
        <input type='email' placeholder='Your email adress'/>
        <button type='button'>
          Contact Us
        </button>

      </div>
      </div>
      
    </div>
  )
}

export default Header;
