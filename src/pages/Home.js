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
          <Image src='/JEPS1.jpg' className='' width={350} roundedCircle/>
        </Col>
        <Col>
          <h1 className='display-1 fw-bold'>JOEFFREY FLORENCE LAMBINO</h1>
          <h3 className='display-5 fw-semibold'>BSIT Web Developer</h3>
          <hr />
          <p>
          Life is short do what you love so that you don`t have regret.
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
