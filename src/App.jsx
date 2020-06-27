import React, { Component } from "react";

import "./css/style.css";
import NavBar from "./NavBar";
import Content from "./Content";
import Footer from "./Footer";

class App extends Component {
    render() {
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
                <NavBar />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default App;