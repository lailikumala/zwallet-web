import React from "react";
import './src/styleComponent.css'

const footerPage = () => {
    return (
      <>
          
        <div className="footer row">
          <div className="brand d-flex justify-content-start col-6">
            <p className="ml-1 text-white">2020 Zwallet. All right reserved</p>
          </div>
          <div className="contact d-flex justify-content-end col-6">
              <p className="mr-2">+62-5637-8882-9901</p>
              <p className="gmail">contact@zwallet.com</p> 
          </div>
        </div>
      
      </>
    );
  };
  
  export default footerPage;