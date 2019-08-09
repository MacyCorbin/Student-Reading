import React from "react";

function SearchForm(props) {
    return(
        <div id="searchContainer">
            <h3>Books Assignment</h3>
            <form id="bookSearch">
                <label htmlFor="bookInput" form="bookSearch">Enter a book to search:</label>
                
                <input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Book Title" required/>
                <br></br>
                <label htmlFor="duedateInput" form="bookSearch">Due Date:</label>
                
                <input type="date" name="duedateInput" id="duedateInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="due_date" required/>
                 
                <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;