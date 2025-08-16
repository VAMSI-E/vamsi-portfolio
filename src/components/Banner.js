import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/vamsi-img-two.jpg";
import 'animate.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Shopify Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container style={{ marginTop: "-70px" }}>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                <div>
                  <h3 className="intro-text">Hello, it's me...</h3>
                  <h2 className="name-text">Vamsi Krishna</h2>
                  <h3 className="title-text">
                    and I'm a  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer"]' height=""><span className="wrap highlight">{text}</span></span>
                  </h3>
                </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="text-center mobile-margins">
            <img src={headerImg} alt="Header Img" 
            className="img-fluid rounded-circle border border-4 border-info shadow"
            style={{ width: "200px", height: "200px", objectFit: "inherit" }}
            />
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
