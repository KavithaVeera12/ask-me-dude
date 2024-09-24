import React, { useState, useEffect } from 'react';
import { Card, Button, CardText } from 'react-bootstrap';
import search from '../search.jpg';
import lock from '../lock.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import image2 from '../image2.jpg'
import image3 from '../image3.jpg'



import "bootstrap/dist/css/bootstrap.min.css"; 
import webdevelopment from '../webdevelopment.jpg'
import mobiledeveloper from '../mobiledeveloper.jpg'
import brandservice from '../brandservice.jpg'
import reactdeveloper from '../reactdeveloper.jpg'
import javascript1 from '../javascript1.jpg'
import java2 from '../java2.jpg';
import { Link } from "react-router-dom"; 


function Homecomponent() {
  const [dynamicTextIndex, setDynamicTextIndex] = useState(0);
  const textOptions = [
    ["Every  developer has a",  "tab to open Askmedude"],
    ["Every  Reactjs has a",  "tab to open Askmedude "],
    ["Every  Javascript has a" ,"tab to open Askmedude "],
    ["Every  Python has a", "tab to open Askmedude"]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicTextIndex(prevIndex => (prevIndex === textOptions.length - 1 ? 0 : prevIndex + 1));
    }, 1000); 

    return () => clearInterval(interval);
  }, [textOptions.length]);
  return (
<div  expand="lg" className="bg-body-tertiary">
    
    <div className="home">
      <div className="card1">
        <Card className='bg-warning shadow-1-strong d-flex' style={{ width: '23rem', height: "16rem" }}>
          <Card.Body>
            <Card.Title> <img src={search} alt="Logo" /></Card.Title>
            <Card.Text className="col">
              Find the best answer to your technical question, help others answer theirs
            </Card.Text>
            <Link to="/login"   style={{ textDecoration: 'none' }}>
            <Button variant="danger">Join the Community</Button>
          
            <br />
            </Link>
            <Card.Link href="#">or search for content</Card.Link>
          </Card.Body>
        </Card>

        <Card className='bg-info shadow-1-strong d-flex' style={{ width: '23rem', height: '16rem' }}>
          <Card.Body>
            <Card.Title> <img src={lock} alt="Logo" /></Card.Title>
            <Card.Text className="col">
              Want a secure, private space for your technical knowledge?
            </Card.Text>

            <Link to="/team"  style={{textDecoration:'none'}}>
            <Button variant="primary">Discover Teams</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div>
      <h1    style={{ color: "orange" }}>{textOptions[dynamicTextIndex][0]}</h1>
      <h1>{textOptions[dynamicTextIndex][1]}</h1>
    </div>
    


      <div>
      
    <Container   className='val1'>
     
      <Row>
        
        <Col><h4>100+ million</h4>
         <p> monthly visitors to Askmedude </p>
          <p>Askmedude & Exchange</p>

</Col>
        <Col><h4>45.1+ billion</h4>
            <p>Times a developer got</p>
             <p>help since 2024</p></Col>
        <Col><h4>191% ROI</h4>
             <p>from companies using </p>
             <p> Askmedude for Teams</p></Col>
             <Col><h4>5,000+</h4>
            <p>Askmedude for Teams</p>
             <p>infrom companies using </p>
             </Col>
             
             
      </Row>
      </Container>
   </div>

  
    
   
  
   <div className='main'>
   <div className='pala'>

    <h2 className='m-3'>Askmedude</h2>

    <img src={image2} alt='Logo'   style={{height:'290px',width:'300px'}}/>
      <h4 className='m-3'>A public platform building the <br></br>
      definitive collection of coding <br></br>
      questions & answers</h4>
      <p className='font'>A community-based space to find and contribute<br></br>
         answers to technical challenges, and one of the most <br></br>
         popular websites in the world.</p>
         <Button variant="danger">Join the Community</Button>
    </div>

    <div className='pala1'>
     <h2 className='m-3'>Team's to Work</h2>
     <img src={image3} alt='Logo'    style={{ height:'290px',width:'300px'}}/>
      <h4 className='m-3'>A private collaboration &<br>
      </br> knowledge sharing SaaS<br>
      </br> platform for companies</h4>
      <p className='fornt'>A web-based platform to increase productivity,<br></br> decrease cycle times, accelerate time to market, 
      <br></br>and protect institutional knowledge.</p>
      <Button variant="info">ForlargeOrginization</Button>
      <Button variant="danger">For same team</Button>
   </div>
   </div>
   

   <div className='val2'>
 <h4> Thousands of organizations around the globe use  Askmedude for Teams</h4>


 <Container fluid className="mt-5"> 
		<Row className="justify-content-center"> 
			<Col xs={12} md={6} lg={4}> 

      <Link to="/weblogin"   style={{ textDecoration: 'none' }}>
        
     
				<Card   > 
					<Card.Img 
						variant="top"
						src= 
            {webdevelopment} alt="Logo"  />
            
          
					<Card.Body> 
        
						<Card.Title>Web Development</Card.Title> 
						<Card.Text> 
            Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.

           The word Web Development is made up of two words, that is:

           Web: It refers to websites, web pages or anything that works over the internet.


           Development: It refers to building the application from scratch.
             
             
             
						</Card.Text> 
					</Card.Body> 
      
        
        
				</Card> 
        
        </Link>
			</Col> 
			<Col xs={12} md={6} lg={4}> 
      <Link to="/weblogin"   style={{ textDecoration: 'none' }}>
				<Card> 
					<Card.Img 
						variant="top"
						src= 
            {mobiledeveloper} alt="Logo" />
				
					<Card.Body> 
						<Card.Title>Mobile Developer</Card.Title> 
						<Card.Text> 
            Introduction to Mobility
            Mobility landscape, Mobile platforms, Mobile apps development, Overview of Android platform, Setting up the Mobile App Development environment along with an Emulator.
            App User Interface Designing – Mobile UI resources (Layout, UI elements, Drawable, Menu).Sprucing up Mobile Apps
            Graphics and animation – Custom views, Canvas, Animation APIs, Multimedia – Audio/Video playback and record, Location awareness.
           

						</Card.Text> 
					</Card.Body> 
    
				</Card> 
        </Link>
			</Col> 
      <Col xs={12} md={6} lg={4}> 
      <Link to="/weblogin"   style={{ textDecoration: 'none' }}>
				<Card> 
					<Card.Img 
						variant="top"
						src= 
            {brandservice} alt="Logo" />
				
					<Card.Body> 
						<Card.Title>Brand Service</Card.Title> 
						<Card.Text> 
            Branding is nothing but providing an identity and building a distinct image of the product or a service. It is all about differentiating an organization from its competitors. Branding involves creating mental structures and helping consumers organize their knowledge about products and services in a way that clarifies their decision making, and in the process it provides value to the firm. In other words, branding is endowing services with the power of a brand. 


						</Card.Text> 
					</Card.Body> 
       
				</Card> 
        </Link>
			</Col> 
		</Row> 


	</Container> 
  <Container fluid className="mt-5"> 
  <Row className="justify-content-center"> 
    <Col xs={12} md={6} lg={4}> 
    <Link to="/weblogin"   style={{ textDecoration: 'none' }}>
      <Card> 
        <Card.Img 
          variant="top"
          src= 
          {reactdeveloper} alt="Logo" />
        <Card.Body> 
          <Card.Title>React Developer</Card.Title> 
          <Card.Text> 
          React is a JavaScript library that aims to simplify the development of visual interfaces.

         Developed at Facebook and released to the world in 2013, it drives some of the most widely used apps,
         powering Facebook and Instagram among countless other applications.
         Its primary goal is to make it easy to reason about 
         an interface and its state at any point in time. It does this by dividing the UI into a collection of components.
        Their are two types of component one is function component and another one is class component.
          </Card.Text> 
        </Card.Body> 
      
      </Card> 
      </Link>
    </Col> 
    <Col xs={12} md={6} lg={4}> 
    <Link to="/weblogin"   style={{ textDecoration: 'none' }}>
      <Card> 
        <Card.Img 
          variant="top"
          src= 
          {javascript1} alt="Logo" />
      
        <Card.Body> 
          <Card.Title>Javascript</Card.Title> 
          <Card.Text> 
          JavaScript is a programming language that is:

high level: it provides abstractions that allow you to ignore the details of the machine where it's running on.
 It manages memory automatically with a garbage collector, so you can focus on the code instead of managing memory like other languages like C would need,
  and provides many constructs which allow you to deal with highly powerful variables and objects.something about javascript.

          </Card.Text> 
        </Card.Body> 
     
      </Card> 
      </Link>
    </Col> 
    <Col xs={12} md={6} lg={4}> 
    <Link to="/weblogin"   style={{ textDecoration: 'none' }}>
      <Card> 
        <Card.Img 
          variant="top"
          src= 
          {java2} alt="Logo" />
      
        <Card.Body> 
          <Card.Title>Java</Card.Title> 
          <Card.Text> 
          Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. 
          It is intended to let application developers write once, and run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.
           Java was first released in 1995 and is widely used for developing applications for desktop, web, and mobile devices. You want more  askmedude.
          </Card.Text> 
        </Card.Body> 
    
      </Card> 
      </Link>
    </Col> 
  </Row> 
  



 

</Container> 











   </div>

   
   <div className='footer'>
   <div className='val3 m-4'>


   
      
      <Row>
        <Col><h5>Askmedude</h5>
              <p>Questions <br></br>Help</p>
              </Col>
        <Col><h5>PRODUCTS</h5>
          <p>  Teams<br></br>
             Advertising<br></br>
             Collectives<br></br>
             Talent</p></Col>
        <Col><h5>
              COMPANY</h5>
              <p>About
               Press<br></br>
               Work Here<br></br>
               Legal<br></br>
               Privacy Policy<br></br>
               Terms of Service<br></br>
               Contact Us<br></br>
               Cookie Settings<br></br>
               Cookie Policy</p></Col>

          <Col>
          <h5>Askme EXCHANGE NETWORK</h5>
<          p>echnology<br></br>
           Culture & recreation<br></br>
           Life & arts<br></br>
           Science<br></br>
           Professional<br></br>
           Business<br></br>
           API<br></br>
           Data</p>
           </Col>
      </Row>
    
   </div>
   </div>
   
    </div>
    </div>
  );
}

export default Homecomponent;
