import React from "react";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";
import Nav from "../components/Nav";

class StudentProgress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: []
        }
    }

    componentWillMount() {
        API.getBooks().then(
            (response) => {
                console.log(response);
                this.setState({ savedBooks: response.data });


            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return (
<main>
            <Nav></Nav>
            <div>

                <main>
                    <ResultsContainer savedBooks={this.state.savedBooks} path={this.props.match.path} />
                </main>


            </div>

</main>

        );
        /*if(props.path === "/") {
            return(
    
                
                <div id="resultsContainer">
    
    
    
    
    
                    <h3>Results Found</h3>
                    {props.bookData.map((book) => {
                        const bookInfo = book.volumeInfo;
                        return <BookResult
                        title={bookInfo.title}
                        authors={bookInfo.authors}
                        description={bookInfo.description}
                        link={bookInfo.canonicalVolumeLink}
                        img={bookInfo.imageLinks}
                        due_date = {book.due_date}
                        path={props.path}
                        key={book.id}/>
                       
                    })}
                </div>
            );
        } else if(props.path === "/StudentProgress") {
            if(props.savedBooks.length > 0) {
                return(
                    <div id="resultsContainer">
                        <h3>Saved Books no way</h3>
    
     
                        {props.savedBooks.map((book) => {
                            return <BookResult
                            title={book.title}
                            authors={book.authors}
                            description={book.description}
                            link={book.link}
                            img={book.img}
                            id={book._id}
                            due_date = {book.due_date}
                            path={props.path}
                            key={book._id}/>
                        })}
                    </div>
                );
            } else {
                return(
                     <div id="resultsContainer">
                        <h3>Saved Books</h3>
    
                        <p>No saved books.</p>
    
                        <div class="container">
                        <div class="row">
                        <div class="col">Student Name </div> 
                        <div class="col">Book Name</div>
                        <div class="col">Author</div>
                        <div class="col">Page Read</div>
                        <div class="col">Book Lenght</div>
                        <div class="col">% Complete</div>
                        <div class="col">Due Date</div>
                        
                        </div>  
                    </div>
                    </div>
                );
            }
        }
    }*/

    }
}

export default StudentProgress;