import { React, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import AOS from 'aos';
import 'aos/dist/aos.css';



function Home() {


  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
              <Col md={10} className="home-header">
                  <h1 data-aos="fade-right" style={{ paddingBottom: 15 }} className="heading">
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </h1>

                  <h1 className="heading-name" data-aos="fade-right">
                    Get your business from 0 to 100 with
                    <strong className="main-name"> interactive, user friendly websites</strong>
                  </h1>
                 
                

                <div data-aos="fade-right" style={{ paddingLeft: 105, paddingTop: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
            
        
              {/* <Col style={{ paddingBottom: 55 }}>
                <div className="main-img-div"> 
                  <img
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    src={homeLogo}
                    alt="me"
                    className="main-img"
                  />
                </div>
              </Col> */}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
