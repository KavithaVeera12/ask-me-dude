import company2 from '../company2.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, ButtonGroup } from 'react-bootstrap';
import int1 from '../int1.jpg';
import int2 from '../int2.jpg'
import location1 from '../location1.jpg.png';
import int3 from '../int3.jpg';
import int4 from '../int4.jpg';
import int5 from '../int5.jpg';
import int6 from '../int6.jpg';
import int7 from '../int7.jpg';
 import int8 from '../int8.jpg';
 import int9 from '../int9.jpg';
 
 function IntuitComponent(){
    return(<div >

<div  className='m-5'>
      <Row >
        <Col sm={2}>
        <img src= {company2} alt="Logo" />

        </Col>
        <Col sm={10}>

            <h1>Intuit</h1>
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
     <img src= {company2} alt="Logo"   style={{height:'50px'}}     />
     
Intuit<br></br>1 week ago
     <p>Meet Query Kickstart: Intuit's internal generative AI (GenAI)-powered tool designed to improve speed to insight by accelerating SQL query authoring for our data workers. Learn more about how we put this tool to the test and the productivity boosts we uncovered in the process.</p><br></br>
      <img src={int1}  alt='Logo'      style={{height:'200px'}}  />
      <p><span   style={{color:'blue'}}>How Intuit data analysts write SQL 2x faster with internal GenAI tool</span></p>
        <p>medium.com</p>
        <hr></hr>
         <Row>
        <Col    sm={3}>
        <img src= {company2} alt="Logo" />
        </Col>
        <Col  sm={9}>
        <h4>Intuit</h4>
        <p>5 weeks ago</p>

        
        </Col>
     <p>KubeCon Europe recently wrapped up and our team returned excited about the latest open source software developments. Read about the few notable trends that stood out for us, including the continuation of the AI hype train.</p>
    <img src={int2} alt='Logo'/>
    <p><span  style={{color:'blue'}}> KubeCon EU 2024 Tech Trends: GitOps, AI Hype, Debuggability & More
</span></p>
<p>medium.com</p>
    <hr></hr>
    </Row>

    <Row>
    <Col    sm={3}>
        <img src= {company2} alt="Logo" />
        </Col>
        <Col  sm={9}>
        <h4>Intuit</h4>
      
        <p>7 weeks ago</p>

        
        </Col>
      <p>We are honored to be included in Fortune’s 100 Best Companies to Work For list for the 23rd year in a row. Intuit’s inclusion is a testament to the incredible culture our employees have built. Thank you to our employees for making Intuit a fantastic place to work!</p>
      <img src={int7}  alt='Logo'/>

      <p><span  style={{color:'blue'}}>  Intuit named one of Fortune's 2024 100 Best Companies to Work For
</span></p>
      <p>www.greatplacetowork.com</p>
      <hr></hr>
      </Row>

      <Row>
    <Col    sm={3}>
        <img src= {company2} alt="Logo" />
        </Col>
        <Col  sm={9}>
        <h4>Intuit</h4>
        <p>7 weeks ago</p>

        
        </Col>
        <p>We’ve been recognized by Fortune as one of America's Most Innovative Companies! We’re continuing to drive AI innovation across our platform to help small businesses and consumers grow and prosper.</p>
      <img src={int8}  alt='Logo'/>

      <p><span  style={{color:'blue'}}>  Intuit recognized by Fortune as one of America's Most Innovative Companies</span></p>
       <p>fortune.com</p>
      <hr></hr>
      </Row>






      <Row>
    <Col    sm={3}>
        <img src= {company2} alt="Logo" />
        </Col>
        <Col  sm={9}>
        <h4>Intuit</h4>
        <p>7 weeks ago</p>

        
        </Col>
     <p>Build a platform that unlocks financial opportunities for 100M+ customers around the world</p>
      <img src={int9}  alt='Logo'/>
      <p>Intuit is the global technology platform that powers prosperity for the people and communities we serve with TurboTax, Credit Karma, QuickBooks, and Mailchimp. Our teams innovate using a common architecture shared across all of our products to unlock powerful insights and deliver personalized customer experiences. </p>
      <hr></hr>
      </Row>
      </Col>

      
        <Col  sm={6}>
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
             <img src={int3}  alt='Logo'    style={{height:'300px'}} />


             <Row>
        <Col>
        <img src={int4} alt='Logo'  style={{height:'90px'}} /> 
        </Col>
        <Col>
         <img src={int5} alt='Logo'    style={{height:'90px'}} />
        </Col>
        <Col>
        <img src={int6} alt='Logo'     style={{height:'90px'}} />
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

          <p><span  style={{color:'blue'}}>2701 Coast,Mountain View, CA 94043</span><br></br>
          <span  style={{color:'blue'}}>7535 Torrey Santa Fe Rd, San Diego, CA 92129</span><br></br>
          <span  style={{color:'blue'}}>HaPsagot 7 St, Building B, 10th Floor, Petah Tikva Israel</span><br></br>
          <span  style={{color:'blue'}}>EcoSpace, Intuit Campus *, Campus 4A,Campus 6A</span><br></br>
          <span  style={{color:'blue'}}>The Well,Floors 16-19, 8 Spadina Ave, Toronto,ON MSV <br></br>058 Canda</span></p>
         
        </Col>



         <div  className='p-5'>
         <Row>

          <h3>Company Benefits</h3>
        <Col className='p-5'>

          <p>➡Well-being for Life Reimbursement Program<br></br>
          ➡Employee Stock Purchase Program<br></br>
          ➡401K Match<br></br>
          ➡Paid Volunteer Time and Donation Matching<br></br>
          ➡Paid Vacation<br></br>
          ➡Medical/Dental/Vision Insurance, plus HSA and FSA<br></br>
          ➡Parental Leave (Maternity & Paternity)<br></br>
          ➡Adoption & Fertility Benefits<br></br>
          ➡Transgender Benefits<br></br>
          ➡Spotlight Recognition Programs</p>
          
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
export default IntuitComponent