import React from
 "react";
import API from "../../utils/API";
import {BrowserRouter as Router} from "react-router-dom";

class BookResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false,
            deleted: false
        }
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleSaveClick = function(e) {
        this.setState({saved: true});      
        const bookData = {
            //book results display information
            book_name: this.props.title,
            authors: this.props.authors,
            link: this.props.link,
            img: this.props.img,
            description: this.props.description,
            //book_length is here
            book_length: this.props.book_length,

            //book reader information
            googlebook_id: this.props.googlebook_id,
            
            //due date
            due_date: this.props.due_date       
            
        }
        e.preventDefault();
     /*    API.addBookToDB(bookData).then(
            (response) => {
                console.log(response);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        ); */

        API.createAssignment(bookData)
        .then(res=>console.log(res))
        .catch(
            (err) => {
                console.log(err);
            }
        ); 
    }

    handleDeleteClick(e) {
        this.setState({deleted: true});
        e.preventDefault();
        API.deleteAssignment(this.props.id).then(
            (response) => {
                console.log(response);
                Router.dispatch(this.props.location, null)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return(
            <div className="bookResult" id={(this.props.id)? this.props.id: null} style={{display: this.state.deleted? "none" : "block"}}>
                <div className="row">
                    <div className="aboutBook">
                        <h4>Due Date: {this.props.due_date}</h4>
                        <h4>{this.props.title}</h4>
                        <h4 style={{paddingLeft:"20px", fontSize:"1.25rem"}}>By: {(this.props.authors)? this.props.authors.join(", "): "N/A"}</h4> 
                        <h4>Book Length : {this.props.book_length} pages</h4> 
                        
                    </div>
                    <div className="btnDiv">
                        {
                            // if link to book exists include View button else do not
                            (this.props.link)? <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-success" type="button" name="view">View</button></a> : null
                        }
                        {
                            // if this.props.path is "/" display save button else display Delete button
                            (this.props.path === "/teacher") ? <button className="btn btn-success" type="button" name="save" onClick={this.handleSaveClick} disabled={this.state.saved}>{(this.state.saved)? "Saved" : "Save"}</button> : <span></span> 

                        
                        }
                        {
                            (this.props.path === "/saved") ? <button  className="btn btn-success" type="button" name="Delete" onClick={this.handleDeleteClick} disabled={this.state.deleted}>Delete</button> : <span/>
                        }
                    </div>
                </div>
                <div className="row">
                    {(this.props.img)? <img src= {
                        // if smallthubmail exists on this.props.img use that else if thumbnail exists on this.props.img use that else leave src empty
                        (this.props.img.smallThumbnail)? this.props.img.smallThumbnail:
                        (this.props.img.thumbnail)? this.props.img.thumbnail: ""
                    } alt="book cover"/>: null}
                    <h4 style={{padding:"20px", fontSize:"1.25rem;"}}>{(this.props.description)? this.props.description: "N/A"}</h4>
                </div>
            </div>
        );
    }
}

export default BookResult;