import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setDrawerOpen(false); // close drawer when a link is clicked
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <div className="nav-bar-container-card">
            <h1
              className="d-none d-lg-block text-center fw-bold"
              style={{ fontSize: "2rem" }}
            >
              <span style={{ color: "#fff" }}>Port</span>
              <span style={{ color: "#00cfff", textShadow: "0 0 8px #00cfff" }}>
                folio
              </span>
            </h1>

            {/* Toggle opens drawer */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setDrawerOpen(true)}
            >
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <span className="navbar-text navbar-mobile">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/-vamsi/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="mailto:vamsi0263@gmail.com">
                  <img src={navIcon2} alt="mail" />
                </a>
                <a href="tel:9108848655">
                  <img src={navIcon3} alt="phone" />
                </a>
              </div>
              <HashLink to="#connect">
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

          {/* Desktop Navbar collapse remains same */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-none d-md-flex">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                <span className="link-text">Home</span>
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                <span className="link-text">Skills</span>
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "project" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("project")}
              >
                <span className="link-text">Projects</span>
              </Nav.Link>
            </Nav>

            <span className="navbar-text navbar-desktop">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/-vamsi/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="mailto:vamsi0263@gmail.com">
                  <img src={navIcon2} alt="mail" />
                </a>
                <a href="tel:9108848655">
                  <img src={navIcon3} alt="phone" />
                </a>
              </div>
              <HashLink to="#connect">
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

      {/* Drawer Popup */}
      <div className={`drawer ${drawerOpen ? "open" : ""}`}>
        <button className="drawer-close" onClick={() => setDrawerOpen(false)}>
          ✕
        </button>
        <Nav className="flex-column p-3">
          <Nav.Link
            href="#home"
            className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("home")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#skills"
            className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("skills")}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            href="#project"
            className={activeLink === "project" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("project")}
          >
            Projects
          </Nav.Link>
        </Nav>
      </div>
    </Router>
  );
};
