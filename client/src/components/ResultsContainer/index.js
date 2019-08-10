import React from "react";
import BookResult from "../BookResult";
import StudentResult from "../StudentResult";

function ResultsContainer(props) {
   
    if(props.path === "/teacher") {
       //const date = req.body.due_date
        return(
            <div id="resultsContainer">
                <h3 style={{textAlign:"center"}}>Pick a Book to Read</h3>
               
                {props.bookData.map((assignment) => { 
                    const bookInfo = assignment.volumeInfo; 
                    const bookInfo1 = assignment.id;                 
                    return <BookResult
                    //book result display info
                    title={bookInfo.title}
                    authors={bookInfo.authors}
                    link={bookInfo.canonicalVolumeLink} 
                    img={bookInfo.imageLinks}  
                    description={bookInfo.description}
                    //book_length
                    book_length={bookInfo.pageCount}

                    //book viewer information
                    googlebook_id ={bookInfo1}

                    //due date
                    due_date = {props.due_date}    
                     
                    //book_name={bookInfo.title} already passed down as prop 'title'

                    path={props.path}
                    key={assignment.id}/>
                })}
            </div>
        );
    } else if(props.path === "/saved") {
        if(props.savedBooks.length > 0) {
            return(
                <div id="resultsContainer">
                    <h3 style={{textAlign:"center"}}>Assignment List</h3>
                    {props.savedBooks.map((assignment) => {
                        return <BookResult
                        //book result display info
                        title={assignment.book_name}//when getting info from db, title saved as book_name, probably inconvenient sorry
                        authors={assignment.authors}
                        link={assignment.link}
                        img={assignment.img}   
                        description={assignment.description}
                        //book_length
                        book_length={assignment.book_length}
                      
                        //due date  
                        due_date= {assignment.due_date.toString().split('T')[0]}

                        //assignment id for delete function
                        id={assignment._id}

                        path={props.path}
                        key={assignment._id}/>
                    })}
                </div>
            );
        } else {
            return(
                 <div id="resultsContainer" style={{textAlign:"center"}}>
                    <h3>Assignment List</h3>
                    <p>No Assignment Found.</p>
                </div>
            );
        }
    } else if(props.path === "/StudentProgress") {
        if(props.savedBooks.length > 0) {
            return(
                <div id="resultsContainer">
                    <h3 style={{textAlign:"center"}}>Student Progress</h3>
                    {props.savedBooks.map((studentBook) => {
                        return <StudentResult
                        //book result display info
                        title={studentBook.book_name}//when getting info from db, title saved as book_name, probably inconvenient sorry
                        authors={studentBook.authors}
                        description=" "
                        //book_length
                        book_length={studentBook.book_length}
                        
                        name={studentBook.student_name}
                        pages_read={studentBook.pages_read}
                        //due date  
                        due_date= {studentBook.due_date.toString().split('T')[0]}

                        //assignment id for delete function
                        id={studentBook._id}

                        path={props.path}
                        key={studentBook._id}/>
                    })}
                </div>
            );
        } else {
            return(
                 <div id="resultsContainer" style={{textAlign:"center"}}>
                    <h3>Student Progress</h3>
                    <p>Nothing found.</p>
                </div>
            );
        }
    }
}

export default ResultsContainer;