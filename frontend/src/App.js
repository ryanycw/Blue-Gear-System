import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Register from './Pages/Register'
import HomePage from './Pages/HomePage'
import Logout from './Pages/Logout'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">BLUE GEAR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/register'>Register</Nav.Link>
            <Nav.Link href='/logout'>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route component={NotFound} />
      </Switch>
  </Router>
  );
}

export default App;