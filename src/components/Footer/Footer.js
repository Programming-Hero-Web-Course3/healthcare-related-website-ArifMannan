import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
  import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
                            <div className="footer-menu-container">
                                <h3>Pages</h3>
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
                        </div>
            <div className="col-md-6 padding-middle">
              <div className="left-container text-start">
                <h1>OraCare</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                  <div className="icon">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                  <FontAwesomeIcon icon={faYoutube} />
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    
                  </small>
                </p>

                <p className="mt-5">
                  <small> © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div>
                    <h5>+8801277992694</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default Footer;