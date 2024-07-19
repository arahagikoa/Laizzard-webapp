import React, {useState} from 'react'
import './header.css'

const Header = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactClick = () => {

    localStorage.setItem('tempEmail', email);
    setEmail('');
    window.location.href = '#request';
    
    setTimeout(() => {
      const emailInput = document.querySelector('input[name="businessEmail"]');
      if (emailInput) {
        emailInput.value = email;
        const event = new Event('input', { bubbles: true });
        emailInput.dispatchEvent(event);
      }
    }, 100);
  };

  return (
    <div className='liz__header section__padding' id='home'>
      <div className='liz__header-content'>
        <h1 className='gradient__text'>
          Let Us help You automate your work!
        </h1>
        <p>
          We are Lizard.ai, a startup revolutionizing the recruitment process and automating boring work. We work hard every day to implement innovative solutions, helping companies achieve their deadlines more effectively.
        </p>
        <div className='liz__header-content__input'>
          <input 
            type='email' 
            placeholder='Your email address'
            value={email}
            onChange={handleEmailChange}
          />
          <button type='button' onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;