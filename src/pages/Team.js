import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import fullteam from '../assets/headshots/team.jpg';
import lukas from '../assets/headshots/lukas.jpg';
import parsa from '../assets/headshots/parsa.jpg';
import cam from '../assets/headshots/cam.jpg';
import awni from '../assets/headshots/awni.jpg';
import nate from '../assets/headshots/nate.jpg';
import varnikaa from '../assets/headshots/varnikaa.jpg';


function Team() {
  return (
    <div>
      <Header title="Our Team" description="Get to know our 2020-2021 season team!" />

      <section className="team-members">
        <div className="container">
          <div className="team-heading-container"><h2>Admistrative</h2></div>
          <div className="horizontal-line"></div>

          <div className="row align-items-center">
            <div className="col-sm-4">
              <div className="team-member">
                <a href="https://www.linkedin.com/in/lukas-bauer-j/" target="_blnank">
                  <img src={lukas} className="img-fluid" />
                </a>
                <h3>Lukas Bauer</h3>
                <p>Captain</p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-member">
                <a href="https://www.linkedin.com/in/cameron-mackay-/" target="_blnank">
                  <img src={cam} className="img-fluid" />
                </a>
                <h3>Cam McKay</h3>
                <p>Backend Lead</p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-member">
                <a href="https://www.linkedin.com/in/awni-altabaa/" target="_blank">
                  <img src={awni} className="img-fluid" />
                </a>
                <h3>Awni Altabaa</h3>
                <p>Data Science</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="team-members">
        <div className="container">
          <div className="team-heading-container"><h2>Backend</h2></div>
          <div className="horizontal-line"></div>
          <div className="row align-items-center">

            <div className="col-sm-4">
              <div className="team-member">
                <a href="https://www.linkedin.com/in/varnikaagupta/" target="_blank"><img src={varnikaa} className="img-fluid" /></a>
                <h3>Varnikaa Gupta</h3>
                <p>Operations</p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-member">
                <a href="https://www.linkedin.com/in/nate-nethercott-99b546176/" target="_blank"><img src={nate} className="img-fluid" /></a>
                <h3>Nate Nethercott</h3>
                <p>Data Science</p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-member">
                <a href="https://ca.linkedin.com/in/parsa-abdi/" target="_blank"><img src={parsa} className="img-fluid" /></a>
                <h3>Parsa Abdi</h3>
                <p>Marketing</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="group-photo">
        <div className="container">
          <img src={fullteam} className="img-fluid" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
export default Team;
