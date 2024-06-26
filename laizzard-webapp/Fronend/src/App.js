import React from 'react';
import { Navbar, CTA, Feature } from './components';
import { Aboutus, Header, Footer, Brand, Converter, Lister, Contact } from './containers';
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
      <Converter />
      <Lister />
      <Contact />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
