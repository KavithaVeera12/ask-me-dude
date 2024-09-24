import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import pencil from '../pencil.jpg.png';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



function AskquestionComponent(){
  const editorConfiguration = {
    toolbar: [ 'bold', 'italic' ]
};
return(<div     > 
<h4 className="m-5 ">Ask a public question</h4>
<Row className='m-5' >
        <Col sm={9}  style={{backgroundColor:' mistyrose'}}>
            <div  className='m-3'>
            <p style={{fontSize:'18px'}}>Writing a good question</p>
            <p>You’re ready to <span  style={{color:'blue'}}>ask a programming-related question </span>and this form will help guide you through the process.<br></br>
            Looking to ask a non-programming question? See <span style={{color:'blue'}} >the topics here</span> to find a relevant site.</p>
            <h6>Steps</h6>
            <p>. Summarize your problem in a one-line title.<br></br>
            . Describe your problem in more detail.<br></br>
            . Describe what you tried and what you expected to happen.<br></br>
            . Add “tags” which help surface your question to members of the community.<br></br>
            . Review your question and post it to the site.</p>
           </div>     
        </Col>
        
      </Row>
      <Row className='m-5'>
        <Col sm={9}  >
        <Card>
     
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text  style={{fontSize:'13px'}}> 
           Be specific and imagine you’re asking a question to another person.
        </Card.Text>
        <Form.Control type="text" placeholder="e.g is there anR function for finding the index the of an element in avector?" /><br></br>
        <Button variant="primary">Next</Button>
      </Card.Body>

  
    </Card>
<div  className="v1">

    <CKEditor 
                    editor={ ClassicEditor }
                    data="<p>Hello from  Askmedude?</p>"
                    onReady={ editor => {
                     
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event ) => {
                        console.log( event );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
   </div >




  
        </Col>
        <Col sm={3}>  <Card>
      <Card.Header>Writing a good title</Card.Header>
      <Card.Body>
        
        <Card.Text  style={{fontSize:'13px'}}>
            <img src={pencil} alt="Logo" />
            Your title should summarize the problem.
             You might find that you have a better<br></br>
              idea of your title after writing out the rest
               of the question.
        </Card.Text>
       
      </Card.Body>
    </Card></Col>
      </Row>

    

   
</div>)
}
export default AskquestionComponent;
