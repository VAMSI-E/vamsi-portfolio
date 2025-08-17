import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/vamsi-img-3.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import shopifyCV from '../assets/shopify.pdf';

export const About = () => {
  return (
    <section className="about-me-section About-me-container" id="home">
      <Container>
        {/* Section Title */}
        <div className="text-center">
          <h2 style={{ fontSize: "35px", fontWeight: 700 , paddingTop:"15px", paddingBottom:"8px" }}>
            <span style={{ color: "#fff" }}>About </span>
            <span style={{ color: "#00cfff", textShadow: "0 0 8px #00cfff" }}>me</span>
          </h2>
        </div>

        {/* Content Row */}
        <Row className="align-items-center">
          {/* Profile Image */}
          <Col xs={12} md={5} lg={4} className="text-center mb-4 mb-md-0 d-none d-md-block">
            <img
              src={headerImg}
              alt="Header Img"
              className="img-fluid rounded-circle border border-4 border-info shadow"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </Col>

          {/* Text & Buttons */}
          <Col xs={12} md={7} lg={8}>
          
                <div>
                  <h3 style={{ fontWeight: "600" }}>Shopify Developer</h3>
                  <p className="text-justify-center">
                    I’m a passionate Shopify developer with hands-on experience in building and customizing eCommerce websites. I enjoy working with real-world web applications and learning new tools. I'm confident, curious, and always aiming to improve my skills. I'm excited to join a team where I can contribute to impactful projects.
                  </p>

                  {/* Buttons Side by Side */}
                  <div className="d-flex flex-wrap gap-3 mt-3">
                    <a href="/vamsi-portfolio#connect">
                      <button
                        className="btn px-3 py-2 text-white"
                        style={{ backgroundColor: '#0dcaf0', fontWeight: '600', border: 'none' }}
                      >
                        Let’s Connect <ArrowRightCircle size={20} className="ms-2" />
                      </button>
                    </a>

                    <a
                      href={shopifyCV}
                      download
                      className="btn d-inline-flex align-items-center px-3 py-2"
                      style={{
                        backgroundColor: '#e84251',
                        border: '1px solid #e84251',
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: '16px',
                        borderRadius: '5px',
                        textDecoration: 'none'
                      }}
                    >
                      <i className="bi bi-download me-2"></i>
                      Download CV
                      <span className="ms-2"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path></svg></span>
                    </a>
                  </div>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
