import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectLink }) => {
  return (
    <Col size={20} sm={18} md={4}>
      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={`${title} thumbnail`} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
