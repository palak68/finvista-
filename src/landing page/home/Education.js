import React from 'react';
function Education() {
    return ( <div className='container mt-5 mb-4'>
        <div className='row'>
            <div className='col-lg-6 col-sm-12 p-5'>

            </div>
            <div className='col-lg-6 col-sm-12 p-5'>
                <h1>Free and open market Education</h1>
                <p className='mt-4 '> Finvista Academy , the largest online stock market education library covering everything from basic to advanced trading strategies</p>
                <a href="/demo" style={{ textDecoration: "none" }}>
             Finvista Academy<i className="fa-solid fa-arrow-right"></i>

            </a>
            <br></br>
            <p className='mt-4'>Finvista Forum , the most active trading and investing community in india for all your market releated queries</p> 
            <a href="/demo" style={{ textDecoration: "none" }}>
             TradingQ&A<i className="fa-solid fa-arrow-right"></i>

            </a>
            </div>
        </div>
    </div> );
}

export default Education;