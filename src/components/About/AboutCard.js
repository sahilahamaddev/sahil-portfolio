import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
I’m <b>Sahil Ahamad</b>, an <b>MCA student</b> who is deeply
passionate about building <b>impact-driven web applications</b>.
<br /><br />
I specialize in <b>React.js</b> and enjoy creating interfaces
that are <b>visually appealing, highly interactive, and user-focused</b>.
<br /><br />
I have been selected as a <b>Junior Software Developer</b>
through <b>campus placement at Mobillite</b>, where I aim to
grow as a professional developer by solving real-world problems
using modern technologies.
</p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sahil Ahamad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
