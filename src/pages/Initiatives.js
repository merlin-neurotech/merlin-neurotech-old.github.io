import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import edu from '../assets/edu.jpg';
//import img_fluid from "../styles/bootstrap/_images.scss";
import F1 from '../assets/glyphs.png';
import F2 from '../assets/f2.png';
import Stock1 from '../assets/stock1.jpg';
import yannick from '../assets/yannick.jpg';
import booth2 from '../assets/booth2.jpg';
import neurol from '../assets/neurol.png';
import hack from '../assets/hackprinceton.jpeg';
import Education from '../assets/education.png';
import Projects from '../assets/projects.png';
import Group from '../assets/group.svg';
import Paper from '../assets/paper.svg';
import Stock2 from '../assets/stock2.jpg';

function Initiatives() {
  return (
    <div>
      <Header title="Our Initiatives" alternateLink={true}
        description="A student team looking to integrate emerging neurotechnology developments in practical BCI (brain-computer interface) applications." />
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 my-auto text-center">
              <h2> Current Focuses</h2>
              <p>
                As an emerging student team dedicated to the design and implementation of neurotechnology, our current efforts are focused towards creating reliable and resuable code to facilitate
                BCI creation, and using this framework, to create interesting BCI projects.  Our goal is to make projects which transcend their immediate novelty towards having important social impacts
                and which promote the theme of accessibility in design.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6">
                  <div className="feature-container">
                    <img className="feature-icon" src={F1} />
                    <h3>Infastructure</h3>
                    <p>Software repositories are being created as a foundation for
                    future BCI development.  These repositories address
                    data handling, feature engineering, classification, and general time-series utility.
                            </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-container">
                    <img className="feature-icon" src={F2} />
                    <h3>Projects</h3>
                    <p>
                      Our last project, "Alpha-light", used a simple alpha-wave trigger to control the operation
                      of a Philips Hue light.  This year we plan on tackling more technically demanding applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-auto text-center">
              <img className="section-img" src={edu} />
            </div>
          </div>
        </div>
      </section>

      <section className="features off-white">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 my-auto text-center">
              <h2>Research-Driven Design</h2>
              <p>
                In the field of neurotechnology, it is essential to be familiar with current developments and historically significant results.
                Proper understanding of neurological phenomena is also an essential competence.  As a primer for this season, team members are
                expected to develop sufficient understandings of these concepts through self-motivated research.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 my-auto text-center">
              <img className="section-img" src={Stock2} />
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6">
                  <div className="feature-container">
                    <img className="feature-icon" src={Education} />
                    <h3>Consulting</h3>
                    <p>For the 2020-2021 season, we've reached out to the Department of Biomedical and Molecular Sciences at
                    Queen's University for advice and counselling on the BCI development process.
                              </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-container">
                    <img className="feature-icon" src={Projects} />
                    <h3>Literature</h3>
                    <p>A primary focus for the 2020-2021 season is to replicate results presented in famous neurotech papers.
                    Particular interest is placed on the study of VEP modulations.
                              </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 my-auto text-center">
              <h2>Development</h2>
              <p>
                <a href="https://pypi.org/project/neurol/" target="_blank">Neurol</a> is a project spear-headed by backend lead
                Awni Altabaa which addresses device connection, data streaming, ML pipeline creation, and BCI development all in one.
                Throughout the upcoming season Merlin intends to add robustness and more functionality to this essential package, including
                more device options and statistical analysis tools.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6">
                  <div className="feature-container">
                    <img className="feature-icon" src={Paper} />
                    <h3>Documentation</h3>
                    <p>Neurol documentation will be updated to improve the readability of important
                    scripts.  More descriptive doc strings will allow for immediate understanding of
                    a function's operation and merit.
                            </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-container">
                    <img className="feature-icon" src={F2} />
                    <h3>Utility</h3>
                    <p>
                      Statistical methods for technical analysis will be added to the pre-existing BCI utility
                      scripts.  Data visualization functions will also be fleshed out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-auto text-center">
              <img className="section-img" src={neurol} />
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  )
}
export default Initiatives;

