import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatarpatar from "../../Assets/Projects/chatar-patar.png";
import wiehack from "../../Assets/Projects/wiehack.png";
import colour from "../../Assets/Projects/colour.png";
import atlansql from "../../Assets/Projects/atlansql.png";
import meme from "../../Assets/Projects/meme.png";
import reversetree from "../../Assets/Projects/reversetree.png";
import zoomclone from "../../Assets/Projects/zoom-clone.png";
import saas from "../../Assets/Projects/saas.png";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h3 className="project-heading">
          Featured <strong className="blue">Projects </strong>
        </h3>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={reversetree}
              isBlog={false}
              title="ReverseTree"
              description="An end to end website for a video production company. Developed the landing page as well as their custom blog"
              demoLink="https://reversetreeproductions.com/"
            />
          </Col>


          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={chatarpatar}
              isBlog={false}
              title="Chatar-Patar"
              description="A real-time chat application using MERN stack, facilitating seamless communication among registered users. Built using React,ChakraUI,MongoDB,SocketIO"
              ghLink="https://github.com/harsh735/chatar-patar"
              demoLink="https://chatar-patar.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wiehack}
              isBlog={false}
              title="WIEHack3.0"
              description="A responsive website for a college hackathon, attracting 1000+ participants and garnering 16,000+ impressionswithin two months"
              ghLink="https://github.com/harsh735/wiehack3.0-landing-main"
              demoLink="https://inspiring-basbousa-0c0da2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zoomclone}
              isBlog={false}
              title="Zoom-Clone"
              description="A complete end to end Zoom clone that allows you to join and create meetings and send invites."
              demoLink="https://flutter-zoom.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atlansql}
              isBlog={false}
              title="AtlanSQL"
              description="Built a React app that fetches tables via an API based on the query provided in the search box. Implemented lazy loading and concept of react hooks to use."
              ghLink="https://github.com/harsh735/atlan-sql-editor"
              demoLink="https://atlan-sql-editor-ten.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saas}
              isBlog={false}
              title="Finance SaaS"
              description="Wireframe of a finance/data analytics SaaS platform website developed using React and other libraries."
              demoLink="https://finance-saas-template.netlify.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
