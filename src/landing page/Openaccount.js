import React from 'react';

function OpenAccount() {
  return (
    <div className="row text-center">
      <div className="container mb-5">

        <h1 className="mt-1">
          Open a FinVista account
        </h1>

        <p>
          Modern platform to invest in stocks, derivatives, mutual funds, and more.
        </p>

        <button
          className="btn"
          style={{
            width: '200px',
            height: '40px',
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: 'auto'
          }}
        >
          Signup Now
        </button>

      </div>
    </div>
  );
}

export default OpenAccount;