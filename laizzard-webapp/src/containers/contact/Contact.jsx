import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='liz__contact section__padding' id='request'>
      <div className='liz__contact-content'>
        <h1 className='gradient__text'> Get in touch with Us to request private access</h1>
        <p> We are here for You. Fill up the form below and we will contact You as soon as possible</p>
        <div className='liz__contact-content__form'>
            <div className='liz__contact-content__form-content'>
                <form>
                    <fieldset className='liz__contact-content__form-field'>
                        <div className='liz__contact-content__form-field-content'>
                            <div className='liz__contact-content__form-field-content-label'>
                                <label>
                                    First name
                                </label>
                            </div>
                            <div className='liz__contact-content__form-field-content-input'>
                                <input required placeholder="John" type='text'/>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className='liz__contact-content__form-field'>
                        <div className='liz__contact-content__form-field-content'>
                            <div className='liz__contact-content__form-field-content-label'>
                                <label>
                                    Phone number
                                </label>
                            </div>
                            <div className='liz__contact-content__form-field-content-input'>
                                <input required placeholder="Phone number" type='tel' inputmode='tel' />
                            </div>
                            
                        </div>
                    </fieldset>
                    <fieldset className='liz__contact-content__form-field'>
                    <div className='liz__contact-content__form-field-content'>
                            <div className='liz__contact-content__form-field-content-label'>
                                <label>
                                    Bussiness mail
                                </label>
                            </div>
                            <div className='liz__contact-content__form-field-content-input'>
                                <input required placeholder="john@mail.eu" type='email'/>
                            </div>
                            
                        </div>
                    </fieldset>
                    <fieldset className='liz__contact-content__form-field'>
                    <div className='liz__contact-content__form-field-content'>
                            <div className='liz__contact-content__form-field-content-label'>
                                <label >
                                    Note
                                </label>
                            </div>
                            <div className='liz__contact-content__form-field-content-input'>
                            <textarea spellCheck={false} placeholder='Your note to us' />
                            </div>
                            
                        </div>
                    </fieldset>

                </form>
            </div>
            <button type='button'>
                Send
            </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
