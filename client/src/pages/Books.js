import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import AddBtn from "../components/AddBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

import StudentNav from "../components/StudentNav";

class Books extends Component {
  state = {
    books: [],
    bookSearch: [],
    navbarIndex: 1
  };

  componentDidMount() {
    this.loadBooks();
  }

  testAPI = () => {

    //create student
    const student = {
    name: "eric",
    username: "eric",
    password: "eric",
    lexile: 100,
    }

    //create teacher
    const teacher = {
      name: "teacher",
      username: "teacher",
      password: "teacher"
    }

    API.registerStudent(student);
    API.registerTeacher(teacher);

    API.login({username: "eric", password: "eric"})
     .then(function(response){
      console.log(response);
     })
     .catch(err => console.log(err))

     API.login({username: "teacher", password: "teacher"})
     .then(function(response){
      console.log(response);
     })
     .catch(err => console.log(err))

     API.createAssignment({due_date: new Date()});

     API.getAssignments()
      .then(response => console.log(response))
      .catch(err => console.log(err))

    API.getBooks()
    .then(response => console.log(response))
    .catch(err => console.log(err))


  }


  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "" })
      )
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.testAPI();



    if (this.state.title) {

      API.searchBook(this.state.title)
        .then(res => {
          console.log(res);
          this.setState({ bookSearch: res.data.items });
        })
        .catch(err => console.log(err));
    }

  }

  navBarSelection = index => {
    this.setState({navbarIndex: index});
  }



  render() {
    return (
      <Container fluid>
        <StudentNav navBarSelection={this.navBarSelection}></StudentNav>

        {this.state.navbarIndex == 1 ? (
          <Row>

            <Col size="md-12">
              <Jumbotron>
                <h1>Readings</h1>
              </Jumbotron>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <ListItem key={book._id}>
                      <Link to={"/books/" + book._id}>
                        <strong>
                          {book.book_name} by {book.author}
                        </strong>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Col>

          </Row>
        ) : (

            <span />

          )}

        {this.state.navbarIndex == 2 ? (
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Profile</h1>
              </Jumbotron>
              <div>Hi, <span></span></div>
              <div>Your lexile level is <span></span></div>
              <div>Your grade is <span></span></div>
            </Col>
          </Row>

        ) : (

            <span />

          )}




        {this.state.navbarIndex == 3 ? (

          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Book Search</h1>
              </Jumbotron>
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <FormBtn
                  // disabled={!(this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Book
              </FormBtn>
              </form>
            </Col>
            
            <Col size="md-12">
              {this.state.bookSearch.length ? (
                <List>
                  {this.state.bookSearch.map((book, index) => (
                    <ListItem key={index}>
                      <strong>
                        {book.volumeInfo.title} by {book.volumeInfo.authors}
                      </strong>
                      <AddBtn onClick={() => this.saveBook(book.volumeInfo.title, book.volumeInfo.authors)}></AddBtn>
                    </ListItem>
                  ))}
                </List>
              ) : (
                  <h3>No Results to Display</h3>

                )}
            </Col>
          </Row>

        ) : (

            <span />

          )}



      </Container>


    );
  }
}

export default Books;
