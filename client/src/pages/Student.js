import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";

import API from "../utils/API";

import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


import StudentNav from "../components/StudentNav";
import BookViewer from "../components/bookViewer";

class Books extends Component {
  state = {
    books: [],
    bookIndex: 0,
    navbarIndex: 1,
    googleBookId: '',
    page: 1,
    timer: 30,
    timerRef: null
  };

  componentDidMount() {
    this.loadBooks();

  }

  loadBooks = () => {
    API.getMyBooks(JSON.parse(sessionStorage.getItem('bookBusterStudent'))._id)
      .then(res => {
        this.setState({ books: res.data })
        //console.log(res);
      }
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
    this.loadBooks();
    //window.initialize();

  }

  logout = () => {

    window.location = window.origin;
    sessionStorage.removeItem('bookBusterStudent');
    sessionStorage.removeItem('google_profile');
    sessionStorage.removeItem('idtoken');

  }

  /*showSearch = (index) => {

    this.navBarSelection(3);
    this.setState({bookSearchIndex:index})

  }*/

  /*updateBook = (searchedBook) => {
    var book = this.state.books[this.state.bookSearchIndex];
    console.log(book, searchedBook);
    API.updateBook(book._id, {book_name: searchedBook.volumeInfo.title, author: searchedBook.volumeInfo.authors.toString(), googlebook_id: searchedBook.id, book_length: searchedBook.volumeInfo.pageCount})
    .catch(err=> console.log(err))
    this.loadBooks();
  }*/

  /*showReader = (googlebook_id) => {
    this.navBarSelection(4);
    console.log('hi');
    window.initialize(googlebook_id);
    var timerRef = setInterval(this.decrementTimer, 1000);
    console.log("timerref", timerRef);
    console.log('hit');
    this.setState({timerRef: timerRef});

  }*/
  //using function(event )... changes this
  goToPage = (event) => {
    if (event.key === 'Enter') {
      console.log(this.state.page);
      console.log(window.viewer.goToPage(this.state.page));
      //console.log(window.viewer.getPageNumber());
      this.resetTimer();
      this.setState({ page: window.viewer.getPageNumber() }, () => {
        API.updateBook(this.state.books[this.state.bookIndex]._id, { on_page: this.state.page });
      });
    }
  }


  nextPage = () => {

    window.viewer.nextPage();
    this.resetTimer();
    this.setState({ page: window.viewer.getPageNumber() }, () => {
      API.updateBook(this.state.books[this.state.bookIndex]._id, { on_page: this.state.page });
    });

  }

  prevPage = () => {

    window.viewer.previousPage();
    this.resetTimer();
    //console.log(window.viewer.getPageNumber());
    this.setState({ page: window.viewer.getPageNumber() }, () => {
      API.updateBook(this.state.books[this.state.bookIndex]._id, { on_page: this.state.page });
    });

  }

  setPage = (pageNumber) => {

    this.setState({ page: pageNumber });

  }

  resetTimer = () => {

    this.setState({ timer: 30 });

    if (!this.state.timerRef) {
      var ref = setInterval(this.decrementTimer, 1000);
      this.setState({ timerRef: ref })
    }


  }

  decrementTimer = () => {

    var timer = this.state.timer;
    var book = this.state.books[this.state.bookIndex];

    if (timer > 1) {
      this.setState((state) => ({ timer: state.timer - 1 }));
    } else if (this.state.navbarIndex === 4) {
      console.log(book.book_name);
      this.setState((state) => ({ timer: state.timer - 1 }));
      API.updateBook(book._id, { pages_read: book.pages_read + 1 });
      window.displayGoodJob();
      clearInterval(this.state.timerRef);
      this.setState({ timerRef: null });
      this.loadBooks();
    }

  }

  render() {
    return (
      <Container fluid>

        <StudentNav logout={this.logout} navBarSelection={this.navBarSelection} showViewer={this.showViewer}></StudentNav>
        
        {this.state.navbarIndex === 1 ? (
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Readings</h1>
              </Jumbotron>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map((book, index) => (
                    <ListItem key={book._id}>
                      <Row>

                        <Col size="md-3">
                          <img src={book.img.smallThumbnail}></img>
                        </Col>
                        <Col size="md-3">
                          <div style={{ fontSize: "20px" }}>{book.book_name} by {book.authors.join(", ")}</div>
                          <div>Pages read: {book.pages_read}</div>
                          <div>Book length: {book.book_length}</div>
                        </Col>
                        <Col size="md-3">
                          <div>{book.description.slice(0, 200) + "..."}</div>
                          <div className="btn btn-success"><a style={{ color: 'white' }} href={book.link}>Info</a></div>
                        </Col>

                        <Col size="md-3">
                          <div className="btn btn-success" style={{ float: 'right' }} onClick={() => this.setState({ bookIndex: index, googleBookId: book.googlebook_id, navbarIndex: 4 })}>Read</div>
                        </Col>

                      </Row>
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

        {/*this.state.navbarIndex == 2 ? (
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Profile</h1>
              </Jumbotron>
              <div>Hi, {JSON.parse(sessionStorage.getItem('google_profile')).fullName}<span></span></div>
            </Col>
          </Row>

        ) : (

            <span />

        )*/}




        {/*{/this.state.navbarIndex == 3 ? (

          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Book Search</h1>
              </Jumbotron>
              <div>Due: {this.state.books[this.state.bookSearchIndex].due_date.split('T')[0]}</div>
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
                      <AddBtn onClick={() => this.updateBook(book)}></AddBtn>
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

        )*/}


        {this.state.navbarIndex === 4 ? (

          <Row>
            <Col size="md-3">
              <div className="btn-group">
                <span style={{ width: "50px" }} className="btn btn-success" onClick={this.prevPage}>{'<'}</span>
                <span style={{ borderLeft: "1px solid green", width: "50px" }} className="btn btn-success" onClick={this.nextPage}>{'>'}</span>
                <span className="btn">Go to page: <input type="text" style={{ width: "50px" }} onKeyPress={this.goToPage} name="page" value={this.state.page} onChange={this.handleInputChange}></input></span>
                <span className="btn"><span className="fa fa-clock-o"></span>{this.state.timer}</span>
              </div>
            </Col>
            <BookViewer setPage={this.setPage} startAtPage={this.state.books[this.state.bookIndex].on_page} googleBookId={this.state.googleBookId} resetTimer={this.resetTimer} timerRef={this.state.timerRef} decrementTimer={this.decrementTimer}></BookViewer>

            {//not entirely sure why ()=> needed here but needed/old note
            }
          </Row>
        ) : (

            <span />

          )}





      </Container>


    );
  }
}

export default Books;
