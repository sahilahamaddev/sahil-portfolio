import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Food delivery website for local vendors"
              description="A Food delivery website for local vendors built with HTML, CSS, and JavaScript for those vendors which are not able to onboard on online ."
              ghLink="https://github.com/sahilahamaddev/Quick-food-for-local-vendor"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Canteen management system"
              description="Canteen management system built with C++ for managing food orders and inventory."
              ghLink="https://github.com/sahilahamaddev/canteen-management-system"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          

        
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
