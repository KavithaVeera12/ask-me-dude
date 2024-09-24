import { CardHeader,Card, Container,FormControl,Form,Row,Col, ButtonGroup,Button,Nav } from "react-bootstrap"
import { Link } from "react-router-dom";
function AsknewComponent(){
    return(<div  expand="lg" className="bg-body-tertiary">
       

       <div className="l1">
     <h3>Questions</h3>
     <p>A questions is a keyword or label that categorizes your question with other, similar questions. Using <br>
     </br>the right question makes it easier for others to find and answer your question.</p>
     <p style={{color:'blue'}}>Show all tag synonyms</p>
    
     <Row>
          <Col sm={3}>
            <Form.Group>
              <Form.Control type="text" placeholder="filter by question name" />
            </Form.Group>
          </Col>
         < Col sm={2}>
          <ButtonGroup>
          <Link to="/popular"><Button variant="outline-dark">Popular</Button></Link>
              <Link to="/name"><Button variant="outline-dark">Name</Button></Link>
              <Link to="/asknew"><Button variant="outline-dark">New</Button></Link>
          </ButtonGroup>
          </Col>
          
          </Row><br></br>


          <Link to="/article"   style={{ textDecoration: 'none' }}>
        <div className="grid-container">
      <div className="grid-item"><Button variant="light" size="sm">ibm-esql</Button>
      <p style={{fontSize:"13px"}}></p>
      <p  style={{fontSize:"13px"}}>  1 question   Created 1 hour ago</p>

      </div>
      <div className="grid-item">


      <Button variant="light" size="sm">latent-diffusion</Button>
     <p    style={{fontSize:"13px"}}></p>
     <p  style={{fontSize:"13px"}}>1 question   Created 3 hours ago</p>
      
      </div>
      <div className="grid-item">
      <Button variant="light" size="sm">chrome-pdf</Button>
      <p    style={{fontSize:"13px"}}> </p>
      <p    style={{fontSize:"13px"}}>1 question   Created 3 hours ago</p>
      </div>
   
    </div><br></br>
    </Link>

    <Link to="/article"   style={{ textDecoration: 'none' }}>
    <div className="grid-container">
      <div className="grid-item">
      <Button variant="light" size="sm">solhint</Button>
      <p    style={{fontSize:"13px"}}> </p>
      <p    style={{fontSize:"13px"}}> 1 question  Created 6 hours ago</p>
      </div>
      <div className="grid-item">

      <Button variant="light" size="sm">unplugin-icons</Button>
      <p    style={{fontSize:"13px"}}>     </p>
      <p    style={{fontSize:"13px"}}>1 question  Created 9 hours ago    </p>
      </div>
      <div className="grid-item">
        
      <Button variant="light" size="sm">sjasmplus</Button>
      <p    style={{fontSize:"13px"}}>     </p>
      <p    style={{fontSize:"13px"}}>1 question  Created 10 hours ago</p>

      </div>
   </div><br></br>
   </Link>



   <Link to="/article"   style={{ textDecoration: 'none' }}>
   <div className="grid-container">
      <div className="grid-item"><Button variant="light" size="sm">roject-reactor</Button>
      <p style={{fontSize:"13px"}}> </p>
      <p  style={{fontSize:"13px"}}> 0 questions    Created 10 hours ago</p>
      </div>
      <div className="grid-item">  


      <Button variant="light" size="sm">civo</Button>
     <p    style={{fontSize:"13px"}}>Civo is a cloud-native service provider. Civo runs state-of-the-art cloud computing hardware in data centers around the world that can be used by customers.</p>
     <p  style={{fontSize:"13px"}}> 5 questions   Created 17 hours ago</p>
      
      </div>
      <div className="grid-item">
      <Button variant="light" size="sm">android-in-app-review</Button>
      <p    style={{fontSize:"13px"}}> </p>
      <p    style={{fontSize:"13px"}}>1 question   Created 20 hours ago</p>
      </div>
   </div>
   </Link>
    </div>
    
    </div>)
}
export default AsknewComponent;