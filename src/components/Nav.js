import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/logos/textandlogo.svg';
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState(state => ({
      toggled: !state.toggled
    }));
  }


  render() {
    return (
      <nav className={"navbar navbar-expand-lg fixed-top off-white " + (this.state.toggled ? "toggled" : "")}>
        <div className={(this.state.toggled ? "mobile-container" : "container")}>
          <div className={"interface container " + (this.state.toggled ? "toggled" : "")}>
            <Link className="navbar-brand" to="/"><img className="logo" src={Logo} /></Link>
            <button className="navbar-toggler" type="button" onClick={this.handleToggle}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>

            </button>
          </div>
          <div className={"menu " + (this.state.toggled ? "toggled" : "")} id="navbarSupportedContent">
            <ul className={"navbar-nav " + (this.state.toggled ? "" : "ml-auto")}>
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/initiatives">Initiatives</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
