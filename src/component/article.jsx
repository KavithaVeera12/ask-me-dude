import { Container, Card, Button, Row, Col, CardBody, CardTitle, CardText, CardHeader, ButtonGroup } from "react-bootstrap";
import React, { useState } from 'react';
import { Link } from "react-router-dom"; 


function AnswerComponent() {
   


    const [count, setCount] = useState(0);

  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
    return (
        <div  >
        <div className="v1"  >
            <Card className="m-5">
                <div className="m-3">
                    <Row className="justify-content-md-center">
                        <Col sm={10}>
                            <h4>Questions tagged[html]</h4>
                            <p style={{ fontSize: '13px' }}>HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions regarding HTML should include a minimal reproducible example and some idea of what you're trying to achieve. This tag is rarely used alone and is often paired with CSS and JavaScript.</p>
                            <ButtonGroup>
                            <Button variant="primary">Watch tag</Button>
                            <Button variant="outline-secondary">Ignore tag</Button>
                            </ButtonGroup>

                        </Col>


                        <Col sm={2}>
                            <div   className="sticky">
                            <Button href="/askquestion" variant="primary" size="sm">AskQuestion</Button>
                        </div>
                        </Col>
                        <hr></hr>



                    </Row>
                </div>
                <div className="m-3">
                    <Row className="justify-content-md-center">

                        <Col sm={1}>
                           
                            <h5>   <p onClick={increment}>+</p>  {count}
                                    <p onClick={decrement}>-</p>
                            </h5>
                           
                        </Col>

                        <Col sm={7}>
                        <Link to="/listofanswers"   style={{ textDecoration: 'none' }}>

                            <p><span style={{ color: 'blue' }}>Can you use pure CSS & HTML to make a floating element that peeks <br></br>out of the border, but only if there is enough space?</span></p>
                            <p style={{ fontSize: '13px' }}>I would like to position an element to float over the border of another element, but only if there is enough space to the right of the element it floats in. So far I have tried .float-over-</p>
                            <ButtonGroup>
                            <Button variant="secondary" size="sm">html </Button>
                            <Button variant="secondary" size="sm">css </Button>
                            <Button variant="secondary" size="sm">javascript </Button>
                            <Button variant="secondary" size="sm">animation </Button>
                            </ButtonGroup>
                            <p style={{ fontSize: '13px' }}>   -1 Votes</p>
                            <p style={{ fontSize: '13px' }}>  0 answers</p>
                            <p style={{ fontSize: '13px' }}> 8 views</p>
                            </Link>
                           
                            <hr></hr>
                            <Link to="/listofanswers"   style={{ textDecoration: 'none' }}>

                            <p><span style={{ color: 'blue' }}>Can you use pure CSS & HTML to make a floating element that peeks <br></br>out of the border, but only if there is enough space?</span></p>
                            <p style={{ fontSize: '13px' }}>I would like to position an element to float over the border of another element, but only if there is enough space to the right of the element it floats in. So far I have tried .float-over-</p>
                            <ButtonGroup>
                            <Button variant="secondary" size="sm">html </Button>
                            <Button variant="secondary" size="sm">css </Button>
                            <Button variant="secondary" size="sm">javascript </Button>
                            <Button variant="secondary" size="sm">animation </Button>
                            </ButtonGroup>
                            <p style={{ fontSize: '13px' }}>   -1 Votes</p>
                            <p style={{ fontSize: '13px' }}>  0 answers</p>
                            <p style={{ fontSize: '13px' }}> 8 views</p>
                           </Link>
                             <hr></hr>
                             <Link to="/listofanswers"   style={{ textDecoration: 'none' }}>

                            <p><span style={{ color: 'blue' }}>Can you use pure CSS & HTML to make a floating element that peeks <br></br>out of the border, but only if there is enough space?</span></p>
                            <p style={{ fontSize: '13px' }}>I would like to position an element to float over the border of another element, but only if there is enough space to the right of the element it floats in. So far I have tried .float-over-</p>
                            <ButtonGroup>
                            <Button variant="secondary" size="sm">html </Button>
                            <Button variant="secondary" size="sm">css </Button>
                            <Button variant="secondary" size="sm">javascript </Button>
                            <Button variant="secondary" size="sm">animation </Button>
                            </ButtonGroup>
                            <p style={{ fontSize: '13px' }}>   -1 Votes</p>
                            <p style={{ fontSize: '13px' }}>  0 answers</p>
                            <p style={{ fontSize: '13px' }}> 8 views</p>
                           </Link>
                           <hr></hr>
                           <Link to="/listofanswers"   style={{ textDecoration: 'none' }}>

                           <p><span style={{ color: 'blue' }}>Can you use pure CSS & HTML to make a floating element that peeks <br></br>out of the border, but only if there is enough space?</span></p>
                            <p style={{ fontSize: '13px' }}>I would like to position an element to float over the border of another element, but only if there is enough space to the right of the element it floats in. So far I have tried .float-over-</p>
                            <ButtonGroup>
                            <Button variant="secondary" size="sm">html </Button>
                            <Button variant="secondary" size="sm">css </Button>
                            <Button variant="secondary" size="sm">javascript </Button>
                            <Button variant="secondary" size="sm">animation </Button>
                            </ButtonGroup>
                            <p style={{ fontSize: '13px' }}>   -1 Votes</p>
                            <p style={{ fontSize: '13px' }}>  0 answers</p>
                            <p style={{ fontSize: '13px' }}> 8 views</p>
                           </Link>
                        </Col>
                        
                        



                        <Col sm={4}>
                            <Card >
                                <div className="a1">
                                    <CardHeader ><h5>Hello World!</h5></CardHeader>
                                    <Card.Body>
                                        <CardText>Will antitrust suits benefit developers?</CardText>
                                        <CardText>Are long context windows the end of RAG?</CardText>
                                    </Card.Body>

                                    <CardHeader><h5>Featured on Meta</h5></CardHeader>
                                    <Card.Body>
                                        <CardText>New Focus Styles & Updated Styling for Button Groups</CardText>
                                        <CardText>Upcoming initiatives on Stack Overflow and across the Stack Exchange network</CardText>
                                        <CardText>Staging Ground is coming back and moving out of beta</CardText>
                                        <CardText>Temporary policy: Generative AI (e.g., ChatGPT) is banned</CardText>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>

                        
                      

                    </Row>
                </div>
            </Card>
         <hr></hr>
            <div className="m-3">
                    <Row className="justify-content-md-center">

                        <Col sm={1}>
                            <p style={{ fontSize: '13px' }}>   -1 Votes</p>
                            <p style={{ fontSize: '13px' }}>  0 answers</p>
                            <p style={{ fontSize: '13px' }}> 8 views</p>
                           
                        </Col>
                        <Col sm={7}>
                        <Link to="/listofanswers"   style={{ textDecoration: 'none' }}>

                            <p><span style={{ color: 'blue' }}>Can you use pure CSS & HTML to make a floating element that peeks <br></br>out of the border, but only if there is enough space?</span></p>
                            <p style={{ fontSize: '13px' }}>I would like to position an element to float over the border of another element, but only if there is enough space to the right of the element it floats in. So far I have tried .float-over-</p>
                          <ButtonGroup>
                            <Button variant="secondary" size="sm">html </Button>
                            <Button variant="secondary" size="sm">css </Button>
                            <Button variant="secondary" size="sm">javascript </Button>
                            <Button variant="secondary" size="sm">animation </Button>
                            </ButtonGroup>
                            <p style={{ fontSize: '13px' }}>   -1 Votes</p>
                            <p style={{ fontSize: '13px' }}>  0 answers</p>
                            <p style={{ fontSize: '13px' }}> 8 views</p>
                           
                            </Link>
                            <hr></hr>
                            <Link to="/listofanswers"   style={{ textDecoration: 'none' }}>

                            <p><span style={{ color: 'blue' }}>Can you use pure CSS & HTML to make a floating element that peeks <br></br>out of the border, but only if there is enough space?</span></p>
                            <p style={{ fontSize: '13px' }}>I would like to position an element to float over the border of another element, but only if there is enough space to the right of the element it floats in. So far I have tried .float-over-</p>
                          <ButtonGroup>
                            <Button variant="secondary" size="sm">html </Button>
                            <Button variant="secondary" size="sm">css </Button>
                            <Button variant="secondary" size="sm">javascript </Button>
                            <Button variant="secondary" size="sm">animation </Button>
                            </ButtonGroup>
                            <p style={{ fontSize: '13px' }}>   -1 Votes</p>
                            <p style={{ fontSize: '13px' }}>  0 answers</p>
                            <p style={{ fontSize: '13px' }}> 8 views</p>
                           </Link>
                             <hr></hr>
                             <Link to="/listofanswers"   style={{ textDecoration: 'none' }}>

                            <p><span style={{ color: 'blue' }}>Can you use pure CSS & HTML to make a floating element that peeks <br></br>out of the border, but only if there is enough space?</span></p>
                            <p style={{ fontSize: '13px' }}>I would like to position an element to float over the border of another element, but only if there is enough space to the right of the element it floats in. So far I have tried .float-over-</p>
                            <ButtonGroup>
                            <Button variant="secondary" size="sm">html </Button>
                            <Button variant="secondary" size="sm">css </Button>
                            <Button variant="secondary" size="sm">javascript </Button>
                            <Button variant="secondary" size="sm">animation </Button>
                            </ButtonGroup>
                            <p style={{ fontSize: '13px' }}>   -1 Votes</p>
                            <p style={{ fontSize: '13px' }}>  0 answers</p>
                            <p style={{ fontSize: '13px' }}> 8 views</p>
                           </Link>
                           <hr></hr>
                        </Col>
                          <Col sm={4}>       
                           <Card>
                          <CardHeader>Custom Filter</CardHeader>
                          <CardText>Creater a Custom filter</CardText>
                          
                           </Card>
                           
                          </Col>

                         </Row>
                </div>
         

        </div>
        </div>
    )
}
export default AnswerComponent;
