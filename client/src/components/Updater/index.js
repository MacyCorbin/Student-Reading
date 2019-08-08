import React from "react";

class Updater extends React.Component {

    componentDidMount = () => {

        this.props.loadBooks();

        //console.log("timerref", timerRef);
        //console.log(canvas.children[0].children[0].children[1]);

    }

    render() {
        return (

            <span/>


        );
    }
}

export default Updater;
