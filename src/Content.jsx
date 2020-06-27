import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScorecardMenu from "./pages/ScorecardMenu";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ScorecardTemplate from "./pages/ScorecardTemplate";

class Content extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/scorecard/new" component={ScorecardTemplate} />
                    <Route path="/scorecard" component={ScorecardMenu} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>        
        );
    }
}

export default Content;