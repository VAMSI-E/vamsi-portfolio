import { Col } from "react-bootstrap";
import "./projectcard.css"

export const ProjectCard = ({ title, description, imgUrl,linkUrl }) => {
  console.log(imgUrl);
  return (
    
    <Col size={12} sm={6} md={4}>
      
      <a href={linkUrl}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project Template" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>

    </Col>
  )
}
