import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import AddBtn from "../components/AddBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input,FormBtn} from "../components/LoginForm";
import MainNav from "../components/MainNav";

class WhatWeDo extends Component {
    state = {
        navbarIndex: 1
      };
    render() {
        return (
            <Container fluid>
                <MainNav navBarSelection={this.navBarSelection}></MainNav>
                {this.state.navbarIndex == 1 ? (
                    <Row>
                        <Col size="md-12">
                            
                            <h1>Reading is Fun!</h1>
                            <h2>For Teachers:
                            </h2>
                            <h2>For Students:
                            </h2>
                            
                        </Col>
                    </Row>
                ) : (
                        <span />
                    )}
                    
                <span />
            </Container>
        );
    }
}
export default WhatWeDo;