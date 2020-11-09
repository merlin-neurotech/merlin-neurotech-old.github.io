import React from 'react';
import MainHeader from '../components/MainHeader';
import HomeHeader from '../components/HomeHeader';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import { Canvas, useFrame } from 'react-three-fiber';
import Logo from '../assets/Logo.svg';
import F1 from '../assets/glyphs.png';
import F2 from '../assets/f2.png';
import Stock1 from '../assets/stock1.jpg';
import Monetization from '../assets/monetization.svg';
import Running from '../assets/running.svg';
import MuseSetup from '../assets/Muse sponsor.jpg';
import Cns from '../assets/logos/cns.png';
import Interaxon from '../assets/logos/interaxon.png';
import Ntx from '../assets/logos/ntx.png';
import Openbci from '../assets/logos/openbci.png';
import ams from '../assets/logos/ams.png';
import Education from '../assets/education.png';
import Projects from '../assets/projects.png';
import School from '../assets/school.svg';
import Group from '../assets/group.svg';


function Home() {
  return (
    <div style={{ overflow: 'scroll' }}>
      <HomeHeader />
      <section className="partner-logos">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <a href="http://neuroscience.queensu.ca/" target="_blank">
                <img className="partner-logo" src={Cns} />
              </a>
            </div>
            <div className="col-sm-4">
              <a href="https://choosemuse.com/" target="_blank">
                <img className="partner-logo" src={Interaxon} />
              </a>
            </div>
            <div className="col-sm-4">
              <a href="https://neurotechx.com/" target="_blank">
                <img className="partner-logo" src={Ntx} />
              </a>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-sm-1"></div>
            <div className="col-sm-3">
              <a href="https://openbci.com/" target="_blank">
                <img className="partner-logo" src={Openbci} />
              </a>
            </div>
            <div className="col-sm-4">
              <a href="https://myams.org/portfolio-items/merlin-neurotech/" target="_blank">
                <img className="partner-logo" src={ams} />
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />

    </div >
  )
}
export default Home;
