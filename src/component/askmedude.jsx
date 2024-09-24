import React, { useState } from "react"; 
import { Container, Row, Col, Card, Nav,Button } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import webdevelopment from '../webdevelopment.jpg'
import mobiledeveloper from '../mobiledeveloper.jpg'
import brandservice from '../brandservice.jpg'
import reactdeveloper from '../reactdeveloper.jpg'
import javascript1 from '../javascript1.jpg'
import java2 from '../java2.jpg';
import { Link } from "react-router-dom"; 




function AskmedudeComponent () {
 
  return(
  <div>
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
)}; 

export default  AskmedudeComponent;
