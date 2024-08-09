import './App.css';
import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import main from './img/main.jpg';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js'

function App() {

  let [keyboard] = useState(data);
  let navigate = useNavigate()

  return (
    <div className="App" >
      
      {/* <img src={main}/> */}
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">홈</Nav.Link>
              <Nav.Link href="/detail">상세페이지</Nav.Link>
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

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path="/" element={ 
          <>
          
            <div className="container">
              <div className="row">
                {
                  keyboard.map((a, i) =>{
                    return(
                        <List keyboard={keyboard[i]} i={i}></List>
                    )
                  })
                }
              </div>
            </div> 
          </>
          } /> 
        <Route path="/detail/:id" element={ <Detail keyboard={keyboard}/> } />

        <Route path="*" element={ <div>404페이지</div> } />
        <Route path="/about" element={ <About/> } >  
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
        </Route>
      </Routes>

    </div>
  );
}



function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function List(props) {
  return(
    <div className="col-md-4">
      <a href={`/detail/`+ props.i} style={{ textDecoration: 'none' }} >
        <img src={process.env.PUBLIC_URL + '/img/product-' + (props.i+1) +'.jpg'} width="80%" /> 
        <h4>{props.keyboard.price}</h4>
        <p>{props.keyboard.title}</p>
      </a>
    </div>
  )
}


export default App;
