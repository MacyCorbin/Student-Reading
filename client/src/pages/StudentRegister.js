import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";

import API from "../utils/API";

import { Col, Row, Container } from "../components/Grid";


import MainNav from "../components/MainNav";


 class StudentRegister extends Component {
    state = {
        navbarIndex: 1
    };



     registerStudent = () => 
     
     {
        console.log('registerStudent function called');
        const google_profile = JSON.parse(window.sessionStorage.getItem('google_profile'));
        const id_token = window.sessionStorage.getItem('idtoken')
        var toBeRegistered = {};

        if(google_profile){
         toBeRegistered = {
            id_token: id_token,
            name: google_profile.fullName
         }
         console.log("toBeRegistered Object created");
        }else{
            return console.log("Not signed in to Google.");
        }

         API.registerStudent(toBeRegistered)
         .then(function(res){
             console.log('API.registerStudent.then()...');
             if(res){
                 console.log("Student registered!");
                 window.location = window.origin + "/student";
             }
         })
         .catch(err=>console.log(err))

    }



     handleFormSubmit = event => {
        event.preventDefault();

        if(window.canEnterOrRegisterBool){
         this.registerStudent();
        }

     };




     render() {
        return (
            <Container fluid>
                <MainNav navBarSelection={this.navBarSelection}></MainNav>
                {this.state.navbarIndex === 1 ? (
                    <Row>
                        <Col size="md-12">
                            <Jumbotron>
                                <h1>Student Register</h1>
                            </Jumbotron>

                             <div>
                                <div style={{margin:'auto', width:'200px', marginBottom:"10px"}} className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
                            </div>

{/*id='enter' only should be used for entering student or teacher page, sorry*/}
                             <button style={{margin:"auto", width:"fit-content", display:"block"}} onClick={this.handleFormSubmit} className="btn btn-success">Register</button>

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