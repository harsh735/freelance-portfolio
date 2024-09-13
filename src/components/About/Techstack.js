import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiLinux,
} from "react-icons/di";
import { SiMysql,} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus title="C++"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 title="HTML"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 title="CSS"/>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="Javascript"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js"/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git"/>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="MySQL"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux title="Linux"/>
      </Col>
    </Row>
  );
}

export default Techstack;
