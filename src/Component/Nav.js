import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default class Nav extends React.Component{
    render (){
        return(
            <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">News</Navbar.Brand>
        </Container>
      </Navbar>
        )
    }
}