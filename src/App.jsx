import React, { Component } from "react";

import "./css/style.css";
import NavBar from "./NavBar";
import Content from "./Content";
import Footer from "./Footer";

const localStorage = require('local-storage');

class App extends Component {
    state = {
        loggedIn: this.checkLoggedIn()
    }

    checkLoggedIn() {
        return (
            localStorage.get("email") != null
        );
    }

    handleLogOut = () => {
        localStorage.remove("email");
        this.setState({loggedIn: false});
    }

    handleLogIn = (email) => {
        localStorage.set("email", email);
        this.setState({loggedIn: true});
    }

    render() {

        const { loggedIn } = this.state;

        return (
            <div className="app">
                <div className="top-image">
                    <div className="cover-content">
                        <h1 className="cover-label">GOLF TRACKER</h1>
                        <a className="fragment" href="#app_title">
                            <img className="arrow" src={require('./css/assets/arrow.png')} alt="" />
                        </a>
                    </div>
                </div>
                <NavBar loggedIn={loggedIn} handleLogOut={this.handleLogOut}/>
                <Content loggedIn={loggedIn} handleLogOut={this.handleLogOut} handleLogIn={this.handleLogIn} />
                <Footer />
            </div>
        );
    }
}

export default App;