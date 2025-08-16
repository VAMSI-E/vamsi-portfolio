import {
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiRedux,
} from "react-icons/si";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import "../components/Skills.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  const categories = [
    {
      title: "Development",
      skills: [
        { icon: <FaHtml5 size={50} color="#E44D26" />, name: "HTML" },
        { icon: <FaCss3Alt size={50} color="#1572B6" />, name: "CSS" },
        { icon: <FaJs size={50} color="#F7DF1E" />, name: "JavaScript" },
        { icon: <FaReact size={50} color="#61DAFB" />, name: "ReactJs" },
        { icon: <SiRedux size={50} color="#764ABC" />, name: "Redux" },
        { icon: <FaDatabase size={50} color="#4479A1" />, name: "MySQL" },
        { icon: <FaNodeJs size={50} color="#339933" />, name: "Node.js" },
      ],
    }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container-card About-me-container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              {categories.map((category, index) => (
                <div key={index} className="category">
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={2500}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    keyBoardControl={true}
                    autoPlay={true}
                    className="owl-carousel owl-theme skill-slider"
                  >
                    {category.skills.map((skill, idx) => (
                      <div className="item" key={idx}>
                        <div className="skill-icon">{skill.icon}</div>
                        <h5>{skill.name}</h5>
                      </div>
                    ))}
                  </Carousel>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="colorSharp"
      />
    </section>
  );
};