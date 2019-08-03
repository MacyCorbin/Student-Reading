import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import AddBtn from "../components/AddBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/LoginForm";
import MainNav from "../components/MainNav";

class Main extends Component {
    state = {
        navbarIndex: 1
    };

    navBarSelection = (index) => {

        this.setState({ navbarIndex: index });
        //window.initialize();

    }


    render() {
        return (
            <Container fluid>
                <MainNav navBarSelection={this.navBarSelection}></MainNav>

                {this.state.navbarIndex == 1 ? (
                    <Row>

                        <Col size="md-12">
                            <Jumbotron>
                                <h1>Welcome to Book Buster!</h1>
                                <h2>Book Buster is a learning tool that keeps students on track with reading goals and teachers
                                    can view each student's progress.
                               </h2>
                            </Jumbotron>

                        </Col>

                    </Row>
                ) : (

                        <span />

                    )}

                <Row>

                    <Col size="md-12">
                        <form>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="Name"
                                placeholder="Name"
                            />

                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="Password"
                                placeholder="Password"
                            />

                            <FormBtn style="text-align: center"

                                onClick={this.handleFormSubmit}
                            >
                                Log In
                            </FormBtn>
                        </form>

                    </Col>

                </Row>

                <span />
            </Container>


        );
    }
}

export default Main;