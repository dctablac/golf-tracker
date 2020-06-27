import React, { Component, Fragment } from "react";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="footer">
                    <p className="footer-msg">Created By: Dan Tablac</p>
                    <div className="footer-icons footer-msg">
                        <a href="http://www.facebook.com"><img className="social-media-icon" src={require("./css/assets/facebook.png")} alt="fb"/></a>
                        <a href="http://www.linkedin.com"><img className="social-media-icon" src={require("./css/assets/linkedin.png")} alt="ln"/></a>
                    </div>
                    <div className="footer-msg">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>
                </div>
            </Fragment>
        );
    }
}

export default Footer;