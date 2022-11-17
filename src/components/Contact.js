import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {


  return (
  <section className="contact" id="connect">
      <Container >
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Thanks for Visiting my Portfolio</h2>
                <form >
                  <Row>
                    
                
                    <Row size={20} sm={6} className="px-1">
                      <input type="email" value={"Email: vamsi0263@gmail.com"} placeholder="" disabled/>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <input type="tel" value={"Phone No: +91-9182351893"} placeholder="" disabled/>
                    </Row>
                    <Row size={10} className="px-1">
                      <textarea rows="3" value={`If You are interested in my Profile.Please Feel free to contact me. See You Soon...` }  data-emojiable="true" disabled >hj</textarea>
                    </Row>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
