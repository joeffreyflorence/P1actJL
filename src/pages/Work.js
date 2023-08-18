import React from 'react';
import { Carousel, Image, Container,  Row, Col } from 'react-bootstrap';


const Work = () => {
  return (
   <>
    <Container>
      <Row>
      <Col>
        <h2 className='display-1 fw-bold'>
           My Work
        </h2>
        <p>Here are the projects we`ve/i`ve worked on:</p>
        <ul>
          <li>
            <h4>WEBSITE</h4>
            <p>Tech Stack:HTML, CSS, JS</p>
          </li>
          <li>
            <h4>Portfolio</h4>
            <p>Tech Stack: HTML, CSS, JS, NodeJs</p>
          </li>
          <li>
            <h4>Web project</h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
        </ul>
      </Col>
      <Col>
      <div style={{minWidth:280}}>
      <Carousel>
        <Carousel.Item>
           <div style={{maxHeight:300}}>
            <Image src="/PROJECT.png" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>Website</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{maxHeight:300}}>
            <Image src="/portfolio.png" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>Portfolio</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <div style={{maxHeight:300}}>
            <Image src="/P3.png" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>Web Project</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </Col>
    </Row>
    </Container>
   </>
  );
};

export default Work;
