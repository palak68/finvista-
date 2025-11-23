import React from 'react';
function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(250,250,250)"}}>
        <div className='container mt-5 mb-5 p-4'>
            <div className='row mt-5 '>
                <div className='col'>
                    <img src="media/finvista.png" style={{width:"50%"}} alt="FinVista logo" />
                    <p className="text-muted" style={{ fontSize: "13px", lineHeight: "20px", marginTop: "20px" }}>
  © {new Date().getFullYear()} FinVista.  
  This platform is a project developed for educational and portfolio use.  
    All rights reserved.
</p>
                </div>
                <div className='col mr-5'>
                    <b><p> Company</p></b>
                    <ul style={{listStyle:"none"}} ><li><a href='#'>About</a></li>
                    
                    <li ><a href='#'>Product</a></li>
                      
                    <li><a href='#'>Pricing</a></li>
                      
                    <li><a href='#'>Careers</a></li></ul>
                    
                </div>
                <div className='col'>
                    <b><p> Support </p></b>
                    
                    <ul style={{listStyle:"none"}} >
                   
                    <li><a href='#'>Contact</a></li>
                     
                    <li><a href='#'>Help Center</a></li>
                     
                    <li><a href='#'>Downloads</a></li></ul>
                    

                </div>
                <div className='col'>
                   <b><p> Account </p></b> 
                   
                    <ul style={{listStyle:"none"}} >
                    <li><a href='#'>Login/Register</a></li>
                      
                    <li><a href='#'>OpenAccount</a></li>
                      
                    <li><a href='#'>Offers</a></li></ul>
                    
                </div>
                
            </div><div className='col mt-3'>
                <p className='text-muted'>
                    Finvista is a financial dashboard and portfolio-tracking platform created for educational and learning purposes. All tools, charts, and visualizations provided on this website are meant to help users understand budgeting, expense tracking, and basic financial planning concepts. Finvista does not provide any investment, trading, or financial advisory services. The project is designed as a demonstration of web development skills and user-interface design. Data displayed on this platform is only for representation and may not reflect real market values. By using this platform, users agree that the creators of Finvista are not responsible for any financial decisions based on the information provided.
                    </p>
                </div>
        </div></footer>
    );
}

export default Footer;