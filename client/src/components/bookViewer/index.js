import React from "react";

class BookViewer extends React.Component {

    componentDidMount = () => {

        this.props.resetTimer();
        window.initialize(this.props.googleBookId, this.props.startAtPage);
        this.props.setPage(this.props.startAtPage);
        var canvas = document.getElementById('viewerCanvas');
        canvas.children[0].children[0].children[1].style.display = 'none';
        canvas.children[0].children[1].style.display = 'none';
        window.viewer.resize();

        //console.log("timerref", timerRef);
        //console.log(canvas.children[0].children[0].children[1]);

    }

    render() {
        return (

            <div id="viewerCanvas" style={{ width: '100%', height: '1000px' }}></div>


        );
    }
}

export default BookViewer;
