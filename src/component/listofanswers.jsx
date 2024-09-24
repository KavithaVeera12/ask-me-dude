import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, CardBody, CardText,Card, CardHeader } from 'react-bootstrap';
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function ListofanswersComponent(){
  const editorConfiguration = {
    toolbar: [ 'bold', 'italic' ]
};

 const [count, setCount] = useState(0);

  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
    return(<div   >
        <Container>
      <Row  className='m-5'>
        <Col  sm={11}>
        <h4>How do I identify why my HTML/CSS website is not scrolling?</h4>
        <p>Asked today
          Modified today
         Viewed 55 times</p>
        
        </Col>
    
        <Col  sm={1}>

        <div   className="sticky">
                           
         <Button href="/askquestion" variant="primary" size="sm">AskQuestion</Button>
          </div>
        </Col>
        <hr></hr>
      </Row>
       </Container>
    


      
    
      <Container>

      <Row>
        <Col sm={1}>
        <h5>   <p onClick={increment}>+</p>  {count}
               <p onClick={decrement}>-</p>
       </h5>
        
        
        </Col>
        <Col sm={7}>
        
        <p> I have a simple website I am working on, and it suddenly stopped scrolling when I test it out, even though it had been working for a long time. I was troubleshooting a different issue but never made any permanent changes to the code.</p>
        
        <p> I have tried all the immediately available solutions on the internet(overflow:scroll, height:100%, removing fixed positions) but nothing has changed. please help... I do not have the knowledge or experience to identify the problem</p>
       <hr></hr>
        <p>Wouldn't this be a meta question? – 
Chris
 Oct 30, 2009 at 21:19</p>
        <p>1
Not really a meta question, probably just not an SO question. Maybe DocType might be the right place? Although honestly it's not really answerable -- most "big sites" probably hand-code their templates, but the rest of the site is data driven ... – 
John Rudy
 Oct 30, 2009 at 21:21
Note that he may be asking about code editors, as opposed to server-side code generators. – 
Kzqai
 Oct 30, 2009 at 22:27</p>
 <hr></hr>
 <p>Add a comment</p>
 <p>13 Answers</p>
        
        </Col>
        <Col sm={4}>
         
         <Card>
            <CardBody>
                <CardHeader  style={{backgroundColor:'orange'}}>The Overflow Blog</CardHeader>
                <CardText>Why configuration is so complicated</CardText>
                <CardHeader   style={{backgroundColor:'orange'}}>Featured on Meta</CardHeader>
               
                       <CardText style={{fontSize:'13px'}}>
                       <input type="checkbox"/>New Focus Styles & Updated Styling for Button Groups</CardText>
                       <CardText style={{fontSize:'13px'}}>
                       <input type="checkbox"/>Upcoming initiatives on Stack Overflow and across the Stack Exchange network</CardText>
                        <CardText style={{fontSize:'13px'}}>
                         <input type="checkbox"/>
                        Upcoming initiatives on Stack Overflow and across the Stack Exchange network</CardText>
                        <CardText style={{fontSize:'13px'}}>
                        <input type="checkbox"/>Temporary policy: Generative AI (e.g., ChatGPT) is banned
                        </CardText>
                        <CardText style={{fontSize:'13px'}}>
                          <input type="checkbox"/>Pausing the 1-rep voting experiment on Stack Overflow: reflecting on the...

                        </CardText>
            </CardBody>
         </Card>

      
        </Col>
      </Row>

     
     </Container>
     
     <p className='m-5'>13Answers</p>
     
     <Row   className='m-5'>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>

      <div  className='m-5'>
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
      </div>



      <Button   className='m-5'>Submit</Button>
    </div>)
}
export default ListofanswersComponent;