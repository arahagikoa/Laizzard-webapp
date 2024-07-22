import React from 'react';
import { Navbar, CTA, Feature } from '../../components';
import { Aboutus, Header, Footer, Brand, Converter, Lister, Contact, We, Services } from '../../containers';
import './home.css';



const Home = () => {
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

export default Home
