import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Scorecard from "../services/Scorecard";

const localStorage = require('local-storage');

class ScorecardMenu extends Component {

    state = {
        previews: null,

    }

    renderPreviews = () => {
        const { loggedIn } = this.props;
        const { previews } = this.state;
        const email = localStorage.get("email");

        if (!loggedIn || email === null) {
            return (
                <h1>Please log in to continue.</h1>
            );
        }
        else if (previews === null) {
            return (
                <h3 className="loading">Loading...</h3>
            )
        }
        else if (previews.length === 0) {
            return (
                <h3 className="loading">You have no scorecards.</h3>
            )
        }
        else {
            return (
                <div className="scorecard-history">
                {
                    previews.map((card, index) => (
                        <NavLink key={index} className="prev-link"to={
                            "/scorecard/view/"+card["courseName"]+"/"+card["playDate"]+"/"+card["id"]}>
                            <div className="scorecard-preview">
                                <div className="prev-filler"><img src={require('../css/assets/scorecard.png')} alt=""/></div>
                                <label className="prev-label">{card["courseName"]}</label>
                                <label className="prev-label">{card["playDate"]}</label>
                            </div>
                        </NavLink>
                    ))
                }
                </div>
            )
        }
        
    }

    retrievePreviews() {
        const email = localStorage.get("email");

        Scorecard.allCards(email)
          .then(response => {
              if (response.data["resultCode"] === 140) {
                this.setState({previews: response.data["scorecards"]})
              }
              else {
                this.setState({previews: "none"})
              }
          })
          .catch(err => console.log(err));
    }

    componentDidMount() {
        this.retrievePreviews();
    }

    render() {
        const { loggedIn } = this.props;

        if (loggedIn) {
            return (
                <Fragment>
                    <div className="content-title">
                        <h1>Your Scorecards</h1>
                    </div>
                    {this.renderPreviews()}
                </Fragment>
            );
        } else {
            return(<h1>Please log in to continue.</h1>)
        }
    }
}

export default ScorecardMenu;