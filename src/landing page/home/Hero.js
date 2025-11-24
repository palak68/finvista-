import React from 'react';
function Hero() {
    return ( 
   <div className="container p-5 mb-5">
<div className="row text-center">
    <img src='media/homeHero.jpg' alt='Hero-image' className="mb-5" />
    <h1 className="mt-5">
  invest in everything
    </h1>
    <p>
     online platform to invest in stocks , derivatives , mutual funds, and more..   
    </p>
    <button className="btn " style={ { width: '200px', height: '40px', backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer',
        margin: 'auto' , marginTop:'20px' , display:'block', hover:{ backgroundColor: '#0056b3' }
    }}>
  Signup Now
    </button>
</div>
   </div>
    )
}

export default Hero;