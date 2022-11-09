import { GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hook/useTitle";

const Login = () => {
    useTitle('login')
    const [error, setError] = useState('')
    const {userLogin, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const HandleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        userLogin(email,password)
        .then(result => {
            const user = result.user
            console.log(user);
            form.reset()
            navigate(from, {replace: true})
            setError('')
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        }
        )
    }
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () =>{
      googleLogin(googleProvider)
      .then(result =>{
        const user = result.user
        console.log(user);
        navigate(from, {replace: true})
        setError('')
      })
      .catch(error => {
        console.log(error);
      })
    }

  return (
    <Container>
      <h2 className="text-center my-5">Welcome To Login Page</h2>
      <Form onSubmit={HandleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Text className="my-5">Haven't Any Account ? <Link to='/register'>Please Register</Link></Form.Text>
        <br />
        <Form.Text className="text-danger">{error}</Form.Text>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="my-5">
        <h2 className="text-center">Or Using</h2>
        <div className="d-lg-flex justify-content-between">
        <Button onClick={handleGoogleLogin} className="w-100 p-2" variant="primary"><FaGoogle></FaGoogle> Login With Google</Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
