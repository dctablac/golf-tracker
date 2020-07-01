import React, { Component, Fragment } from "react";

const localStorage = require('local-storage');

class Home extends Component {

    render() {

        const { loggedIn } = this.props;

        if (!loggedIn) {
            return (
                <h1 className="content-title">Register or Login to get started!</h1>
            )
        }
        return (
            <Fragment>
                <h1 className="content-title">Welcome to Golf Tracker,</h1>
                <br/>
                <h1 className="content-title">{localStorage.get("email")}!</h1>
            </Fragment>
            
        );
    }
}

export default Home;