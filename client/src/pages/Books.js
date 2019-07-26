import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import AddBtn from "../components/AddBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    bookSearch: []
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


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
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
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
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
        <Row>
          {this.state.bookSearch.length ? (
            <List>
              {this.state.bookSearch.map((book, index) => (
                <ListItem key={index}>
                  <strong>
                    {book.volumeInfo.title} by {book.volumeInfo.authors}
                  </strong>
                  <AddBtn onClick={()=> this.saveBook(book.volumeInfo.title, book.volumeInfo.authors)}></AddBtn>
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Row>
      </Container>


    );
  }
}

export default Books;
