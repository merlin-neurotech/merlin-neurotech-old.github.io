import React, { Suspense, ErrorBoundary } from 'react';
import Nav from './Nav';
import Footer from './Footer'
import BrainImg from '../assets/brain-min.PNG';
import { Link } from "react-router-dom";



function HomeHeader(props) {
  return (
    <header className="home-header off-white">
      <Nav />
      <div className="container my-auto nav-offset">
        <div className="row">
          <div className="col-sm-6 my-auto">
            <div className="intro-heading">
              <h3 className="tagline">Queen's University</h3>
              <h1 className="heading">Merlin Neurotech</h1>
              <p>We are a student organization run out of Queen's University
                        which develop and innovate using Neurotechnology! </p>
              <Link to="/initiatives">Learn about our initiatives</Link>
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
export default HomeHeader;
