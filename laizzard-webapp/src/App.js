import React from 'react';
import { Navbar, CTA, Feature } from './components';
import { Aboutus, Header, Footer } from './containers';
import './app.css';



const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Aboutus />
      <Feature />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
