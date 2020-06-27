import React, { Component, Fragment } from "react";

class ScorecardMenu extends Component {
    render() {
        return (
            <Fragment>
                <div className="content-title">
                    <h1>Your Scorecards</h1>
                </div>
                <div className="scorecard-history">
                    <div className="scorecard-preview">
                        <div className="prev-filler"></div>
                        <label>Sample Golf Course</label>
                        <label>Date: 01/01/2020</label>
                    </div>
                    <div className="scorecard-preview">
                        <div className="prev-filler green"></div>
                        <label>Sample Golf Course 2</label>
                        <label>Date: 01/02/2020</label>
                    </div>
                    <div className="scorecard-preview">
                        <div className="prev-filler"></div>
                        <label>Sample Golf Course 3</label>
                        <label>Date: 01/03/2020</label>
                    </div>
                    <div className="scorecard-preview">
                        <div className="prev-filler green"></div>
                        <label>Sample Golf Course 4</label>
                        <label>Date: 01/04/2020</label>
                    </div>
                    <div className="scorecard-preview">
                        <div className="prev-filler"></div>
                        <label>Sample Golf Course 5</label>
                        <label>Date: 01/05/2020</label>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ScorecardMenu;