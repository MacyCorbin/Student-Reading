import React from "react";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";
import Nav from "../components/Nav";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: []
        }
    }

    componentWillMount() {
        API.getAssignments().then(
            (response) => {
                console.log(response);
                this.setState({savedBooks: response.data});
               

            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        console.log(this.state.savedBooks);
        return(
            
            <main>
                <Nav></Nav>
                <ResultsContainer savedBooks={this.state.savedBooks} path={this.props.match.path}/>
            </main>
        );
    }
}

export default Saved;