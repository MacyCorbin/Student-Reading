import React from "react";

class BookViewer extends React.Component {

    componentDidMount = () => {

        window.initialize();

    }

    render() {
        return (

            <div id="viewerCanvas" style={{ width: '100%', height: '500px' }}></div>


        );
    }
}

export default BookViewer;
