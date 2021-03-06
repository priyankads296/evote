import "regenerator-runtime/runtime";
import React from "react";
import { login, logout } from "./utils";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// components
import Home from "./components/Home";
import NewPoll from "./components/NewPoll";
import PollingStation from "./components/PollingStation";


import getConfig from "./config";
const { networkId }  = getConfig(process.env.NODE_ENV || "development");

export default function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mx-auto'></Nav>
            <Nav>
              <Nav.Link href='/NewPoll'>New Poll</Nav.Link>
              <Nav.Link onClick={window.accountId === "" ? login : logout}>
                {window.accountId === "" ? "Login" : window.accountId}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/PollingStation'>
          <PollingStation />
        </Route>
        <Route exact path='/NewPoll'>
          <NewPoll />
        </Route>
      </Switch>
    </Router>
  );
}