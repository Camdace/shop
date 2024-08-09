import './App.css';
import { useState } from 'react';
import { Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import main from './img/main.jpg';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [keyboard] = useState(data);

  return (
    <div className="App" >

      <Routes>
        <Route path="/detail" element={ <div>상세페이지임</div> } />
        <Route path="/about" element={ <div>어바웃페이지임</div> } />
      </Routes>
      
      {/* <img src={main}/> */}
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container">
        <div className="row">
          {/* <List keyboard={keyboard[0]} i={1}></List>
          <List keyboard={keyboard[1]} i={2}></List>
          <List keyboard={keyboard[2]} i={3}></List> */}
          {
            keyboard.map((a, i) =>{
              return(
                <List keyboard={keyboard[i]} i={i}></List>
              )
            })
          }
        </div>
      </div>

      
    </div>
  );
}

function List(props) {
  return(
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + '/img/product-' + (props.i+1) +'.jpg'} width="80%" /> 
      <h4>{props.keyboard.price}</h4>
      <p>{props.keyboard.title}</p>
    </div>
  )
}


export default App;
