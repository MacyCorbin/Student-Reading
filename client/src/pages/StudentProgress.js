import React from "react";
import BookResult from "../components/BookResult";
//import { Row, Container } from "../components/Grid";

function StudentProgress(props) {
    if(props.path === "/") {
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
}

export default StudentProgress;