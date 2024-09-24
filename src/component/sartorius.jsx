import company1 from '../company1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, ButtonGroup } from 'react-bootstrap';
import company5 from '../company5.jpg';
import company6 from '../company6.jpg';
import company7 from '../company7.jpg';
import company8 from '../company8.jpg';

import company10 from '../company10.jpg';
import company11 from '../company11.jpg';
import location1 from '../location1.jpg.png';
import company12 from '../company12.jpg';
import company13 from '../company13.jpg';


function SartoriusComponent(){
    return(<div  >
<div  className='m-5'>
      <Row >
        <Col sm={2}>
        <img src= {company1} alt="Logo" />

        </Col>
        <Col sm={10}>

            <h1>Sartorius</h1>
            <p>Partner of Life Science Research and the Biopharmaceutical Industry</p>
            <Button>Follow</Button><br></br>
            <ButtonGroup className='m-5'>
      <Button variant="outline-secondary">Updates</Button>
      <Button variant="outline-secondary">About</Button>
      <Button variant="outline-secondary">Tech stack</Button>
      <Button variant="outline-secondary">Videos</Button>
      <Button variant="outline-secondary">People</Button>
      </ButtonGroup>
        </Col>
      </Row>
    



      
      <Row>
        <Col sm={6}>
        <p>Updates</p>
     <img src= {company1} alt="Logo"   style={{height:'50px'}}     />
     Sartorius<br></br>5 days ago
     <p>➡ Q1 results in line with expectations<br></br>
     ➡ Recurring business with significant order growth<br></br>
      ➡ Inventory reductions at customers further advanced<br></br>
      ➡ Demand from China remains weak<br></br>
        ➡ Outlook for full year confirmed</p><br></br>
      <img src={company5}  alt='Logo'      style={{height:'200px'}}  />
      <p><span   style={{color:'blue'}}>First quarter results in line with expectations</span></p>
        <p>lnkd.in</p>
        <hr></hr>
         <Row>
        <Col    sm={3}>
        <img src= {company1} alt="Logo" />
        </Col>
        <Col  sm={9}>
        <h4>Sartorius</h4>
        <p>5 weeks ago</p>

        
        </Col>
     <p>On today’s Global Recycling Day, Sartorius stands by its commitment to the concept of a circular economy.</p>
     <p>In the ambition to increase the recycling rates in our own production, teams at the production sites in Göttingen and Aubagne have run recycling initiatives – with measurable results.</p>
    <img src={company10} alt='Logo'/>
    <p><span  style={{color:'blue'}}>On the Way to Circularity | Recycling Initiatives in Germany and France</span></p>
    <p>strs.info</p>
    <hr></hr>
    </Row>

    <Row>
    <Col    sm={3}>
        <img src= {company1} alt="Logo" />
        </Col>
        <Col  sm={9}>
        <h4>Sartorius</h4>
        <p>7 weeks ago</p>

        
        </Col>
        <p>Yvonne Liu joined Sartorius as Head of Channel Management for China in 2019 and just recently gained responsibility for sales of the company’s lab essential products in the Chinese market.</p>
      <p>On the Sartorius blog she shares tips, how she supports people development, and why she joined Sartorius.</p>
      <img src={company11}  alt='Logo'/>

      <p><span  style={{color:'blue'}}>   International Women's Day 2024 | Yvonne  Liu</span></p>
      <p>sar.to</p>
      <hr></hr>
      </Row>

      <Row>
    <Col    sm={3}>
        <img src= {company1} alt="Logo" />
        </Col>
        <Col  sm={9}>
        <h4>Sartorius</h4>
        <p>7 weeks ago</p>

        
        </Col>
        <p>On International Women's Day 2024, join us in celebrating the 5,655 women at Sartorius, as well as our female customers, partners, and followers.</p>
      <p>Check out more facts and figures and meet some of the inspiring leaders on the Sartorius blog.</p>
      <img src={company12}  alt='Logo'/>

      <p><span  style={{color:'blue'}}>   International Women's Day 2024 | Facts Figure</span></p>
      <p>sar.to</p>
      <hr></hr>
      </Row>






      <Row>
    <Col    sm={3}>
        <img src= {company1} alt="Logo" />
        </Col>
        <Col  sm={9}>
        <h4>Sartorius</h4>
        <p>7 weeks ago</p>

        
        </Col>
        <p>On International Women's Day 2024, join us in celebrating the 5,655 women at Sartorius, as well as our female customers, partners, and followers.</p>
      <p>Check out more facts and figures and meet some of the inspiring leaders on the Sartorius blog.</p>
      <img src={company13}  alt='Logo'/>

      <p><span  style={{color:'blue'}}>   International Women's Day 2024 | Facts Figure</span></p>
      <p>sar.to</p>
      <hr></hr>
      </Row>
      </Col>

      
        <Col  sm={6}  className='p-5'>
        <p>About</p>
        <p>Learn more</p>
        <p>WEBSITE<br></br>
          Sartorius<br></br>
          INDUSTRY
           Biotechnology, Life Sciences<br></br>
            SIZE:

            10k+ employees<br></br>
            FOUNDED:

             1870<br></br>
             STATUS:

             Private<br></br>
            FOLLOWERS:

             156</p>



             <h4   className='p-5'>Photos</h4>
             <img src={company6}  alt='Logo'    style={{height:'300px'}} />


             <Row>
        <Col>
        <img src={company7} alt='Logo'  style={{height:'80px'}} /> 
        </Col>
        <Col>
         <img src={company8} alt='Logo'    style={{height:'80px'}} />
        </Col>
        <Col>
        <img src={company8} alt='Logo'     style={{height:'80px'}} />
        </Col>

        <p  className='p-5'>Office Locations</p>
        
        <Row>
        <Col sm={1}>
        <img src ={location1} alt="Logo"    /><br></br>
        <img src ={location1} alt="Logo"    /><br></br>
        <img src ={location1} alt="Logo"    /><br></br>
        <img src ={location1} alt="Logo"     /><br></br>
        <img src ={location1} alt="Logo"    />
        
       

        </Col>
        <Col  sm={11}>

          <p><span  style={{color:'blue'}}>Gottigen, Germany</span><br></br>
          <span  style={{color:'blue'}}>Berlin, Germany</span><br></br>
          <span  style={{color:'blue'}}>umea, Sweden</span><br></br>
          <span  style={{color:'blue'}}>Malmo,Sweden</span><br></br>
          <span  style={{color:'blue'}}>Royston, United Kingdom</span></p>
         
        </Col>



         <div  className='p-5'>
         <Row>

          <h3>Company Benefits</h3>
        <Col className='p-5'>


          <p>➡Collaboration in international project teams<br></br>
          ➡Openness for your personal contribution, ideas and perspectives<br></br>
          ➡Start-up culture in a corporation: agile culture & global scope<br></br>
          ➡Flexible hours and opportunities to work remotely<br></br>
          ➡Development and training to support your growth<br></br>
          ➡Strong purpose: Be part of the solution in the fight against diseases<br></br>
          ➡State-of-the art facilities and latest technology and equipment<br></br>
          ➡ Wide range of health support, e.g gym, medical check-ups<br></br>
          ➡Regional benefits e.g. company restaurant, KiTa, bicycle & car leasing</p>
        </Col>
      
      </Row>
      </div>
     
      </Row>
     
     
     
      </Row>
    
        </Col>
       
      </Row>
      </div>
     

    </div>)
}
export default SartoriusComponent