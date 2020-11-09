import React from 'react';
import logo from './logo.svg';
import './styles/index.scss';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Initiatives from './pages/Initiatives';
import Contact from './pages/Contact';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/initiatives">
            <Initiatives />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
