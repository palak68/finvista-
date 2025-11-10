import React from 'react';

function Awards() {
  return ( 
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 col-sm-12 order-lg-1 order-2 text-center">
          <img 
            src="media/investment.jpg" 
            alt="Award-image" 
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-sm-12 order-lg-2 order-1">
          <h1>Your Financial Compass. Smart Investing</h1>
          <p>
            50,000+ smart investors trust <b>FinVista</b> for low-cost, high-insight trading.
            Trade smarter, not harder.
          </p>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <ul>
                <li>Futures and Options</li>
                <li>Equities & F&O</li>
                <li>Mutual Funds</li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12">
              <ul>
                <li>IPOs & Bonds</li>
                <li>FinVista Funds </li>
                <li>Smart SIPs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;