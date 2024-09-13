import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
          <p>
             I'm a Computer Science & Engineering graduate  
             from Bharati Vidyapeeth's College of Engineering, New Delhi.
            I'm a passionate developer and have experience working on tech stack such as &nbsp;
            <b className="blue">React, Nodejs, Apollo Client for GraphQL, Material UI</b> and much more!
            
            <br></br><br></br> I love the ideation phase of any project. I have a natural inclination for design, with a preference for minimalism, 
            which I <i>(try)</i> to apply to the user interfaces of my projects and posters created for various events I participate in.

            <br></br><br></br> I get my daily dose of adrenaline rush by watching a bunch of men kick a ball for around 90 minutes. 
            If not that, then its a bunch of men hitting a (smaller) ball with a bat.
            <br></br><br></br><br></br> Below is my academic and work experience ~
          </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
