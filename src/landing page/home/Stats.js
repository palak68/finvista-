import React from 'react';

function Stats() {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-lg-6 col-sm-3 p-3">
          <h1 className="mt-5">Invest Smarter with Finvista</h1>
          <h4 className="mt-5">Client first approach</h4>
          <p className="text-muted">
            That's why thousands of users trust FinVista to manage their investment and grow their wealth securely.
          </p>
          <h4 className="mt-3">Transparent & Simple</h4>
          <p className="text-muted">
            No spam, gimmicks, or annoying notifications. Enjoy a clean and intuitive interface to manage your portfolio at your pace.
          </p>
          <h4 className="mt-3">The FinVista Ecosystem</h4>
          <p className="text-muted">
            Not just a website, but a complete financial ecosystem. Our integrations with multiple platforms help you make informed financial decisions.
          </p>
          <h4 className="mt-3">Maximize your money</h4>
          <p className="text-muted">
            With smart tools like insights, alerts, and analytics, we help you not just invest, but invest wisely.
          </p>
        </div>

        <div className="col-lg-6 col-sm-3 p-3">
          <img
            src="media/ecosystem.png"
            alt="FinVista ecosystem illustration"
            className="img-fluid mt-5"
            style={{ width: "85%" }}
          />
          <div className="text-center mt-3">
            <a href="/products" className="mx-3" style={{ textDecoration: "none" }}>
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="/demo" style={{ textDecoration: "none" }}>
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
