import './App.css';
import { useState } from 'react';
import { Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './inc/Home';
import Product from './inc/Product';
// import main from './img/main.jpg';
import data from './data.js';

function App() {

  let [keyboard] = useState(data);

  return (
    <div className="App" >
      
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

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            149,000원<br/>
            레이저코리아 헌츠맨 V2 리니어 한글 Razer Huntsman V2
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            149,000원<br/>
            레이저코리아 헌츠맨 V2 리니어 한글 Razer Huntsman V2
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            149,000원<br/>
            레이저코리아 헌츠맨 V2 리니어 한글 Razer Huntsman V2
          </Card.Text>
        </Card.Body>
      </Card>

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

      <Router>
        <Link to="/">Home</Link> 
        <Link to="/Product">Product</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
      </Router>
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
