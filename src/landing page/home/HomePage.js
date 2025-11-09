import React from 'react';
import Awards from './Awards';
import Education from './Education';
import Hero from './Hero';
import Pricing from './Pricing';
import Stats from './Stats';
import OPenAccount from '../Openaccount';
import Navbar from '../Navbar'
import Footer from '../Footer'
function HomePage() {
    return ( <>
       <Hero />
       <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OPenAccount />
        <Navbar />
        <Footer />
    </> );
}

export default HomePage;
