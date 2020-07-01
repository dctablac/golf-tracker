import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScorecardMenu from "./pages/ScorecardMenu";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ScorecardTemplate from "./pages/ScorecardTemplate";
import ScorecardView from "./pages/ScorecardView";
import ScorecardEdit from "./pages/ScorecardEdit";

class Content extends Component {

    render() {

        const { loggedIn, handleLogIn } = this.props;

        return (
            <div className="content">
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/scorecard/new" component={props => <ScorecardTemplate loggedIn={loggedIn} {...props}/>} />
                    <Route path="/scorecard/view" component={props => <ScorecardView loggedIn={loggedIn} {...props}/>} />
                    <Route path="/scorecard/all" component={props => <ScorecardMenu loggedIn={loggedIn} {...props}/>} />
                    <Route path="/scorecard/edit" component={props => <ScorecardEdit loggedIn={loggedIn} {...props}/>}/>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={props => <Login handleLogIn={handleLogIn} {...props}/>} />
                    <Route path="/" component={props => <Home loggedIn={loggedIn} {...props} /> } />
                </Switch>
            </div>        
        );
    }
}

export default Content;