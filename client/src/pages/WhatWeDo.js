import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import MainNav from "../components/MainNav";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';



 class WhatWeDo extends Component {
    state = {
        navbarIndex: 1
    };

     render() {
        return (
            <Container fluid>
                <MainNav navBarSelection={this.navBarSelection}></MainNav>
                {this.state.navbarIndex === 1 ? (
                    <Row>
                        <Col size="md-12">
                            <div style = {{ margin: "30px"}}>
                            <CardDeck>
                                <Card >
                                    <Card.Img variant="top" src="../teacher.jpg" />
                                    <Card.Body style = {{ border: "solid 1px #29B34C"}}>
                                    <Card.Title>Teachers</Card.Title>
                                    <Card.Text>
                                        With BookBuster teachers can view their students' reading progression with
                                        student selected books or teacher reading assignments. Teachers can create assignments with
                                        ease and once they are completed the assignment can be deleted. BookBuster provides easier 
                                        communication between the teachers and parents by automatically updating student advancement 
                                        through books.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card style = {{ margin: "0px 30px 0px 30px"}}>
                                    <Card.Img variant="top" src="../family-reading.jpg" />
                                    <Card.Body style = {{ border: "solid 1px #FAD902"}}>
                                    <Card.Title>Parents</Card.Title>
                                    <Card.Text>
                                        BookBuster provides literature for parents and children to read. 
                                        Families explore new books with our easy searching and kids can discover the fun in reading.
                                        Parents can enjoy participating in their child's reading development and see their child's 
                                        progression from week to week.
                                    </Card.Text>
                                    </Card.Body>
                                    
                                </Card>
                                <Card >
                                    <Card.Img variant="top" src="../student.png" />
                                    <Card.Body style = {{ border: "solid 1px #E26A25"}}>
                                    <Card.Title>Students</Card.Title>
                                    <Card.Text>
                                        BookBuster provides books for all ages, whether it be family reading for kindergarteners
                                        or book assignments for high school. 
                                    </Card.Text>
                                    </Card.Body>
                                    
                                </Card>
                                </CardDeck>
                            </div>
                                
                            
  
                            
                            
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