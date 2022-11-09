import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import './Header.css'

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
  return (
    <Navbar className="border-3 border-bottom border-dark px-3" collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand className="logoAndName" href="">
          
        <h2><Link className="a" to='/'>UPTURN</Link></h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="a" to='/home'>Home</Link>
            <Link className="a" to='/services'>Services</Link>
            <Link className="a" to='/blog'>Blog</Link>
          </Nav>
          <Nav>
            {
              user?.uid? 
              <div className="d-flex">
                <Button className="mx-2"  variant="outline-dark" onClick={handleLogOut}>Log Out</Button>
              </div>
              :
              <>
            <Link className="a" to='/login'><Button  variant="outline-primary">Login</Button></Link>
            <Link className="a" to='/signup'><Button  variant="outline-primary">SignUp</Button></Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
