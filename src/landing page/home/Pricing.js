import React from 'react';
function Pricing() {
    return (<div className='container'>
        <div className='row'>
            <div className='col-lg-4 col-sm-12 mt-5'>
                <h1>Unbeatable Pricing</h1>
                <br></br>
                <p >we pioneered the concept of discount broking and price transparency in india . Flat fees and no hidden charges .</p>
                <a href="/demo" style={{ textDecoration: "none" }}>
              See pricing details <i className="fa-solid fa-arrow-right"></i>
            </a>
            </div>
 <div className='col-2 p-5'></div>
            <div className='col-lg-6 col-sm-12 p-5'>

                <div className='row text-center'>
                    <div className='col p-2 border'>
                     <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign" style={{ fontSize: "0.8em" }}  ></i>0</h1>
                     <p>free equality delivery and direct mutual funds </p>
                    </div>
                    <div className='col p-2 border'>
                <h1><i class="fa-solid fa-indian-rupee-sign" style={{ fontSize: "0.8em" }}></i>20</h1>
                     <p className='mt-4'> Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div> );
}

export default Pricing;