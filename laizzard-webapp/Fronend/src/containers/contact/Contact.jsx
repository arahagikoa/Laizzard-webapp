import React, { useState, useEffect } from 'react';
import './contact.css';
import axios from "axios";



import { Loading } from '../../components';

const Contact = () => {


    const [isLoading, setisLoading] = useState(false)


    const initialState = {
        firstName: '',
        phoneNumber: '',
        businessEmail: '',
        note: ''
      };
    
      const [userData, setUserData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value
    });
  };
  useEffect(() => {
    const tempEmail = localStorage.getItem('tempEmail');
    if (tempEmail) {
      setUserData(prevState => ({
        ...prevState,
        businessEmail: tempEmail
      }));
      localStorage.removeItem('tempEmail');
    }
  }, []);
  const sendUserData = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
        const response = await axios.post('https://laizzardaibackend.azurewebsites.net/api/contact', userData);
        console.log(response.data);  
        setUserData(initialState);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        setisLoading(false);
    }
};
  return (
    <div className='liz__contact section__padding' id='request'>
    {isLoading ? <Loading /> : <></>}
      <div className='liz__contact-content'>
        <h1 className='gradient__text'>Get in touch with Us to request private access</h1>
        <p>We are here for You. Fill up the form below and we will contact You as soon as possible</p>
        <div className='liz__contact-content__form'>
          <div className='liz__contact-content__form-content'>
            <form onSubmit={sendUserData}>
              <fieldset className='liz__contact-content__form-field'>
                <div className='liz__contact-content__form-field-content'>
                  <div className='liz__contact-content__form-field-content-label'>
                    <label>First name</label>
                  </div>
                  <div className='liz__contact-content__form-field-content-input'>
                    <input
                      required
                      placeholder="John"
                      type='text'
                      name='firstName'
                      value={userData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className='liz__contact-content__form-field'>
                <div className='liz__contact-content__form-field-content'>
                  <div className='liz__contact-content__form-field-content-label'>
                    <label>Phone number</label>
                  </div>
                  <div className='liz__contact-content__form-field-content-input'>
                    <input
                      required
                      placeholder="Phone number"
                      type='tel'
                      name='phoneNumber'
                      inputMode='tel'
                      value={userData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className='liz__contact-content__form-field'>
                <div className='liz__contact-content__form-field-content'>
                  <div className='liz__contact-content__form-field-content-label'>
                    <label>Business mail</label>
                  </div>
                  <div className='liz__contact-content__form-field-content-input'>
                    <input
                      required
                      placeholder="john@mail.eu"
                      type='email'
                      name='businessEmail'
                      value={userData.businessEmail}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className='liz__contact-content__form-field'>
                <div className='liz__contact-content__form-field-content'>
                  <div className='liz__contact-content__form-field-content-label'>
                    <label>Note</label>
                  </div>
                  <div className='liz__contact-content__form-field-content-input'>
                    <textarea
                      spellCheck={false}
                      placeholder='Your note to us'
                      name='note'
                      value={userData.note}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </fieldset>
              <div className='form_button-div'>
                <button type='submit'>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
