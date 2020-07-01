import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const localStorage = require('local-storage');

class NavBar extends Component {

    render() {
        const { handleLogOut, loggedIn } = this.props;

        return (
            <nav className="nav-bar" id="app_title">
                <NavLink className="nav-link nav-title" to="/">
                    <h1>Golf Tracker</h1>
                </NavLink>

                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>

                {loggedIn && 
                    <div className="scorecard-dropdown">
                        <NavLink className="nav-link nav-scorecard" to="/scorecard/all">Scorecard</NavLink>
                        <div className="scorecard-menu">
                            <NavLink to="/scorecard/new">Create A Scorecard</NavLink>
                            <NavLink to="/scorecard/all">View Scorecards</NavLink>
                        </div>
                    </div>
                }
                {loggedIn && 
                    <div className="scorecard-dropdown">
                        <h1 className="nav-link">{localStorage.get("email")}<div className="nav-link arrow-down"></div></h1>
                        <div className="scorecard-menu log-out">
                            <NavLink onClick={handleLogOut} to="/">Log Out</NavLink>
                        </div>
                    </div>
                }

                {!loggedIn && <NavLink className="nav-link" to="/register">Register</NavLink>}
                {!loggedIn && <NavLink className="nav-link" to="/login">Login</NavLink>}
            </nav>
        )
    }
}

export default NavBar;