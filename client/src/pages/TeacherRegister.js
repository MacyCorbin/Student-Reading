import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";

import API from "../utils/API.js";

import { Col, Row, Container } from "../components/Grid";

import MainNav from "../components/MainNav";


 class TeacherRegister extends Component {
    state = {
        navbarIndex: 1,

     };

     //Teacher Registration
    registerTeacher = () => 
    
    {
        
        const google_profile = JSON.parse(window.sessionStorage.getItem('google_profile'));
        const id_token = window.sessionStorage.getItem('idtoken')
        var toBeRegistered = {};

        if(google_profile){
         toBeRegistered = {
            id_token: id_token,
            name: google_profile.fullName
         }
        }else{
            return console.log("Not signed in to Google.");
        }

         API.registerTeacher(toBeRegistered)
         .then(function(res){
             if(res){
                 console.log("Teacher registered!");
                 window.location = window.origin + "/teacher";
             }
         })
         .catch(err=>console.log(err))

    }



     handleFormSubmit = event => {

         event.preventDefault();

        if(window.sessionStorage.getItem('google_profile') && window.sessionStorage.getItem('idtoken')){
        this.registerTeacher();
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
                                <h1>Teacher Register</h1>
                            </Jumbotron>

                             <div>
                                <div style={{margin:'auto', width:'200px', marginBottom:"10px"}} className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
                            </div>

                             <div style={{margin:"auto", width:"fit-content", display:"block"}} onClick={this.handleFormSubmit} className="btn btn-success">Register</div>

                         </Col>
                    </Row>
                ) : (
                        <span />
                    )}

                 <span />
                {/* <Jumbotron> */}
                    {/* <Row>
                        <Col size="md-12"> */}
                                {/* <h2 style={{color:"#E26A25"}}> Teacher Register</h2>
                                <form >
                                    <Input
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                    name="Name"
                                    placeholder="Name"
                                    />
                                    {/* <Input
                                        // type={this.state.hidden ? "password" : "text"}
                                        value={this.state.password}
                                        onChange={this.handleChange.bind(this)}
                                        // onChange={this.handlePasswordChange}
                                        name="Password"
                                        placeholder="Password"
                                    /> 
                                    <PasswordMask
                                        value={this.state.password}
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={this.handleChange.bind(this)}
                                        inputStyles={{
                                            padding: '8px 15px',
                                            margin: "0 33% 0 33%",
                                            width: "33%",
                                            fontSize: '16px',
                                            borderRadius: "4px",
                                            borderStyle: "solid",
                                            borderColor:"#CFD4D8",
                                            borderWidth: "1px"
                                        }}
                                        inputClassName="PasswordMaskInput"
                                        buttonStyles={{
                                            position: 'absolute',
                                            top: '50%',
                                            right: '34%',
                                            marginTop: '-20px',
                                            padding: '10px 10px',
                                            background: '#CFD4D8',
                                            borderRadius: '2px',
                                            color: '#000',
                                            textAlign: 'center',
                                            textDecoration: 'none',
                                            WebkitUserSelect: 'none',
                                            MozUserSelect: 'none',
                                            userSelect: 'none',
                                            width: '61px',
                                            height: "41px"
                                        }}
                                    />
                                    
                                    <FormBtn style="text-align: center"
                                        onClick={this.handleFormSubmit}
                                        >
                                        Submit
                                    </FormBtn>
                                </form> */}
                            {/* </Col>
                        </Row> */}
                    {/* </Jumbotron>
                    <div>
                        <div style={{margin:'auto', width:'200px', marginBottom:"10px"}} className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
                    </div>
                     <div style={{margin:"auto", width:"fit-content", display:"block"}} className="btn btn-success" id="enter">Enter</div>
                 <span /> */}
            </Container>
        );
    }
}
export default TeacherRegister; 