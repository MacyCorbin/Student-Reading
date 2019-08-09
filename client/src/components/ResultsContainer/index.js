import React from "react";
import BookResult from "../BookResult";

function ResultsContainer(props) {
   
    if(props.path === "/teacher") {
       //const date = req.body.due_date
        return(
            <div id="resultsContainer">
                <h3>Pick a Book to Read</h3>
               
                {props.bookData.map((assignment) => { 
                    const bookInfo = assignment.volumeInfo; 
                    const bookInfo1 = assignment.id;                 
                    return <BookResult
                    title={bookInfo.title}
                    authors={bookInfo.authors}
                    description={bookInfo.description}
                    book_length={bookInfo.pageCount}
                    googlebook_id ={bookInfo1}
                    due_date = {props.due_date}     
                    book_name={bookInfo.title}
                    link={bookInfo.canonicalVolumeLink}                     
                    img={bookInfo.imageLinks}                   
                    path={props.path}
                    key={assignment.id}/>
                })}
            </div>
        );
    } else if(props.path === "/saved") {
        if(props.savedBooks.length > 0) {
            return(
                <div id="resultsContainer">
                    <h3>Assignment List</h3>
                    {props.savedBooks.map((assignment) => {
                        return <BookResult
                        title={assignment.title}
                        authors={assignment.authors}
                        description={assignment.description}
                        book_length={assignment.book_length}
                        book_name={assignment.title}  
                        googlebook_id={assignment.googlebook_id}
                        link={assignment.link}
                        img={assignment.img}                        
                        id={assignment._id}
                        due_date= {assignment.due_date.toString().split('T')[0]}
                        path={props.path}
                        key={assignment._id}/>
                    })}
                </div>
            );
        } else {
            return(
                 <div id="resultsContainer">
                    <h3>Assignment List</h3>
                    <p>No Assignment Found.</p>
                </div>
            );
        }
    }
}

export default ResultsContainer;