import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <div className="nav-bar-container-card">
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <span className="navbar-text navbar-mobile">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/-vamsi/"><img src={navIcon1} alt="" /></a>
                <a href="mailto:vamsi0263@gmail.com"><img src={navIcon2} alt="mail" /></a>
                <a href="tel:9108848655"><img src={navIcon3} alt="phone" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="button-animation">
                  Contact
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </HashLink>
            </span>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text navbar-desktop">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/-vamsi/"><img src={navIcon1} alt="" /></a>
                <a href="mailto:vamsi0263@gmail.com"><img src={navIcon2} alt="mail" /></a>
                <a href="tel:9108848655"><img src={navIcon3} alt="phone" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="button-animation">
                  Contact
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
