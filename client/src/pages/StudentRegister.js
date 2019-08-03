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

class StudentRegister extends Component {
    state = {
        navbarIndex: 1
      };
    render() {
        return (
            <Container fluid>
                <MainNav navBarSelection={this.navBarSelection}></MainNav>
                <Jumbotron>
                    <Row>
                        <Col size="md-12">
                        <form>
                            <Input
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name="Name"
                            placeholder="Name"
                            />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="Password"
                                placeholder="Password"
                            />
                            <Input
                                value={this.state.level}
                                onChange={this.handleInputChange}
                                name="level"
                                placeholder="Reading Level"
                            />
                            <FormBtn style="text-align: center"
                                onClick={this.handleFormSubmit}
                                >
                                Log In
                            </FormBtn>
                        </form>
                        </Col>
                    </Row>
                    </Jumbotron>
                <span />
            </Container>
           
        );
    }
}
export default StudentRegister;