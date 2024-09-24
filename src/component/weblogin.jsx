import React, { useState } from "react";
import { CardBody, Container, Form, FormControl, Card, Button } from "react-bootstrap";

function WebloginComponent() {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const photo = event.target.elements.photo.files[0];

        if (!title || !description || !photo) {
            alert("Please fill in all the fields.");
            return;
        }

        
        alert("Form submitted successfully!");
    };

    return (
        <div  >
            <Container>
                <Card className="m-5" style={{ width: '50rem' }}>
                    <CardBody>
                        <Form onSubmit={handleSubmit}> 
                            <Form.Group>
                                <Form.Label><h5>Title:</h5></Form.Label>
                                <FormControl name="title" type="text" placeholder="Enter here your title" />
                            </Form.Group><br></br>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label><h5>Description</h5></Form.Label>
                                <Form.Control name="description" as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label><h5>Upload Photo Here</h5></Form.Label>
                                <Form.Control name="photo" type="file" />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default WebloginComponent;
