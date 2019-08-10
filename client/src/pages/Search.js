import React from "react";
import SearchForm from "../components/SearchForm";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";
import Nav from "../components/Nav";
import Header1 from "../components/Header1"; 

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            duedateInput: "",
            bookData: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

/*     handleChange(e) {
        e.preventDefault();
        this.setState({bookInput: e.target.value})
       // this.setState({duedateInput: e.target.value}) */

       handleChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      


    }

    

    handleSearchClick(e) {
        e.preventDefault();
      //  let due_date = this.state.duedateInput;
         
        API.searchBook(this.state.bookInput)
            .then(
                (response) => {
                   // console.log(response);
                   this.setState({bookData: response.data.items});
                 /*   this.setState({bookInput: ""}); 
                   this.setState({duedateInput: ""});  */
                   //console.log(due_date);
                  
                }
            );
    }

    render() {
        return(
            <main>
                 <Nav>

                 </Nav>
                 <Header1>
                    
                        <p >Welcome to the Teacher page</p>
                        <p>Search and Save Books for Assignment</p>
                
                 </Header1>

               
                <SearchForm handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} 
                 />
                
                
                
                {(this.state.bookData.length > 0)?
                    <ResultsContainer bookData={this.state.bookData}  path={this.props.match.path}
                    due_date = {this.state.duedateInput}
                    />   : null
                    
                }

                
              
            </main>
        );
    }
}

export default Search;