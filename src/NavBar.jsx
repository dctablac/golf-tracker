import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className="nav-bar" id="app_title">
                <NavLink className="nav-link nav-title" to="/">
                    <h1>Golf Tracker</h1>
                </NavLink>

                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>

                <div className="scorecard-dropdown">
                    <NavLink className="nav-link nav-scorecard" to="/scorecard">Scorecard</NavLink>
                    <div className="scorecard-menu">
                        <NavLink to="/scorecard/new">Create A Scorecard</NavLink>
                        <NavLink to="/scorecard/view">View Scorecards</NavLink>
                    </div>
                </div>

                <NavLink className="nav-link" to="/register">Register</NavLink>
                <NavLink className="nav-link" to="/login">Login</NavLink>
            </nav>
        )
    }
}

export default NavBar;