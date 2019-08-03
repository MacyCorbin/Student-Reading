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
import BookViewer from "../components/bookViewer";

class Books extends Component {
  state = {
    books: [],
    bookSearch: [],
    navbarIndex: 1
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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




    if (this.state.title) {

      API.searchBook(this.state.title)
        .then(res => {
          console.log(res);
          this.setState({ bookSearch: res.data.items });
        })
        .catch(err => console.log(err));
    }

  }

  saveBook = (title, author) => {
    var authorString = author.toString();
    console.log(title, authorString);
    API.saveBook({
      title: title,
      author: authorString
    })
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  navBarSelection = (index) => {

    this.setState({ navbarIndex: index });
    //window.initialize();

  }


  render() {
    return (
      <Container fluid>
        <StudentNav navBarSelection={this.navBarSelection} showViewer={this.showViewer}></StudentNav>

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
                      <AddBtn onClick={() => this.updateBook()}></AddBtn>
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


        {this.state.navbarIndex == 4 ? (

          <Row>
            <BookViewer></BookViewer>
          </Row>
         

        ) : (

            <span />

          )}



      </Container>


    );
  }
}

export default Books;
