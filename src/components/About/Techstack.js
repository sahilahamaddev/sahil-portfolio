import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";

import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import HaskellIcon from "../../Assets/TechIcons/Haskell.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";

const techData = [
  { img: C, name: "C++" },
  { img: Javascript, name: "JavaScript" },
  { img: Typescript, name: "TypeScript" },
  { img: Go, name: "Go" },
  { img: Node, name: "Node.js" },
  { img: ReactIcon, name: "React.js" },
  { icon: <SiSolidity size={40} />, name: "Solidity" },
  { img: Mongo, name: "MongoDB" },
  { img: Redux, name: "Redux" },
  { icon: <SiNextdotjs size={40} />, name: "Next.js" },
  { img: Git, name: "Git" },
  { img: Firebase, name: "Firebase" },
  { img: Redis, name: "Redis" },
  { img: Docker, name: "Docker" },
  { img: Kubernates, name: "Kubernetes" },
  { img: SQL, name: "PostgreSQL" },
  { img: Python, name: "Python" },
  { img: Java, name: "Java" },
  { img: HaskellIcon, name: "Haskell" },
  { img: Tailwind, name: "Tailwind CSS" },
  { img: MUI, name: "Material UI" },
  { img: Postman, name: "Postman" },
  { icon: <FaRust size={40} />, name: "Rust" },
  { img: AWS, name: "AWS" },
  { img: Kafka, name: "Kafka" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "80px" }}>
      {techData.map((tech, index) => (
        <Col xs={6} md={3} lg={2} key={index} className="tech-col">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.1}
              transitionSpeed={1500}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              className="tech-card"
            >
              <div className="tech-inner">
                {tech.img ? (
                  <img src={tech.img} alt={tech.name} />
                ) : (
                  tech.icon
                )}
                <p>{tech.name}</p>
              </div>
            </Tilt>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;