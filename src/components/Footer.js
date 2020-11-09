import React from 'react';
import Nav from './Nav';
import Logo from '../assets/textandlogo.svg';
import { Link } from "react-router-dom";
import Facebook from '../assets/facebook.png';
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer(props) {

  return (
    <footer className="normal-footer off-white">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 footer-logo-container">
            <Link to="/"><img className="logo" className="footer-logo" src={Logo} /></Link>
          </div>
          <div className="col-sm-6 my-auto">
            <div className="footer-links">
              <Link className="footer-link" to="/">Home</Link>
              <Link className="footer-link" to="/about">About</Link>
              <Link className="footer-link" to="/initiatives">Initiatives</Link>
              <Link className="footer-link" to="/team">Team</Link>
              <Link className="footer-link" to="/contact">Contact</Link>
            </div>
          </div>
          <div className="col-sm-3 my-auto">
            <div className="footer-social">
              <a className="social-icon" href="https://www.instagram.com/merlin.neurotech/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#d000ff" />
              </a>
              <a className="social-icon" href="https://www.facebook.com/merlinneurotech/" target="_blank">
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#4a86ff" opacity="1" />
              </a>
              <a className="social-icon" href="https://github.com/merlin-neurotech" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" color="#333333" opacity="1" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
export default Footer;
