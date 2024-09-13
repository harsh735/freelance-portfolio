import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import TimeLine from "./TimeLine";
import TimeLineWork from "./TimeLineWork";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "40px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="blue">Me</strong>
            </h1>
          </Col>
          <Col md={5}  style={{ display:"flex", justifyContent:"center",alignItems:"center",width:"70%",height:"100%"}}>
            <Aboutcard />
          </Col>

          <Col md={5} style={{ marginTop: "30px", marginRight:"10rem" }}>
            <TimeLine />
          </Col>

          <Col md={5} style={{ marginTop: "30px",marginLeft:"2rem" }}>
            <TimeLineWork />
          </Col>
        </Row>
        <h1 style={{ marginTop: "150px", fontSize: "2.1em" }}>
          Professional <strong className="blue">Skillset </strong>
        </h1>

        <Techstack />

        <h1 style={{ marginTop: "40px", fontSize: "2.1em" }}>
          <strong className="blue">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
