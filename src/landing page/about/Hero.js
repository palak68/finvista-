import React from 'react';

function Hero() {
    return (
        <div className="container p-5 mb-5">

            {/* ------------------ ABOUT TITLE ------------------ */}
            <div className="row text-center">
                <h1 className="mt-5">About FinVista</h1>
                <p>
                    FinVista is a leading online investment platform dedicated to empowering individuals 
                    to take control of their financial future. Our mission is to provide accessible, 
                    transparent, and innovative investment solutions that cater to both novice and 
                    experienced investors.
                </p>
            </div>

            {/* ------------------ OVERVIEW ------------------ */}
            <div className="row text-center mt-4">
                <h2 className="mt-5"><b>FinVista Overview</b></h2>

                <div className="col-lg-6 col-sm-12 mx-auto mt-5">
                    <p>
                        FinVista is a next-generation financial platform designed to simplify investing 
                        for every Indian. <br />
                        We provide seamless access to stocks, derivatives, mutual funds, and long-term 
                        wealth solutions through secure digital infrastructure. <br />
                        Our goal is to empower individuals with intelligent tools, transparent insights, 
                        and easy-to-use services.
                    </p>
                </div>

                <div className="col-lg-4 col-sm-8 mx-auto mt-5">
                    <img 
                        src="media/my image 4.jpeg" 
                        alt="Hero-image" 
                        className="mb-5" 
                        style={{ width: "100%", height: "250px" }} 
                    />
                </div>
            </div>

            {/* ------------------ WHAT FINVISTA OFFERS ------------------ */}
            <div className="row text-center mt-5 p-4">
                <h2 className="mt-5"><b>What FinVista Offers</b></h2>
                <p className="mt-2">
                    FinVista delivers powerful, secure, and easy-to-use investment solutions 
                    designed for both beginners and experienced investors.
                </p>

                {/* Offer Cards */}
                <div className="row mt-4">

                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" >
                        <div className="p-4 border rounded shadow-sm h-100">
                            <h4>⚡ Fast & Secure Trading</h4>
                            <p>Execute trades instantly with high-speed performance and secure systems.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="p-4 border rounded shadow-sm h-100">
                            <h4>🤖 AI-Based Insights</h4>
                            <p>Smart investment suggestions based on real-time data and analytics.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="p-4 border rounded shadow-sm h-100">
                            <h4>📊 Unified Investment Platform</h4>
                            <p>Manage stocks, mutual funds, and SIPs from one easy dashboard.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="p-4 border rounded shadow-sm h-100">
                            <h4>💰 Transparent Pricing</h4>
                            <p>No hidden fees — simple and clear pricing structure.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="p-4 border rounded shadow-sm h-100">
                            <h4>📈 Advanced Portfolio Tracking</h4>
                            <p>Track PnL, asset allocation, and performance with interactive charts.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="p-4 border rounded shadow-sm h-100">
                            <h4>🛡 Enterprise-Level Security</h4>
                            <p>Bank-grade encryption ensures maximum safety for your data and money.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Hero;
