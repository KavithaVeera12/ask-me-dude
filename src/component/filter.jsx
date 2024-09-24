import { Button, ButtonGroup,FormControl,Form } from "react-bootstrap"
import Card from 'react-bootstrap/Card';


function FilterComponent(){
   
    return(<div   expand="lg" className="bg-body-tertiary">
        <div   className="f1">
  <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Compant tech Stack</Card.Title>
       
        <Card.Text>
        Add up to ten tech tags
        </Card.Text>
        <Form.Control type="text" placeholder="e.g html,C#"/><br></br>
       <ButtonGroup>
        <Button>Apply Link</Button>
        <Button>Cancel</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
    </div>  
  
     
    </div>)
}
export default FilterComponent
