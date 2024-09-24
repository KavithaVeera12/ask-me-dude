
import { CardBody,Card ,CardHeader, Container, CardTitle, Form,Row,Col,Button} from "react-bootstrap"

function ContactComponent(){
    return(<div>
     <Container>
     <Card className="m-3">
        <CardBody className="v6">
            <CardHeader  style={{backgroundColor:'bisque'}}>
              <h3>Empower your teams today</h3>
              <p>Learn how Stack Overflow for Teams can empower teams in
                your organization to collaborate and innovate more effectively.</p>
            </CardHeader>
            <CardTitle>
                <div className="c1">
            <Form  className="m-5">
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>First name*</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Last name*</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>
      </Row>
       <Form.Group>
        <Form.Label>work email*</Form.Label>
        <Form.Control  type="text"  placeholder=""/>
       </Form.Group>

       <Row>
        <Col>
          <Form.Group>
            <Form.Label>Company*</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Company size*</Form.Label>
          
            <Form.Select aria-label="Default select example">
              <option> select.....</option>
              <option value="1">1-200</option>
             <option value="2">201-500</option>
              <option value="3">501-1,500</option>
              <option value="3">501-1,500</option>
              <option value="4">1,501-2,500</option>
              <option value="5">2,501-5000</option>
              <option value="6">5,001-10,000</option>
              <option value="7">10,001,50,000</option>
              <option value="8">50,001+</option>
           </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group>
            <Form.Label>Country*</Form.Label>
          
            <Form.Select aria-label="Default select example">
              <option> India</option>
              <option value="1">United State</option>
             <option value="2">201-500</option>
              <option value="3">501-1,500</option>
              <option value="3">501-1,500</option>
              <option value="4">1,501-2,500</option>
              <option value="5">2,501-5000</option>
              <option value="6">5,001-10,000</option>
              <option value="7">10,001,50,000</option>
              <option value="8">50,001+</option>
           </Form.Select>
          </Form.Group>
    </Form>

    <input type="checkbox"/>
    <label for=""> I would like to recieve marketing communications from Askmedude</label>
     <p>By submitting this form, I agree to the Terms of Service and have read and understand Askmedude <span  style={{color:'blue'}}>Privacy Policy</span></p>
   
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Empower My Team
      </Button>
      </div>
   </div>
            </CardTitle>
        </CardBody>
     </Card>
     </Container>
    </div>)
}
export default ContactComponent