import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../services/userProfileService.jsx";

export const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    login({email})
      .then(r =>{
      if(r){
      setIsLoggedIn(true)
      navigate('/')
      }
      else{
        alert("Invalid email")
      }
    })
  };

  return (
    <Container
      fluid
    >
      <Form onSubmit={loginSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
          </FormGroup>
          {/* <FormGroup>
            <Label for="password">Password</Label>
            <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
          </FormGroup> */}
          <FormGroup>
            <Button>Login</Button>
          </FormGroup>
          {/* <em>
            Not registered? <Link to="/register">Register</Link>
          </em> */}
      </Form>
    </Container>
  );
}