import React from 'react';
import { Navbar, CTA, Feature } from './components';
import { Aboutus, Header, Footer, Brand, Converter, Lister, Contact, We, Services } from './containers';
import './app.css';



const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Aboutus />
      <Feature />
      <Services/>
      <Converter />
      <Lister />
      <We />
      <Contact />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
