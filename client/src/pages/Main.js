import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
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

                {this.state.navbarIndex === 1 ? (
                    <Row>

                        <Col size="md-12">
                            <Jumbotron>
                                <h1 style={{paddingTop:"3%"}}>Welcome to BookBuster!</h1>
                                <h2>BookBuster is a learning tool that keeps students on track with reading goals and teachers
                                    can view each student's progress.
                               </h2>
                            </Jumbotron>

                            <div>
                                <div style={{margin:'auto', width:'200px', marginBottom:"10px"}} className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
                            </div>

                            <div style={{margin:"auto", width:"fit-content", display:"block"}} className="btn btn-success" id="enter">Enter</div>

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

export default Main;