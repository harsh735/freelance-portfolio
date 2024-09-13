import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (

    
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description" >
            
            <h1 style={{ fontSize: "2.6em" }}>
              About <b className="blue">Us</b>
            </h1>

            <p className="home-about-body">
             We are Software Developers with a passion for building and shipping products. 
              <br />We specialize in <b className="blue">Web Development, Website design and shipping products.</b>
              <br />
              Look at our catalogue of work in the <a href="/project">projects</a> section.
              <br />
              <br />
            </p>

          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}
export default Home2;
