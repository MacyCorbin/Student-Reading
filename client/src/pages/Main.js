import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import AddBtn from "../components/AddBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

import MainNav from "../components/MainNav";

class Main extends Component {
    
  
  
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
                {this.state.books.length ? (
                  <List>
                    {this.state.books.map(book => (
                      <ListItem key={book._id}>
                        <Link to={"/books/" + book._id}>
                          <strong>
                            {book.title} by {book.author}
                          </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
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
              </Col>
            </Row>
  
          ) : (
  
              <span />
  
            )}
  
  
  
  
          {this.state.navbarIndex == 3 ? (
  
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>Search for book by title</h1>
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
  
export default Main;