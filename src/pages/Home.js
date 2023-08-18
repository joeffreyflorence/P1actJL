import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";


const Home = () => {
  return (
   <>
    <div className='d-flex justify-content-center align-items-center' >
      <Row className='hero'>
        <Col className='d-flex justify-content-center align-items-center'>
          <Image src='/regine.jpg' style={{minWidth:250}} fluid/>
        </Col>
        <Col>
          <h1 className='display-1 fw-bold'>Regine Capitle</h1>
          <h3 className='display-5 fw-semibold'>3rd yr Web Developer</h3>
          <hr />
          <p>
          “Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.” – Thomas Edison
          </p>
          <div className='d-flex align-items-center gap-2'>
            <Link to='/work'>
              <Button className='btn-lg' variant='dark'>View Work</Button>
            </Link>
            <SocialLinks />
          </div>
        </Col>
      </Row>
    </div>
   </>
  );
};

export default Home;
