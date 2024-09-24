import { useEffect, useState } from 'react';
import React from 'react';
import { Container, Form, Button, FormControl, Card, CardBody, Nav } from 'react-bootstrap';
import SignupComponent from './signup';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

function LoginComponent() {

  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("loginstatus");
    if (loginStatus === "3000") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = () => {
    const json = {
      "main_id": "8989877hhftgh67",
      "user_name": email,
      "user_password": password
    };

    axios.post("https://gantasoft.com/askmedude/users/userlogin.php", json)
      .then((result) => {
        if (result.data.trim().length > 0) {
          console.log(result.data);
          localStorage.setItem("userid", result.data.user_id); 
          localStorage.setItem("loginstatus", "3000");
        } else {
      
        }
      })
      .catch(add => {
       
        console.log('Login API add :', add);
      });
  };

  return (
    <div>
      <Container className='mt-3'>
        <Card>
          <CardBody>
            <Form>
              <h3 className='text-center'>Join Askmedude</h3>
              <p>By Clicking "Sign up", you agree to our <span style={{ color: 'blue' }}>terms of service</span> and<br></br>
                acknowledge you have read our<span style={{ color: 'blue' }}> privacy policy.</span></p>
              <p>-------------------------------OR--------------------------------</p>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Sign up with Google
                </Button>
              </div>
              <p>-------------------------------OR------------------------------</p>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="8+ Characters(at least 1 letter & 1 number )@" onChange={(e) => setPassword(e.target.value)} />
                <Form.Label><span style={{ color: 'blue' }}>Forgot Password?</span></Form.Label>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={handleLogin}>
                  Login
                </Button>
              </div>

              <p className='ms-5'>Don't have an account? <Link to="/signup">Signup</Link></p>
              <p>Do you have an account? <span style={{ color: 'blue' }}>Login Here</span></p>
            </Form>
          </CardBody>
        </Card>
      </Container>
      <main>
        {login && <SignupComponent />}
      </main>
    </div>
  );
};

export default LoginComponent;
