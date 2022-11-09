import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";


const SignUp = () => {
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const {createUser, updateProfileUser} = useContext(AuthContext)
  const handleregister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);
    createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user);
            form.reset()
            setError('')
            handleUpdateUserProfile(name,photoURL)
        })
        .catch(error =>
            {
                console.error(error)
                setError(error.message)
            })
  }

  const handleUpdateUserProfile = (name, photoURL)  =>{
    const profile = {
        displayName:name,
        photoURL: photoURL
    }
    updateProfileUser(profile)
    .then(()=>{})
    .catch(error =>{
        console.error(error);
    })
  }

  const handleChecked = event =>{
    setAccepted(event.target.checked);
  }
  return (
    <Container>
    <h2 className="text-center my-5">Welcome To Register Page</h2>
      <Form onSubmit={handleregister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Photo Url</Form.Label>
          <Form.Control
            name="photoURL"
            type="text"
            placeholder="Your Photo Url"
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleChecked} type="checkbox" label="Check me out" />
        </Form.Group>
        <Form.Text>Already Have An Account ? <Link to='/login'>Please Login</Link></Form.Text>
        <br />
        <Form.Text className="text-danger">{error}</Form.Text>
        <br />
        <Button variant="primary" type="submit" disabled={!accepted}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
