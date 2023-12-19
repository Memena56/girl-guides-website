// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import News from "./News";
import Contact from "./Contact";
import Resources from "./Resources";
import Shop from "./Shop";

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Fanilon'I Madagasikara</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Link href="/News">Actualités</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Nav.Link href="/Resources">Ressources</Nav.Link>
              <Nav.Link href="/Shop">Shop</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
