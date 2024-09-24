
import React, { useState } from 'react';

import {  Container, Nav, Navbar ,Form,Button} from "react-bootstrap";

import HtmlComponent from './html';
import CssComponent from './css';
import JavascriptComponent from './javascript';
import JavaComponent from './java';
import ReactjsComponent from './react';
import PythonComponent from './python';





function TechnologiesComponent() {
  const editorConfiguration = {
    toolbar: [ 'bold', 'italic' ]
};
 

  const[techologyType,setTechology]=useState('html');
   
 

  return (<div>
   
  


      <h1 className="m-4"> Askmedude Anythinking you want  I can Help you !</h1>
      <Form className="d-flex">
                  <Form.Control type="search" placeholder="Search"/>
                  <Button variant="outline-dark">Search</Button>
      </Form>
     
      <Button href="/questionlist" variant="primary" size="sm">questionlist</Button>  
                       
      <div className='add'>
      <Navbar >
        <Container>
        
        </Container>
      </Navbar>
      <Container   >
        <div className="row">
          <Nav className="col-md-2 d-none d-md-block  sidebar ">
            <div >
              
                <div >
                
              
                

              <Nav.Link onClick={() => setTechology('html')}>HTML</Nav.Link>               
              <Nav.Link onClick={() => setTechology('css')}>CSS</Nav.Link>
              <Nav.Link onClick={() => setTechology('javascript')}>JavaScript</Nav.Link>
              <Nav.Link onClick={() => setTechology('java')}>Java</Nav.Link>
              <Nav.Link onClick={() => setTechology('reactjs')}>React JS</Nav.Link>
              <Nav.Link onClick={() => setTechology('python')}>Python</Nav.Link>
              </div>
              
            
             
            </div>
          </Nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">

            
           {techologyType=="html" && <HtmlComponent />} 
           {techologyType=="css" &&  <CssComponent/>}
           {techologyType=="javascript" && <JavascriptComponent/>}
           {techologyType=="java" && <JavaComponent/>}
           {techologyType=="reactjs" && <ReactjsComponent/>}
           {techologyType=="python"  && <PythonComponent/>}
      
          </main>
        </div>
      </Container>
      
      



    


</div>
  


    
    
   
    </div>
  );
}

export default TechnologiesComponent;
