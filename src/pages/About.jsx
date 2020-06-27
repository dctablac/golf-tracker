import React, { Component, Fragment } from "react";

class About extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="content-title">About</h1>
                <p className="about-content">
                    Golf Tracker is a simple, easy-to-use web application that allows golfers to digitally record past
                    scorecards from their favorite golf courses.
                </p>
            </Fragment>
        );
    }
}

export default About;