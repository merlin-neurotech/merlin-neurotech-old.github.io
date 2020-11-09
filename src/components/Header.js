import React from 'react';
import Nav from './Nav';
import BrainImg from '../assets/brain-min.PNG';
import { Link } from "react-router-dom";

function Header(props) {

  return (
    <header className="normal-header off-white">
      <Nav />
      <div className="container nav-offset">
        <div className="row">
          <div className="col-sm-6 my-auto">
            <div className="intro-heading">
              <h3 className="tagline">Merlin Neurotech</h3>
              <h1 className="heading">{props.title}</h1>
              <p>{props.description}</p>
              {/*props.alternateLink ? <Link to="/contact">Contact Us</Link> : <Link to="/initiatives">Learn about our initiatives</Link>*/}
            </div>
          </div>
          <div className="col-sm-6 my-auto text-center">
            <img className="brain-img" src={BrainImg} />

          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
