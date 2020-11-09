import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import MainHeader from '../components/MainHeader';
import HomeHeader from '../components/HomeHeader';
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
import Person from '../assets/person.svg';
import Brain from '../assets/brain-fa.svg';
import bci from '../assets/bci-sample.png';

/*https://wiharper.com/brain-computer-interface-company-neuracle-raises-rmb-60-million/*/

function About() {
    return (
        <div>
            <Header title="Who Are We?" description="Learn more about what we get up to here at Merlin!" />
            <section className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 my-auto text-center">
                            <img className="section-img" src={bci} />
                        </div>
                        <div className="col-lg-6">
                            <h2>We are a student organization which develops and innovates using neurotech.</h2>
                            <p>Here at Merlin we undertake the design and implementation of BCI (brain-computer interface)  technologies. That just means we
                            make tech you can control with your brain!
                            </p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="feature-container">
                                        <img className="feature-icon" src={F1} />
                                        <h3>Software</h3>
                                        <p>We create reusable and versatile scripts to handle
                                        data acquisition from EEG signals, machine learning (ML) pipelines, and general statistical analysis.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="feature-container">
                                        <img className="feature-icon" src={F2} />
                                        <h3>Hardware</h3>
                                        <p>By integrating software to identify brain signals with the operation of peripheral devices, we are able
                                        to control technology with the brain.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features off-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Commercial equipment as hackable devices</h2>
                            <p>Wonderful consumer-grade electrode arrays open the doors to affordable and accessible BCI design - all it takes is acquiring their data in our backend.  Here at Merlin we put this simple idea into action. </p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="feature-container">
                                        <img className="feature-icon" src={Brain} />
                                        <h3><a href="https://choosemuse.com/" target="_blank">Muse</a></h3>
                                        <p>This 4-channel device handles data acquisition within the frontal lobe.  Muse headsets are perfect
                                        for non-invasive and modular BCI design.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="feature-container">
                                        <img className="feature-icon" src={Person} />
                                        <h3><a href="https://www.emotiv.com/" target="_blank">Emotiv</a></h3>
                                        <p>Using the 14-channel Emotiv Epoc, we can design BCI's which require more fine-tuned control.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 my-auto text-center">
                            <img className="section-img" src={MuseSetup} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='directives'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 text-center ">
                            <div className="directive-container mx-auto">
                                <img className="feature-icon" src={F1} />
                                <h3>Industry Affiliation</h3>
                                <p>We are a chapter of NeurotechX, a global not-for-profit
                                focussed on the development and education of neurotechnology.
                                We work with our partners to learn about industry standards,
                                current research, and to get access to some of the latest
                                technologies.
                    </p>
                            </div>
                        </div>
                        <div className="col-sm-4 text-center ">
                            <div className="directive-container mx-auto">
                                <img src={Education} />
                                <h3>Interdisciplinary</h3>
                                <p>Merlin is a club which thrives on different perspectives and
                                different backgrounds.  Our current team boasts educational backgrounds
                                ranging from Biology majors to Computer Science students.  This wide range
                                of backgrounds allows us to approach design challenges from a multitude of
                                angles.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4 text-center ">
                            <div className="directive-container mx-auto">
                                <img src={Projects} />
                                <h3>Projects</h3>
                                <p>Merlin is a team which creates BCI's.  Projects are at the source of
                                everything we do, and we're always looking to use emerging developments and
                                technologies in our works.  Special emphasis is placed by the team on the design
                                of projects which are widely accessible and socially responsible in their application.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="platform off-white">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Open source</h2>
                            <p>In the current digital age, open-source technologies are attractive due to the constant
                            innovations being made by passionate individuals.  By making our projects available to the public,
                            we're giving back to the wonderful communities who've helped make our projects possible.
                            </p>
                            <div className="row">
                                <div className="col-sm-1">
                                    <img src={Group} />
                                </div>
                                <div className="col-sm-5">
                                    <h3>Collaboration</h3>
                                    <p>We are enabling third parties access to our open-source platform
                        to create their version of “the best idea.”</p>
                                </div>
                                <div className="col-sm-1">
                                    <img src={School} />
                                </div>
                                <div className="col-sm-5">
                                    <h3>University supported</h3>
                                    <p>We are powered by broad intellectual diversity and have the support of our school.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 text-center my-auto">
                            <img className="platform-img" src={Logo} />

                        </div>
                    </div>
                </div>
            </section>


            <section className="upcoming-events">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="narrow-text">
                                <h3>Get involved</h3>
                                <h2>Upcoming Events</h2>
                                <p>We offer a series of events throughout the semester which are a great intro to the neurotech space!</p>
                                <a href="https://www.facebook.com/merlinneurotech/">More details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}
export default About;
