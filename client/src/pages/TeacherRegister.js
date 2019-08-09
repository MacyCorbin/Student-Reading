import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import AddBtn from "../components/AddBtn";
import API from "../utils/API.js";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input,FormBtn} from "../components/LoginForm";
import MainNav from "../components/MainNav";
import PasswordMask from 'react-password-mask';
// import {Item, Input, Icon, Label} from "native-base"

class TeacherRegister extends Component {
    state = {
        navbarIndex: 1,

    };

    //Teacher Registration
    testAPI = () => {API.registerTeacher({

        id_token: sessionStorage.getItem('idtoken'),
        name: JSON.parse(sessionStorage.getItem('google_profile')).fullName

        }).then(function(res){

            if(res){
                window.location = window.origin + "/teacher";
            }
        }).catch(err => console.log(err))
    }

   

    handleFormSubmit = event => {

        event.preventDefault();
        this.testAPI();

    };

   

    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //       hidden: true,
    //       password: ""
    //     };
    
    //     this.handlePasswordChange = this.handlePasswordChange.bind(this);
    //     this.toggleShow = this.toggleShow.bind(this);
    //   }
    
    //   handlePasswordChange(e) {
    //     this.setState({ password: e.target.value });
    //   }
    
    //   toggleShow() {
    //     this.setState({ hidden: !this.state.hidden });
    //   }
    
    //   componentDidMount() {
    //     if (this.props.password) {
    //       this.setState({ password: this.props.password });
    //     }
    // }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    
    render() {
        return (
            <Container fluid>
                <MainNav navBarSelection={this.navBarSelection}></MainNav>
                <Jumbotron>
                    <Row>
                        <Col size="md-12">
                                <h2 style={{color:"#E26A25"}}> Teacher Register</h2>
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
                                    /> */}
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
                                </form>
                            </Col>
                        </Row>
                    </Jumbotron>
                <span />
            </Container>
        );
    }
}
export default TeacherRegister;