import React from "react";
import { Col, Row, Container } from "../Grid";

class StudentResult extends React.Component {

    render() {
        return (
            <div className="bookResult" id={(this.props.id) ? this.props.id : null}>
                    <Row>
                        <Col size="md-6">
                            <div className="aboutBook">
                                <h4>Due Date: {this.props.due_date}</h4>
                                <h4>{this.props.title}</h4>
                                <p>By: {(this.props.authors) ? this.props.authors.join(", ") : "N/A"}</p>
                                
                            </div>
                        </Col>
                        <Col size="md-6">
                        <div className="aboutBook">
                                <h4>Student Name: {this.props.name}</h4>
                                <h4>Pages Read: {this.props.pages_read}</h4>
                                <h4>Book Length : {this.props.book_length} pages</h4>
                            </div>
                        </Col>
                    </Row>
            </div>
        );
    }
}

export default StudentResult;