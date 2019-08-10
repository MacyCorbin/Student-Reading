import React from "react";
import "./searchForm.css";

function SearchForm(props) {
    return(
        <div id="searchContainer"  style={{margin:"20px 10% 50px 10%", padding:"10px 10px 50px 10px", width:"80%", height:"40%", borderRadius:"10px",padding:"20px"}}>
            <h4>BOOKS ASSIGNMENT</h4>
            <div className="form">
                <form id="bookSearch">

                    <div className="formMargin">
                        <label style={{margin:"0 10px 0px 0px"}} htmlFor="bookInput" form="bookSearch">Enter a book to search:</label>
                        
                        <input   type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Book Title" required/>
                        
                    </div>
                    {/* <br></br> */}
                    <div className="formMargin">
                        <label style={{margin:"0 10px 0px 0px"}} htmlFor="duedateInput" form="bookSearch">Due Date:</label>
                        
                        <input type="date" name="duedateInput" id="duedateInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="due_date" required/>
                        <br></br>
                        
                    </div>
                    <div style={{textAlign:"center", marginTop: "60px" }}>
                        <button className="btn btn-success" type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
                    </div>
                    
                    
                </form>
            </div>
        </div>
    );
}

export default SearchForm;