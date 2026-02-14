import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Certificates() {

  const certificates = [
    {
      title: "React Development Certificate",
      description: "Completed advanced React.js development course with hands-on projects.",
      img: process.env.PUBLIC_URL + "/React.jpg",
    },
    {
      title: "AI Workshop Certificate",
      description: "participated in AI workshop.",
      img: process.env.PUBLIC_URL + "/cert1.jpg",
    },
    {
      title: "Microsoft proficiency",
      description: "Achieved proficiency in Microsoft Office Suite.",
      img: process.env.PUBLIC_URL + "/cert.jpg",
    },
    {
      title: "Hackathon Participation Certificate",
      description: "Participated in and completed a hackathon event.",
      img: process.env.PUBLIC_URL + "/hack.jpg",
    },
    {
      title: "Aptitude Test Certificate",
      description: "Achieved high score in aptitude test.",
      img: process.env.PUBLIC_URL + "/apt.jpg",
    },
    {
      title: "Python with flask",
      description: "Achieved proficiency in Python and Flask framework.",
      img: process.env.PUBLIC_URL + "/python.jpg",
    },
  ];

  return (
    <Container fluid style={{ marginTop: "120px" }}>
      <Container>
        <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
           <strong className="purple"> My Certificates</strong>
        </h1>

        <Row>
          {certificates.map((cert, index) => (
            <Col md={4} key={index} style={{ marginBottom: "30px" }}>
              <Card className="shadow-lg border-0">
                <Card.Img variant="top" src={cert.img} />
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Text>{cert.description}</Card.Text>
                  <Button variant="primary" href={cert.img} target="_blank">
                    View Certificate
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;