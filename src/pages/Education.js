import React from 'react';
import {Accordion, Container} from 'react-bootstrap';


const Education = () => {
  return (
   <>
    <Container>
      <h2 className='display-1 fw-bold text-center'>My Education</h2>
      <p className='text-center'>These are my academic qualifications:</p>
      <hr/>
      <Container className='p-5'>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Bolosan Elementary School |  S.Y.2008-2015</Accordion.Header>
        <Accordion.Body>
        Achievements
        <br />
        •Outstanding Student
        <br />
        •With honor grade 1-6
        <br />
        •Athlete Student of Badminton,Volleyball, Table Tennis
        <br />
        •R1AA Badminton 2014-2015 

        

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>JJDVSTVSS | S.Y.2015-2021</Accordion.Header>
        <Accordion.Body>
        Achievements
        <br />
        •With honor gr 7-12
        <br />
        •Star Volleyball Player


         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>PHINMA Upang University Pangasinan | Current</Accordion.Header>
        <Accordion.Body>
        Achievements
        <br />
        •Winner CITE FEST Volleyball



        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Container>
    </Container>
   </>
  );
};

export default Education;
