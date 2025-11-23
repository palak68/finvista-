import React from 'react';
import Navbar from '../Navbar';
import Awards from './Awards';
import Education from './Education';
import Hero from './Hero';
import Pricing from './Pricing';
import Stats from './Stats';
import OPenAccount from '../Openaccount';

import Footer from '../Footer'
function HomePage() {
    return ( <>
      <Navbar />  
      <Hero />
       <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OPenAccount />
       
        <Footer />
    </> );
}

export default HomePage;
