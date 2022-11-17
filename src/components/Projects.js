import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import youtube from "../assets/img/youtube.png"
import flipkart from"../assets/img/flipkartpage.png";
import zomato from "../assets/img/zomato.png";
import guessnumber from "../assets/img/gussnumber.png";
import amazon from "../assets/img/amazon.png";
import tourism from "../assets/img/tourism.png";
import google from "../assets/img/googlesearch.png";
import flatbook from "../assets/img/floatbook.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "youtube ",
      description: "Tool for Quick calculation",
      imgUrl: youtube,
      linkUrl:"https://youtubeplaylist.ccbp.tech"
    },
    {
      title: "Flipkart",
      description: "Make your TechLife Easy",
      imgUrl: flipkart,
      linkUrl:"https://flipkartpage.ccbp.tech"
    },
    {
      title: "zomato",
      description: "zomato",
      imgUrl: zomato,
      linkUrl:"https://zomatopage.ccbp.tech"
    },
    {
      title: "Guess the Number ",
      description: "Number guessing game",
      imgUrl: amazon,
      linkUrl:"https://amazonpage.ccbp.tech",
    },
    
    {
      title: "Guess the Number ",
      description: "Number guessing game",
      imgUrl: guessnumber,
      linkUrl:"https://solvethepuzzle.ccbp.tech",
    },
   
    {
      title: "Guess the Number ",
      description: "Number guessing game",
      imgUrl: google,
      linkUrl:"https://pagesearch.ccbp.tech"
    },
    {
      title: "Guess the Number ",
      description: "Number guessing game",
      imgUrl: tourism,
      linkUrl:"https://vacationtour.ccbp.tech"
    },
    {
      title: "Guess the Number ",
      description: "Number guessing game",
      imgUrl: flatbook,
      linkUrl:"https://snapdealbooking.ccbp.tech"
    }
    
    
    

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">            
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt={"background"}></img>
    </section>
  )
}
