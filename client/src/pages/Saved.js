import React from "react";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: []
        }
    }
componentDidMount() { 
    const student = {
        id_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjM0OTRiMWU3ODZjZGFkMDkyZTQyMzc2NmJiZTM3ZjU0ZWQ4N2IyMmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTA5MzUwOTkwMjQ5MS1ycTVmMmU1aXZiMzhwcGVwdnR2a3FnNGZkNnZvamM0OC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwOTM1MDk5MDI0OTEtcnE1ZjJlNWl2YjM4cHBlcHZ0dmtxZzRmZDZ2b2pjNDguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDQwODA4NTIyNDczMjkyNzg1MTEiLCJlbWFpbCI6ImVyaWN5aWxpbjhAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiI1MUNFMjA2a3JPTTBaUldFTlo3NzBRIiwibmFtZSI6IkVyaWMgTGluIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS8td2hnQTd3bklMdm8vQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZnVQeVRwSWdHU1lpYXFXZlZ0ZUVsRGZvWkMxUS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiRXJpYyIsImZhbWlseV9uYW1lIjoiTGluIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE1NjUzMDg0NDUsImV4cCI6MTU2NTMxMjA0NSwianRpIjoiMzk5YmM3NTZiMWUwNjIyZmI0M2YyZGM0MGU5M2Y1NTIwMjdjMzUxMyJ9.pFyRdbQAMicaD4xlOBb9oH37YlaNXsMkCwIk-ThKh0fIQWOhA5ZecS3Kus0-QHn9J90CRRhRzCVr293iLhaJ-XawBQFj-zYtZCfw35hwELn3zBbQjL_EJ8V-9TmYv7TkOAzw05-4BfroP3DVLUre2hjhD2m6BneHmLdL2bM30YdaPvgmXnlNF8HthLTLxzY_lS9Q3CGY4g3_kI8Kf2h1ARPORhFTu5BtGTb6PwBOMgnQcnhoTLKqzt_QZvYBkRTWyIzLTPVw_bWMDtTIHb41kKGrkorFuuMt6RCDdTnWhkcUQ7K6esoy7DsQvkVjB3epHj1Hqjp6YK9TWDtfW7aAqQ",
        name: 'Eric Lin'
      }
    API.registerStudent(student).then (res => console.log("student status" + res))

    
}

    componentWillMount() {
        API.getBooks().then(
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
                <ResultsContainer savedBooks={this.state.savedBooks} path={this.props.match.path}/>
            </main>
        );
    }
}

export default Saved;