import React, { useState } from 'react';
import { Form, Row, Col, Button,Container, ButtonGroup } from 'react-bootstrap';
import FilterComponent from './filter';
import company1 from '../company1.jpg';
import company2 from '../company2.jpg';
import company3 from '../company3.jpg';
import company4 from '../company4.jpg';
import location from '../location.jpg.png';
import building from '../building.jpg.png';
import { Link } from "react-router-dom"; 
function CompanieComponent() {
  const [companie, setCompanie] = useState(); 
  return (
    <div  >
      <div className="b1">
        <h3>Companies</h3>
        <p style={{ fontSize: '13px' }}>Learn about what it's like to work at companies</p>

        <Row>
          <Col>
            <Form.Group>
              <Form.Control type="text" placeholder="search all Companies" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control type="text" placeholder="search company location" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Button variant="primary">search</Button>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Button onClick={() => setCompanie('filter')}>Filter by technologies?</Button>
            </Form.Group>
            <main>
        {companie === 'filter' && <FilterComponent />}
      </main>
          </Col>
        </Row><br>
        </br>
         <p>75 Companies</p>
         <hr></hr>
     
         <Row>
          <Col sm={2}>
        
            <img src= {company1} alt="Logo" />
            
          </Col>
          <Col sm={10}>
          <Link to="/sartorius"   style={{ textDecoration: 'none' }}>
          <p> <span style={{color:'blue'}}>Sartorius </span></p>
       
          <img src ={location} alt="Logo"   style={{height:'15px'}}  />
          <p  style={{fontSize:"13px"}}>Madrid; Royston; Göttingen 
            <img src={building} alt="Logo"  style={{height:"15px"}}/>   Biotechnology, Life Sciences </p>
          <p style={{fontSize:"13px"}}>As a growing global life science company and a dynamic industry leader, Sartorius is the go-to place for ambitious people who want to move things forward:
          <br></br>we offer the chance for you to grow with us and to become part of the solution in the fight against diseases that are yet incurable or untreatable. To enable new...</p>
        </Link>
          <ButtonGroup>
          <Button variant='secondary' size="sm">amazon-web-services</Button>
          <Button variant='secondary' size="sm"> C</Button>
          <Button variant='secondary' size="sm">C#</Button>
         
          
          </ButtonGroup>
        
             <p  style={{color:'red'}}>New content</p>
            
          </Col>
         
          </Row><br></br>
          <Row>
          <Col sm={2}>
            
        
            <img src= {company2} alt="Logo" />
             </Col>
          <Col sm={10}>
          <Link to="/intuit"   style={{ textDecoration: 'none' }}>
          <p> <span style={{color:'blue'}}>Intuit </span></p>
          <img src ={location} alt="Logo"   style={{height:'15px'}}  />
          <p  style={{fontSize:"13px"}}>Plano; Tucson; Toronto
            <img src={building} alt="Logo"  style={{height:"15px"}}/>  Computer Software, Financial Technology </p>
         <p style={{fontSize:"13px"}}>ntuit is the global technology platform that powers prosperity for the people and communities we serve with TurboTax, Credit Karma, QuickBooks, and
          <br></br>Mailchimp. Our teams innovate using a common architecture shared across all of our products to unlock powerful insights and deliver personalized customer...</p>
          </Link>
          <ButtonGroup>
          <Button variant='secondary' size="sm">java</Button>
          <Button variant='secondary' size="sm"> kotlin</Button>
          <Button variant='secondary' size="sm">scala</Button>
         
          
          </ButtonGroup>
        
             <p  style={{color:'red'}}>New content</p>
          </Col>
         
          </Row><br></br>
          <Row>
          <Col sm={2}>
            <img src= {company3} alt="Logo" />
            
          </Col>
          <Col sm={10}>
          <Link to="/dish"   style={{ textDecoration: 'none' }}>
          <p> <span style={{color:'blue'}}>DISH </span></p>
          <img src ={location} alt="Logo"   style={{height:'15px'}}  />
          <p  style={{fontSize:"13px"}}> Englewood; Littleton; Denver

            <img src={building} alt="Logo"  style={{height:"15px"}}/>   Cloud Services, Information Technology, Wireless Communications </p>
           <p style={{fontSize:"13px"}}>At DISH our commitment to diversity equity and inclusion extends to every corner of our technology division We actively seek out talent from 
          <br></br>  groups, maintain pay transparency on all job descriptions and foster an inclusive environment where innovation thrives. In 2023,technology...</p>
          </Link>
          <ButtonGroup>
          <Button variant='secondary' size="sm">amazon-web-services</Button>
          <Button variant='secondary' size="sm"> azure</Button>
          <Button variant='secondary' size="sm">devops</Button>
         
          
          </ButtonGroup>
        
             <p  style={{color:'red'}}>New content</p>
          </Col>
         
          </Row><br></br>
          <Row>
          <Col sm={2}>
            <img src= {company4} alt="Logo" />
            
          </Col>
          <Col sm={10}>
          <p> <span style={{color:'blue'}}>Paylocity </span></p>
          <img src ={location} alt="Logo"   style={{height:'15px'}}  />
          <p  style={{fontSize:"13px"}}> Schaumburg; Meridian; Lake Mary
            <img src={building} alt="Logo"  style={{height:"15px"}}/>Human Resources, Payroll, Software Development / Engineering</p>
        

          
          <p style={{fontSize:"13px"}}>At Paylocity, we are passionate about providing innovative and reliable solutions that empower businesses of all sizes to streamline their HR and payroll
          <br></br>  Our teams are dedicated to putting our clients first, and we work tirelessly to ensure that our products and services are designed with their specific mind....</p>
          
          <ButtonGroup>
          <Button variant='secondary' size="sm">amazon-web-services</Button>
          <Button variant='secondary' size="sm"> azure</Button>
          <Button variant='secondary' size="sm">devops</Button>
         
          
          </ButtonGroup>
        
             <p  style={{color:'red'}}>New content</p>
          </Col>
         
          </Row>
          
  
     
       

         
      </div>

    
    </div>
  );
}

export default CompanieComponent;
