import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Container, Nav, Navbar ,NavbarCollapse,NavLink} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AskmedudeComponent from "./component/askmedude";
import HomeComponent from "./component/home";
import LoginComponent from "./component/login";
import TechnologiesComponent from "./component/technologies1";
import HtmlComponent from './component/html';
import CssComponent from './component/css';

import { Form,Button } from 'react-bootstrap';
import ReactjsComponent from './component/react';
import PythonComponent from './component/python';
import JavascriptComponent from './component/javascript';
import JavaComponent from './component/java';
import SignupComponent from './component/signup';
import WebloginComponent from './component/weblogin';
import MobileComponent from './component/mobile';
import BrandComponent from './component/brand';
import ReactaskComponent from './component/reactask';
import JsjavascriptComponent from './component/jsjavascript';
import AnswerComponent from './component/article';
import AskquestionComponent from './component/askquestion';
import ArticleComponent from './component/article';
import ContactComponent from './component/contact';
import CompanieComponent from './component/companie';
import FilterComponent from './component/filter';
import QuestionlistComponent from './component/technologies';
import TeamComponent from './component/team';
import NameComponent from './component/name';
import AsknewComponent from './component/asknew';
import ListofanswersComponent from './component/listofanswers';
import PopularComponent from './component/popular';
import SartoriusComponent from './component/sartorius';
import IntuitComponent from './component/intuit';
import DishComponent from './component/dish';




function App() {
  

  const[home,setHome]=useState();
  return (
    <div className="App">
      <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/askmedude">Askmedude</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
         
            <Nav.Link href="/home"> <span  style={{color:'blue'}}>Home</span></Nav.Link>
        
            <Nav.Link href="/technologies">Technologies</Nav.Link>
            <Nav.Link href ="/article">Article</Nav.Link>
            <Nav.Link href ="/companie">Companies</Nav.Link>
            <Nav.Link href ="/team"> For Teams</Nav.Link>
           
          
            </Nav>
            <Nav>
            <Nav.Link href="/login">Login</Nav.Link>     
            <Form className="d-flex">
            <Link to="/article"   style={{ textDecoration: 'none' }}>
                  <Form.Control type="search" placeholder="Search"
                   aria-label="Search"
                  />
                  </Link>
                  <Button variant="outline-success">Search</Button>
                </Form>
                <NavLink  href="/contact"> <span  style={{color:'blue'}}>Contact Us</span></NavLink>
                </Nav>

          
        </Navbar.Collapse>
        
      
         
        
      </Container>
    </Navbar>

        <Routes>
        <Route path="/" element={<HomeComponent />} />
          <Route path="/askmedude" element={<AskmedudeComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/technologies1" element={<TechnologiesComponent />} />
          <Route path ="/article" element={<ArticleComponent/>}/>
          <Route path="/companie" element={<CompanieComponent/>}/>
          <Route path="team" element={<TeamComponent/>}/>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/contact" element={<ContactComponent/>}/>
          <Route path="/html" element={<HtmlComponent />} />
              <Route path="/css" element={<CssComponent/>} />
              <Route path="/javascript" element={<JavascriptComponent/>} />
              <Route path="/java" element={<JavaComponent />} />
              <Route path="/react" element={<ReactjsComponent />} />
              <Route path="/python" element={<PythonComponent />} />
              <Route path="/signup" element={<SignupComponent/>}/>
              <Route path="/weblogin" element={<WebloginComponent/>}/>
              <Route path="/mobile" element={<MobileComponent/>}/>
              <Route path="/brand"  element={<BrandComponent/>}/>
              <Route path="/reactask" element={<ReactaskComponent/>}/>
              <Route path="/jsjavascript" element={<JsjavascriptComponent/>}/>
              
              <Route path="/askquestion" element={<AskquestionComponent/>}/>
              <Route path="/technologies" element={<QuestionlistComponent/>}/>
              <Route path="/name" element={<NameComponent/>}/>
              <Route path="/asknew" element={<AsknewComponent/>}/>
              <Route path="/popular" element={<PopularComponent/>}/>
              <Route path="/listofanswers" element={<ListofanswersComponent/>}/>
              <Route path="/sartorius" element={<SartoriusComponent/>}/>
              <Route path="/intuit"  element ={<IntuitComponent/>}/>
              <Route path="/dish" element={<DishComponent/>}/>
         
        </Routes>
      </Router>
      
     
 


     
    
         
        </div>
  );
}

export default App;

