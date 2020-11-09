import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Facebook from '../assets/facebook.png';
function Contact() {
  return (
    <div>
      <Header title="Get Involved" description="Looking to get in touch with the team?" />
      <section className="contact-form-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="narrow-text">
                <p>Interested in getting involved, learning more, or sponsoring us? Reach out to us on Facebook or <a href="mailto:mnc@clubs.queensu.ca" target="_blank">send us an email!</a></p>
                <a className="contact-icon" href="https://www.facebook.com/merlinneurotech/" target="_blank">
                  <FontAwesomeIcon icon={faFacebookSquare} size="3x" color="#578fff" opacity="1" />
                </a>
                <a className="contact-icon" href="mailto:mnc@clubs.queensu.ca" target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} size="3x" color="#ff7357" opacity="1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default Contact;
