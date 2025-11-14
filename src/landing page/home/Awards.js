import React from 'react';
import Lottie from "lottie-react";
import animationData from "../../assets/Isometric.json";

function Awards() {
  return ( 
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Animation Section */}
        <div className="col-lg-6 col-sm-12 order-lg-1 order-2 text-center">
          <div
            style={{
              width: "350px",
              margin: "auto"
            }}
          >
            <Lottie animationData={animationData} loop={true} autoplay={true} />
          </div>
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
                <br />
                <li>Equities & F&O</li>
                <br />
                <li>Mutual Funds</li>
              </ul>
            </div>

            <div className="col-lg-6 col-sm-12">
              <ul>
                <li>IPOs & Bonds</li>
                <br />
                <li>FinVista Funds</li>
                <br />
                <li>Smart SIPs</li>
              </ul>
            </div>
          </div>

          <img 
            src="media/pressLogos.png" 
            alt="Press Logos" 
            className="img-fluid mt-3"
          />
        </div>

      </div>
    </div>
  );
}

export default Awards;