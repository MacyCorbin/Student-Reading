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
// import PasswordMask from 'react-password-mask';

class StudentRegister extends Component {
    state = {
        navbarIndex: 1
    };

    

    registerStudent = () => {
        const student = {
            id_token: window.sessionStorage.getItem('idtoken'),
            name: JSON.parse(window.sessionStorage.getItem('google_profile')).fullName

            
        }
        
        API.registerStudent(student);
    }

   

    handleFormSubmit = event => {
        event.preventDefault();
        

        this.registerStudent();

    };

   
    

    render() {
        return (
            <Container fluid>
                <MainNav navBarSelection={this.navBarSelection}></MainNav>
                {this.state.navbarIndex == 1 ? (
                    <Row>
                        <Col size="md-12">
                            <Jumbotron>
                                <h1>Student Register</h1>
                            </Jumbotron>

                            <div>
                                <div style={{margin:'auto', width:'200px', marginBottom:"10px"}} className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
                            </div>

                            <button style={{margin:"auto", width:"fit-content", display:"block"}} onClick={this.handleFormSubmit} className="btn btn-success" id="enter">Enter</button>

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
export default StudentRegister;