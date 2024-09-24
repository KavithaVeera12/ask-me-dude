import {  Row, Col, Button } from 'react-bootstrap';
import ContactComponent from './contact';
import React, { useState } from 'react';
import team1 from '../team1..jpg';
import team2 from '../team2.jpg.png';
import a2 from '../a2.jpg';
import a3 from '../a3.jpg';
import a4 from '../a4.jpg';
import a6 from '../a6.jpg';
import a1 from '../a1.jpg';
import v1 from '../v1.jpg';
import v2 from '../v2.jpg'; 
import v3 from '../v3.jpg';
import v4 from '../v4.jpg';
import v5 from '../v5.jpg';
import v6 from'../v6.jpg';

function TeamComponent(){

    const [team, setTeam] = useState(); 
return(<div  >

<div className="parallelogram">
<p className='m-3'>Coming Soon!</p>
<p  style={{fontSize:"13px"}} className='m-3'>We're integrating  GenAI into Askmedude for<br></br> Teams</p>

</div>

      <Row>
        <Col className='m-5'>
        <h1>The answer to your <br></br>developer's problems</h1><br></br>
        <p>One tool to house everything your developers need to know.</p>
        <h5> From code to vacation policies. All up-to-date. All in one place.</h5><br></br>

        <Button   variant='info' onClick={() => setTeam('contact')}>Empower Your team</Button>



        <main>
        {team === 'contact' && <ContactComponent />}
      </main>
        </Col>
        <Col>
         
        <img src= {team1} alt="Logo"   />
      
        
        </Col>
        </Row><br></br>
         

         <p className='m-5'>Supporting the innovative teams at:</p>
          <Row>

         <div>
         <img src={a1} alt="Logo"/>   
        <img src={a2}  alt="Logo"/>
        <img src={a3}  alt="Logo"/>
        <img src={a4} alt="Logo"/>
        <img src={a6}  alt="Logo"/>
    
        </div>



        <Col  className='m-5'><h1 >Prevent the interruptions that prevent deep work.</h1>
        
        <h1>Quick questions are<br></br> rarely quick.</h1>

        <img src ={team2} alt="Logo"    style={{height:'100px'}}/>
        
        <p>minutes lost every time a team member is interrupted.
          Source: Fast Company</p><br></br>


       <p  >That time adds up to a lot of frustration,
        for both the person answering and the person waiting for an answer.</p>

        <h3>That times adds up to a lot of frustration</h3>
        <p   style={{fontSize:'20px'}}>for  both the preson answering and the person <br></br> waiting for answer</p>
        
        </Col>
        <Col>
        <div className="card5">
  <div className="card-body">
   <p>Codebase sync    Accept Decline</p>
  </div>
  
</div>
<br></br>
<div className="card2">
  <div className="card-body">
  
  <p> That Colleague</p>
  <p> Hey! Quick Question....</p>

  </div>
</div>
<br></br>
<div className="card3">
  <div className="card-body">
  <p>your boss's boss</p>
  <p>How do i rest login?</p>
  </div>
</div>
<br></br>
<div className="card4">
  <div className="card-body">
    <p>Assigned new ticket</p>
    <p>onboard the new dev</p>
  </div>
</div>
        
        </Col>
      </Row>



      <div className='m-5'>
        <h3> More time for innovation</h3>
        <p>How are you making sure your developers have time to <br></br>learn and stretch and innovate? See how much time they’d <br></br>have without unnecessary interruptions.</p>
      
     
      </div> 
      <div>
        <hr></hr>
        
      <Row  className='m-5'>
        <Col>
        <img src={v1} alt='Logo'     style={{width:"200px"}}/>
        <h6>The SaaS Awards</h6>
      <p>  Best saas for Productivity</p>
        <p>2022</p>
        
        
        </Col>
        <Col>
        <img src={v2} alt='Logo'   style={{width:'150px'}}/>

        <h6>RemoteTech Awards</h6>
       <p> Developer Collaboration Platform </p>
        <p>2021-2022</p>
        
        
        </Col>
        <Col>
        <img src={v3} alt='Logo'   style={{width:'100px'}}/>
        
        <h6>APPEALIE SaaS Awards</h6>
         <p>Collaboration + Productivity</p>
         <p>2021</p>
        
        
        </Col>
        <Col>
        
        <img src={v4} alt='Logo'   style={{width:'100px'}}/>
        <h6>The API Awards</h6>
         <p>Communications APIs</p>
          <p>2022</p>
        
        
        </Col>
        <Col>
        <img src={v5} alt='Logo'   style={{width:'100px'}}/>

        <h6>The EdTech Awards</h6>
        <p>Cool Tool Finalist</p>
        <p>2022</p>
        
        </Col>
        <hr></hr>
      </Row>

      <h2   className='m-5'>See how we help organizations…</h2>
      <div  className='m-5'>
      <img src={v6} alt='Logo'  style={{width:'90px'}}/>
      <h2>Attract, onboard, and retain top talent.</h2>
        </div>
      </div>
     
  

    </div>)
}
export default TeamComponent;