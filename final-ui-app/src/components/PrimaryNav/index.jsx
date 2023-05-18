import React from 'react'
import { Container, Row, Col,Card } from "react-bootstrap";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useNavigate } from 'react-router-dom';
import './index.css'

const Index = () => {
const navigate=useNavigate()

const gotoHome=()=>{
  navigate('/')
}



  return (
  <>
  
  

<Navbar collapseOnSelect expand="lg"  className="custom-nav " >
      <Container>
        <Navbar.Brand href="#home" style={{color:"white",fontWeight:"600"}} onClick={gotoHome}>
          <img src="https://img.freepik.com/free-icon/letter_318-611112.jpg?size=626&ext=jpg&ga=GA1.1.986070542.1652838209&semt=ais" className="logo"/>
          Story Maker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:"white"}}/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{color:"white",fontWeight:"600"}}>Home</Nav.Link>
            <Nav.Link href="/postblog" style={{color:"white",fontWeight:"600"}}>Post Blog</Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

   

  </>
  )
}

export default Index;