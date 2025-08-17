import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import fablestreet from "../assets/img/fabelstreet.png";
import slurfarm from "../assets/img/slurrpfarm.png";
import trident from "../assets/img/Trident.png";
import borosil from "../assets/img/borosil.png";
import marchjewellery from "../assets/img/marchjewellery.png";
import mcaffine from "../assets/img/mcaffine.png";
import Animigo from "../assets/img/Animigo.png";
import nashermiles from "../assets/img/Nashermiles.png";
import weightworld from "../assets/img/weightworld.png";
import superkicks from "../assets/img/Superkicks.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const Shopifyprojects = [
    {
      title: "Nashermiles",
      description: "Nashermiles offers quality-tested lifestyle products with free pan-India shipping and hassle-free returns.",
      imgUrl: nashermiles,
      linkUrl:"https://nashermiles.com/"
    },
    {
      title: "Animigo",
      description: "Animigo provides natural, cruelty-free pet supplements and care products for dogs and cats.",
      imgUrl: Animigo,
      linkUrl:"https://www.animigo.fr/"
    },
    {
      title: "Weightworld",
      description: "WeightWorld delivers natural, non-GMO wellness supplements from a trusted UK brand established in 2006.",
      imgUrl: weightworld,
      linkUrl:"https://www.weightworld.uk/"
    },
    {
      title: "Slurrpfarm ",
      description: "A food brand offering healthy, organic, and nutritious snacks and meals for kids and families.",
      imgUrl: slurfarm,
      linkUrl:"https://slurrpfarm.com/"
    },
    {
      title: "Trident",
      description: "Offers a wide range of high-quality home textiles like towels, bed linens, and bathrobes.",
      imgUrl: trident,
      linkUrl:"https://mytrident.com/"
    },
    {
      title: "Superkicks",
      description: " Specializes in trendy footwear, apparel, and accessories for young fashion enthusiasts.",
      imgUrl: superkicks,
      linkUrl:"https://www.superkicks.in/"
    },
    {
      title: "Fablestreet",
      description: "Women's clothing brand known for stylish, workwear-focused designs with a personalized touch.",
      imgUrl: fablestreet,
      linkUrl:"https://www.fablestreet.com/",
    },
    
    {
      title: "Mcaffeine",
      description: "Offers skincare and haircare products infused with coffee to provide rejuvenating and refreshing experiences.",
      imgUrl: mcaffine,
      linkUrl:"https://www.mcaffeine.com/",
    },
   
    {
      title: "marchjewellery",
      description: "A luxury jewelry brand offering exquisite handcrafted designs and timeless pieces.",
      imgUrl: marchjewellery,
      linkUrl:"https://marchjewellery.com/"
    },
    {
      title: "Borosil",
      description: "Known for durable glassware, kitchen products, and home essentials that combine quality and innovation.",
      imgUrl: borosil,
      linkUrl:"https://myborosil.com/"
    }
  ];

  return (
    
    <section className="project vamsi-krishna" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": "skill"}>

              <div className="text-center">
                  <h2 style={{ fontSize: "35px", fontWeight: 700 }}>
                    <span style={{ color: "#fff" }}>Shopify </span>
                    <span style={{ color: "#00cfff", textShadow: "0 0 8px #00cfff" }}>Projects</span>
                  </h2>
                </div>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">            
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Shopifyprojects.map((project, index) => {
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
