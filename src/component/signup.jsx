
import { Container, Form, Button, FormControl, Card, CardBody, NavLink } from 'react-bootstrap';

import { useState, useEffect } from 'react';

import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
function SignupComponent(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const navigate = useNavigate();
  
    useEffect(() => {
      const adduser = localStorage.getItem("adduser");
      if (adduser === "3000") {
        navigate("/");
      }
    }, [navigate]);
  
    const handleAddUser = () => {
      const json = {
        "main_id":"8989877hhftgh67",
          "user_name"  :" username",
            "user_email" :"teste@gmail.com",
            "user_password" :"testpassword",
            "name"  :"test sai"
      };
  
      axios.post("https://gantasoft.com/askmedude/users/adduser.php", json)
        .then((result) => {
          if (result.data.trim().length > 0) {
            console.log(result.data);
            localStorage.setItem("userid", result.data.user_id);
            localStorage.setItem("adduser", "3000");
            navigate("/");
          } else {
            console.log("Failed to create user");
          }
        })
        .catch(error => {
          console.log('Signup API error:', error);
        });
    };
  
    return(<div   >
   


     <Container>
        <Card className='m-3'>
            <CardBody>
                <Form>
                    <h3>Create Your account</h3>
                    <p>By clicking “Sign up”, you agree to our <span style={{color:'blue'}}>terms of service </span>and <br></br>acknowledge you have read our <span style={{color:'blue'}}>privacy policy.</span></p>
                    <Form.Group>
                <Form.Label><h5>Name:</h5></Form.Label>

                <Form.Control type="" placeholder="" />
                </Form.Group>
                <Form.Group>
                <Form.Label><h5>Email:</h5></Form.Label>

                <Form.Control type="" placeholder="" />
                </Form.Group>
                <Form.Group>
                <Form.Label><h5>Password:</h5></Form.Label>

                <Form.Control type="" placeholder="" />
                <p style={{fontSize:'13px'}}>Must contain 8+ characters, including at least 1 letter and 1 number.</p>
                <Form.Label><h5>ConfirmPassword:</h5></Form.Label>
                <Form.Control type="" placeholder="" />
                <p style={{fontSize:'13px'}}>Must contain 8+ characters, including at least 1 letter and 1 number.</p>
                </Form.Group>
                <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        SignUp
      </Button>
      </div><br></br>
      <div className="d-grid gap-2">
      <Button variant='primary' size="lg">
          Sign up with Google
          </Button>
          </div><br></br>
      

                </Form>
            </CardBody>
        </Card>

     </Container>
    </div>)
}
export default SignupComponent