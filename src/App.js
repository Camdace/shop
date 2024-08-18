import './App.css';
import { useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import main from './img/main.jpg';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js'
import axios from 'axios'
import Cart from './routes/Cart.js'

function App() {

  let [keyboard, setKeyboard] = useState(data);
  let navigate = useNavigate()

  return (
    <div className="App" >
      
      {/* <img src={main}/> */}
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand href="/">Key-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Products">Products</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/Register">Register</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
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
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>

      <button onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
          console.log(결과.data)
        })
        .catch(()=>{
          console.log('실패함')
        })
      }}>버튼</button>

      <Button variant="outline-secondary" onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
          console.log(결과.data)
        })
        .catch(()=>{
          console.log('실패함')
        })
      }}>More</Button>{' '}
      
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
        <img src={process.env.PUBLIC_URL + '/img/product-' + (props.i) +'.jpg'} width="80%" /> 
        <h4>{props.keyboard.price}</h4>
        <p>{props.keyboard.title}</p>
      </a>
    </div>
  )
}


export default App;
