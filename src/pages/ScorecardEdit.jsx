import React, { Component, Fragment } from "react";
import Scorecard from "../services/Scorecard";

const localStorage = require('local-storage');

class ScorecardEdit extends Component {
    getTodaysDate = () => {
        const d = new Date();
        let result = d.toLocaleDateString().split('/');
        let mm = parseInt(result[0]);
        if (mm < 10) {
            mm = "0" + mm.toString();
        }
        let dd = parseInt(result[1]);
        if (dd < 10) {
            dd = "0" + dd.toString();
        }
        let yyyy = result[2];
        return yyyy + "-" + mm + "-" + dd; 
    }

    state = {
        course_name: "",
        play_date: this.getTodaysDate(),
        p1_name: "", p2_name: "",
        p3_name: "", p4_name: "",
        yard_1: "0", yard_2: "0",
        yard_3: "0", yard_4: "0",
        yard_5: "0", yard_6: "0",
        yard_7: "0", yard_8: "0",
        yard_9: "0", yard_front: "0",
        yard_10: "0", yard_11: "0",
        yard_12: "0", yard_13: "0",
        yard_14: "0", yard_15: "0",
        yard_16: "0", yard_17: "0",
        yard_18: "0", yard_back: "0",
        yard_total: "0", yard_handicap: "0",
        par_1: "0", par_2: "0", par_3: "0",
        par_4: "0", par_5: "0", par_6: "0",
        par_7: "0", par_8: "0", par_9: "0",
        par_front: "0", par_10: "0", par_11: "0",
        par_12: "0", par_13: "0", par_14: "0", par_15: "0",
        par_16: "0", par_17: "0", par_18: "0", par_back: "0",
        par_total: "0", p1_hole_1: "0", p1_hole_2: "0", p1_hole_3: "0",
        p1_hole_4: "0", p1_hole_5: "0", p1_hole_6: "0", p1_hole_7: "0", 
        p1_hole_8: "0", p1_hole_9: "0", p1_front: "0", p1_hole_10: "0", 
        p1_hole_11: "0", p1_hole_12: "0", p1_hole_13: "0", p1_hole_14: "0", 
        p1_hole_15: "0", p1_hole_16: "0", p1_hole_17: "0", p1_hole_18: "0", 
        p1_back: "0", p1_total: "0", p1_handicap: "0", p2_hole_1: "0", p2_hole_2: "0", p2_hole_3: "0",
        p2_hole_4: "0", p2_hole_5: "0", p2_hole_6: "0", p2_hole_7: "0", 
        p2_hole_8: "0", p2_hole_9: "0", p2_front: "0", p2_hole_10: "0", 
        p2_hole_11: "0", p2_hole_12: "0", p2_hole_13: "0", p2_hole_14: "0", 
        p2_hole_15: "0", p2_hole_16: "0", p2_hole_17: "0", p2_hole_18: "0", 
        p2_back: "0", p2_total: "0", p2_handicap: "0", p3_hole_1: "0", p3_hole_2: "0", p3_hole_3: "0",
        p3_hole_4: "0", p3_hole_5: "0", p3_hole_6: "0", p3_hole_7: "0", 
        p3_hole_8: "0", p3_hole_9: "0", p3_front: "0", p3_hole_10: "0", 
        p3_hole_11: "0", p3_hole_12: "0", p3_hole_13: "0", p3_hole_14: "0", 
        p3_hole_15: "0", p3_hole_16: "0", p3_hole_17: "0", p3_hole_18: "0", 
        p3_back: "0", p3_total: "0", p3_handicap: "0", p4_hole_1: "0", p4_hole_2: "0", p4_hole_3: "0",
        p4_hole_4: "0", p4_hole_5: "0", p4_hole_6: "0", p4_hole_7: "0", 
        p4_hole_8: "0", p4_hole_9: "0", p4_front: "0", p4_hole_10: "0", 
        p4_hole_11: "0", p4_hole_12: "0", p4_hole_13: "0", p4_hole_14: "0", 
        p4_hole_15: "0", p4_hole_16: "0", p4_hole_17: "0", p4_hole_18: "0", 
        p4_back: "0", p4_total: "0", p4_handicap: "0"
    }

    updateField = ({target}) => {
        const { name, value} = target;
        this.setState({ [name]: value} );
    };

    clearCard = () => {
        this.closeClear();
        this.setState(
            {
                course_name: "",
                play_date: this.getTodaysDate(),
                p1_name: "", p2_name: "",
                p3_name: "", p4_name: "",
                yard_1: "0", yard_2: "0",
                yard_3: "0", yard_4: "0",
                yard_5: "0", yard_6: "0",
                yard_7: "0", yard_8: "0",
                yard_9: "0", yard_front: "0",
                yard_10: "0", yard_11: "0",
                yard_12: "0", yard_13: "0",
                yard_14: "0", yard_15: "0",
                yard_16: "0", yard_17: "0",
                yard_18: "0", yard_back: "0",
                yard_total: "0", yard_handicap: "0",
                par_1: "0", par_2: "0", par_3: "0",
                par_4: "0", par_5: "0", par_6: "0",
                par_7: "0", par_8: "0", par_9: "0",
                par_front: "0", par_10: "0", par_11: "0",
                par_12: "0", par_13: "0", par_14: "0", par_15: "0",
                par_16: "0", par_17: "0", par_18: "0", par_back: "0",
                par_total: "0", p1_hole_1: "0", p1_hole_2: "0", p1_hole_3: "0",
                p1_hole_4: "0", p1_hole_5: "0", p1_hole_6: "0", p1_hole_7: "0", 
                p1_hole_8: "0", p1_hole_9: "0", p1_front: "0", p1_hole_10: "0", 
                p1_hole_11: "0", p1_hole_12: "0", p1_hole_13: "0", p1_hole_14: "0", 
                p1_hole_15: "0", p1_hole_16: "0", p1_hole_17: "0", p1_hole_18: "0", 
                p1_back: "0", p1_total: "0", p1_handicap: "0", p2_hole_1: "0", p2_hole_2: "0", p2_hole_3: "0",
                p2_hole_4: "0", p2_hole_5: "0", p2_hole_6: "0", p2_hole_7: "0", 
                p2_hole_8: "0", p2_hole_9: "0", p2_front: "0", p2_hole_10: "0", 
                p2_hole_11: "0", p2_hole_12: "0", p2_hole_13: "0", p2_hole_14: "0", 
                p2_hole_15: "0", p2_hole_16: "0", p2_hole_17: "0", p2_hole_18: "0", 
                p2_back: "0", p2_total: "0", p2_handicap: "0", p3_hole_1: "0", p3_hole_2: "0", p3_hole_3: "0",
                p3_hole_4: "0", p3_hole_5: "0", p3_hole_6: "0", p3_hole_7: "0", 
                p3_hole_8: "0", p3_hole_9: "0", p3_front: "0", p3_hole_10: "0", 
                p3_hole_11: "0", p3_hole_12: "0", p3_hole_13: "0", p3_hole_14: "0", 
                p3_hole_15: "0", p3_hole_16: "0", p3_hole_17: "0", p3_hole_18: "0", 
                p3_back: "0", p3_total: "0", p3_handicap: "0", p4_hole_1: "0", p4_hole_2: "0", p4_hole_3: "0",
                p4_hole_4: "0", p4_hole_5: "0", p4_hole_6: "0", p4_hole_7: "0", 
                p4_hole_8: "0", p4_hole_9: "0", p4_front: "0", p4_hole_10: "0", 
                p4_hole_11: "0", p4_hole_12: "0", p4_hole_13: "0", p4_hole_14: "0", 
                p4_hole_15: "0", p4_hole_16: "0", p4_hole_17: "0", p4_hole_18: "0", 
                p4_back: "0", p4_total: "0", p4_handicap: "0"
            }
        );
    };

    intList = (L) => {
        for (let i = 0; i < L.length; i++) {
            L[i] = parseInt(L[i]);
        }
        return L;
    }

    closeClear() {
        document.getElementById("confirm-box-1").setAttribute("class","delete-confirmation-box");
        document.getElementById("tool-1").setAttribute("class","btn");
        document.getElementById("tool-2").setAttribute("class","btn btn-delete");
        document.getElementById("tool-3").setAttribute("class","btn btn-delete");
    }

    confirmClear() {
        document.getElementById("confirm-box-1").setAttribute("class","delete-confirmation-box-active");
        document.getElementById("tool-1").setAttribute("class","btn-hidden");
        document.getElementById("tool-2").setAttribute("class","btn-hidden");
        document.getElementById("tool-3").setAttribute("class", "btn-hidden");
    }

    closeCancel() {
        document.getElementById("confirm-box-2").setAttribute("class","delete-confirmation-box");
        document.getElementById("tool-1").setAttribute("class","btn");
        document.getElementById("tool-2").setAttribute("class","btn btn-delete");
        document.getElementById("tool-3").setAttribute("class","btn btn-delete");
    }

    confirmCancel() {
        document.getElementById("confirm-box-2").setAttribute("class","delete-confirmation-box-active");
        document.getElementById("tool-1").setAttribute("class","btn-hidden");
        document.getElementById("tool-2").setAttribute("class","btn-hidden");
        document.getElementById("tool-3").setAttribute("class", "btn-hidden");
    }



    handleSubmit = (e) => {
        e.preventDefault();

        const { course_name, play_date, p1_name,
            p2_name, p3_name, p4_name, yard_1,
            yard_2, yard_3, yard_4, yard_5,
            yard_6, yard_7, yard_8, yard_9,
            yard_front, yard_10, yard_11,
            yard_12, yard_13, yard_14, yard_15,
            yard_16, yard_17, yard_18, yard_back,
            yard_total, yard_handicap, par_1,
            par_2, par_3, par_4, par_5,
            par_6, par_7, par_8, par_9,
            par_front, par_10, par_11,
            par_12, par_13, par_14, par_15,
            par_16, par_17, par_18, par_back,
            par_total, p1_hole_1,
            p1_hole_2, p1_hole_3, p1_hole_4, p1_hole_5,
            p1_hole_6, p1_hole_7, p1_hole_8, p1_hole_9,
            p1_front, p1_hole_10, p1_hole_11,
            p1_hole_12, p1_hole_13, p1_hole_14, p1_hole_15,
            p1_hole_16, p1_hole_17, p1_hole_18, p1_back,
            p1_total, p1_handicap, p2_hole_1,
            p2_hole_2, p2_hole_3, p2_hole_4, p2_hole_5,
            p2_hole_6, p2_hole_7, p2_hole_8, p2_hole_9,
            p2_front, p2_hole_10, p2_hole_11,
            p2_hole_12, p2_hole_13, p2_hole_14, p2_hole_15,
            p2_hole_16, p2_hole_17, p2_hole_18, p2_back,
            p2_total, p2_handicap, p3_hole_1,
            p3_hole_2, p3_hole_3, p3_hole_4, p3_hole_5,
            p3_hole_6, p3_hole_7, p3_hole_8, p3_hole_9,
            p3_front, p3_hole_10, p3_hole_11,
            p3_hole_12, p3_hole_13, p3_hole_14, p3_hole_15,
            p3_hole_16, p3_hole_17, p3_hole_18, p3_back,
            p3_total, p3_handicap, p4_hole_1,
            p4_hole_2, p4_hole_3, p4_hole_4, p4_hole_5,
            p4_hole_6, p4_hole_7, p4_hole_8, p4_hole_9,
            p4_front, p4_hole_10, p4_hole_11,
            p4_hole_12, p4_hole_13, p4_hole_14, p4_hole_15,
            p4_hole_16, p4_hole_17, p4_hole_18, p4_back,
            p4_total, p4_handicap, id } = this.state;

        if (course_name === "") {
            alert("Please enter a course name for the scorecard.");
        }
        else {
            const payLoad = {
                email: localStorage.get("email"),
                course_name: course_name,
                play_date: play_date,
                yards: {
                    yard_front: yard_front,
                    yard_back: yard_back,
                    yard_total: yard_total,
                    yard_handicap: yard_handicap,
                    yard_list: this.intList([yard_1, yard_2, yard_3, yard_4, yard_5, yard_6,
                                             yard_7, yard_8, yard_9, yard_10, yard_11,
                                             yard_12, yard_13, yard_14, yard_15, yard_16, yard_17, yard_18])
                },
                pars: {
                    par_front: par_front,
                    par_back: par_back,
                    par_total: par_total,
                    par_handicap: 0,
                    par_list: this.intList([par_1, par_2, par_3, par_4, par_5, par_6,
                                            par_7, par_8, par_9, par_10, par_11,
                                            par_12, par_13, par_14, par_15, par_16, par_17, par_18])
                },
                players: {
                    player_1: {
                        name: p1_name,
                        score_front: p1_front,
                        score_back: p1_back,
                        score_total: p1_total,
                        score_handicap: p1_handicap,
                        strokes: this.intList([p1_hole_1, p1_hole_2, p1_hole_3, p1_hole_4, p1_hole_5, p1_hole_6, p1_hole_7, 
                            p1_hole_8, p1_hole_9, p1_hole_10, p1_hole_11, p1_hole_12, p1_hole_13,p1_hole_14, p1_hole_15, 
                            p1_hole_16, p1_hole_17, p1_hole_18])
                    },
                    player_2: {
                        name: p2_name,
                        score_front: p2_front,
                        score_back: p2_back,
                        score_total: p2_total,
                        score_handicap: p2_handicap,
                        strokes: this.intList([p2_hole_1, p2_hole_2, p2_hole_3, p2_hole_4, p2_hole_5, p2_hole_6, p2_hole_7,
                            p2_hole_8, p2_hole_9, p2_hole_10, p2_hole_11, p2_hole_12, p2_hole_13, p2_hole_14, p2_hole_15,
                            p2_hole_16, p2_hole_17, p2_hole_18])
                    },
                    player_3: {
                        name: p3_name,
                        score_front: p3_front,
                        score_back: p3_back,
                        score_total: p3_total,
                        score_handicap: p3_handicap,
                        strokes: this.intList([p3_hole_1, p3_hole_2, p3_hole_3, p3_hole_4, p3_hole_5, p3_hole_6, p3_hole_7,
                            p3_hole_8, p3_hole_9, p3_hole_10, p3_hole_11, p3_hole_12, p3_hole_13, p3_hole_14, p3_hole_15,
                            p3_hole_16, p3_hole_17, p3_hole_18])
                    },
                    player_4: {
                        name: p4_name,
                        score_front: p4_front,
                        score_back: p4_back,
                        score_total: p4_total,
                        score_handicap: p4_handicap,
                        strokes: this.intList([p4_hole_1, p4_hole_2, p4_hole_3, p4_hole_4, p4_hole_5, p4_hole_6, p4_hole_7,
                            p4_hole_8, p4_hole_9, p4_hole_10, p4_hole_11, p4_hole_12, p4_hole_13, p4_hole_14, p4_hole_15,
                            p4_hole_16, p4_hole_17, p4_hole_18])
                    }
                }
            }

            Scorecard.updateCard(payLoad, id)
              .then(response => {
                  alert(response.data["message"])
                  if (response.data["resultCode"] === 170) {
                    this.props.history.push('/scorecard/all')
                  }
                })
              .catch(err => console.log(err));
        }
    }

    cancelEdits = () => {
        this.props.history.push("/scorecard/all");
    }

    componentDidMount() {
        this.setState(localStorage.get("state"));
        this.setState({play_date: this.getTodaysDate()});
        localStorage.remove("state");
    }

    render() {
        const { loggedIn } = this.props;
        const { course_name, play_date, p1_name,
                p2_name, p3_name, p4_name, yard_1,
                yard_2, yard_3, yard_4, yard_5,
                yard_6, yard_7, yard_8, yard_9,
                yard_front, yard_10, yard_11,
                yard_12, yard_13, yard_14, yard_15,
                yard_16, yard_17, yard_18, yard_back,
                yard_total, yard_handicap, par_1,
                par_2, par_3, par_4, par_5,
                par_6, par_7, par_8, par_9,
                par_front, par_10, par_11,
                par_12, par_13, par_14, par_15,
                par_16, par_17, par_18, par_back,
                par_total, p1_hole_1,
                p1_hole_2, p1_hole_3, p1_hole_4, p1_hole_5,
                p1_hole_6, p1_hole_7, p1_hole_8, p1_hole_9,
                p1_front, p1_hole_10, p1_hole_11,
                p1_hole_12, p1_hole_13, p1_hole_14, p1_hole_15,
                p1_hole_16, p1_hole_17, p1_hole_18, p1_back,
                p1_total, p1_handicap, p2_hole_1,
                p2_hole_2, p2_hole_3, p2_hole_4, p2_hole_5,
                p2_hole_6, p2_hole_7, p2_hole_8, p2_hole_9,
                p2_front, p2_hole_10, p2_hole_11,
                p2_hole_12, p2_hole_13, p2_hole_14, p2_hole_15,
                p2_hole_16, p2_hole_17, p2_hole_18, p2_back,
                p2_total, p2_handicap, p3_hole_1,
                p3_hole_2, p3_hole_3, p3_hole_4, p3_hole_5,
                p3_hole_6, p3_hole_7, p3_hole_8, p3_hole_9,
                p3_front, p3_hole_10, p3_hole_11,
                p3_hole_12, p3_hole_13, p3_hole_14, p3_hole_15,
                p3_hole_16, p3_hole_17, p3_hole_18, p3_back,
                p3_total, p3_handicap, p4_hole_1,
                p4_hole_2, p4_hole_3, p4_hole_4, p4_hole_5,
                p4_hole_6, p4_hole_7, p4_hole_8, p4_hole_9,
                p4_front, p4_hole_10, p4_hole_11,
                p4_hole_12, p4_hole_13, p4_hole_14, p4_hole_15,
                p4_hole_16, p4_hole_17, p4_hole_18, p4_back,
                p4_total, p4_handicap } = this.state;

        if (loggedIn) {
            return (
                <Fragment>
                    <h1 className="content-title">Edit Scorecard</h1>
                    <div id="confirm-box-1" className="delete-confirmation-box">
                            <h3>Clear entire scorecard?</h3>
                            <div className="btn btn-delete btn-confirm" onClick={this.clearCard}>Confirm</div>
                            <div className="btn btn-confirm" onClick={this.closeClear}>Cancel</div>
                    </div>
                    <div id="confirm-box-2" className="delete-confirmation-box">
                            <h3>Discard all changes?</h3>
                            <div className="btn btn-delete btn-confirm" onClick={this.cancelEdits}>Confirm</div>
                            <div className="btn btn-confirm" onClick={this.closeCancel}>Cancel</div>
                        </div>
                    <div className="scorecard-template-title">
                        <label>Course:</label>
                        <input className="course-name" name="course_name" 
                        value={course_name} type="text" onChange={this.updateField}></input>
                        <label>Date Played:</label>
                        <input className="play-date" name="play_date" 
                        value={play_date} type="date" onChange={this.updateField} ></input>
                    </div>
                    <div className="scorecard-template">
                        <div className="scorecard-template-item center-text">Hole</div>
                        <div className="scorecard-template-item center-text">1</div>
                        <div className="scorecard-template-item center-text">2</div>
                        <div className="scorecard-template-item center-text">3</div>
                        <div className="scorecard-template-item center-text">4</div>
                        <div className="scorecard-template-item center-text">5</div>
                        <div className="scorecard-template-item center-text">6</div>
                        <div className="scorecard-template-item center-text">7</div>
                        <div className="scorecard-template-item center-text">8</div>
                        <div className="scorecard-template-item center-text">9</div>
                        <div className="scorecard-template-item center-text scorecard-label-col">Front</div>
                        <div className="scorecard-template-item center-text">10</div>
                        <div className="scorecard-template-item center-text">11</div>
                        <div className="scorecard-template-item center-text">12</div>
                        <div className="scorecard-template-item center-text">13</div>
                        <div className="scorecard-template-item center-text">14</div>
                        <div className="scorecard-template-item center-text">15</div>
                        <div className="scorecard-template-item center-text">16</div>
                        <div className="scorecard-template-item center-text">17</div>
                        <div className="scorecard-template-item center-text">18</div>
                        <div className="scorecard-template-item scorecard-label-col center-text">Back</div>
                        <div className="scorecard-template-item scorecard-label-col center-text">Total</div>
                        <div className="scorecard-template-item scorecard-label-col center-text">+/-</div>

                        <div className="scorecard-template-item center-text">Yards</div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_1" type="number" value={yard_1} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_2" type="number" value={yard_2} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_3" type="number" value={yard_3} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_4" type="number" value={yard_4} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_5" type="number" value={yard_5} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_6" type="number" value={yard_6} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_7" type="number" value={yard_7} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_8" type="number" value={yard_8} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_9" type="number" value={yard_9} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="yard_front" type="number" value={yard_front} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_10" type="number" value={yard_10} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_11" type="number" value={yard_11} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_12" type="number" value={yard_12} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_13" type="number" value={yard_13} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_14" type="number" value={yard_14} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_15" type="number" value={yard_15} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_16" type="number" value={yard_16} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard-17" type="number" value={yard_17} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="yard_18" type="number" value={yard_18} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="yard_back" type="number" value={yard_back} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="yard_total" type="number" value={yard_total} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="yard_handicap" type="number" value={yard_handicap} onChange={this.updateField}></input>
                        </div>

                        <div className="scorecard-template-item center-text">Par</div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_1" type="number" value={par_1} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_2" type="number" value={par_2} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_3" type="number" value={par_3} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_4" type="number" value={par_4} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_5" type="number" value={par_5} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_6" type="number" value={par_6} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_7" type="number" value={par_7} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_8" type="number" value={par_8} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_9" type="number" value={par_9} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="par_front" type="number" value={par_front} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_10" type="number" value={par_10} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_11" type="number" value={par_11} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_12" type="number" value={par_12} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_13" type="number" value={par_13} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_14" type="number" value={par_14} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_15" type="number" value={par_15} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_16" type="number" value={par_16} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_17" type="number" value={par_17} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="par_18" type="number" value={par_18} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="par_back" type="number" value={par_back} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="par_total" type="number" value={par_total} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">+/-</div>

                        <div className="scorecard-template-item center-text">
                            <label>P1</label>
                            <input className="player-name" type="text" name="p1_name" value={p1_name} onChange={this.updateField} />
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_1" type="number" value={p1_hole_1} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_2" type="number" value={p1_hole_2} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_3" type="number" value={p1_hole_3} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_4" type="number" value={p1_hole_4} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_5" type="number" value={p1_hole_5} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_6" type="number" value={p1_hole_6} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_7" type="number" value={p1_hole_7} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_8" type="number" value={p1_hole_8} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_9" type="number" value={p1_hole_9} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p1_front" type="number" value={p1_front} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_10" type="number" value={p1_hole_10} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_11" type="number" value={p1_hole_11} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_12" type="number" value={p1_hole_12} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_13" type="number" value={p1_hole_13} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_14" type="number" value={p1_hole_14} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_15" type="number" value={p1_hole_15} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_16" type="number" value={p1_hole_16} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_17" type="number" value={p1_hole_17} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p1_hole_18" type="number" value={p1_hole_18} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p1_back" type="number" value={p1_back} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p1_total" type="number" value={p1_total} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p1_handicap" type="number" value={p1_handicap} onChange={this.updateField}></input>
                        </div>

                        <div className="scorecard-template-item center-text">
                            <label>P2</label>
                            <input className="player-name" type="text" name="p2_name" value={p2_name} onChange={this.updateField} />
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_1" type="number" value={p2_hole_1} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_2" type="number" value={p2_hole_2} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_3" type="number" value={p2_hole_3} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_4" type="number" value={p2_hole_4} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_5" type="number" value={p2_hole_5} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_6" type="number" value={p2_hole_6} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_7" type="number" value={p2_hole_7} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_8" type="number" value={p2_hole_8} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_9" type="number" value={p2_hole_9} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p2_front" type="number" value={p2_front} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_10" type="number" value={p2_hole_10} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_11" type="number" value={p2_hole_11} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_12" type="number" value={p2_hole_12} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_13" type="number" value={p2_hole_13} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_14" type="number" value={p2_hole_14} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_15" type="number" value={p2_hole_15} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_16" type="number" value={p2_hole_16} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_17" type="number" value={p2_hole_17} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p2_hole_18" type="number" value={p2_hole_18} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p2_back" type="number" value={p2_back} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p2_total" type="number" value={p2_total} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p2_handicap" type="number" value={p2_handicap} onChange={this.updateField}></input>
                        </div>

                        <div className="scorecard-template-item center-text">
                            <label>P3</label>
                            <input className="player-name" type="text" name="p3_name" value={p3_name} onChange={this.updateField} />
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_1" type="number" value={p3_hole_1} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_2" type="number" value={p3_hole_2} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_3" type="number" value={p3_hole_3} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_4" type="number" value={p3_hole_4} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_5" type="number" value={p3_hole_5} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_6" type="number" value={p3_hole_6} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_7" type="number" value={p3_hole_7} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_8" type="number" value={p3_hole_8} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_9" type="number" value={p3_hole_9} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input " name="p3_front" type="number" value={p3_front} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_10" type="number" value={p3_hole_10} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_11" type="number" value={p3_hole_11} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_12" type="number" value={p3_hole_12} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_13" type="number" value={p3_hole_13} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_14" type="number" value={p3_hole_14} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_15" type="number" value={p3_hole_15} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_16" type="number" value={p3_hole_16} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_17" type="number" value={p3_hole_17} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p3_hole_18" type="number" value={p3_hole_18} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p3_back" type="number" value={p3_back} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p3_total" type="number" value={p3_total} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p3_handicap" type="number" value={p3_handicap} onChange={this.updateField}></input>
                        </div>

                        <div className="scorecard-template-item center-text">
                            <label>P4</label>
                            <input className="player-name" type="text" name="p4_name" value={p4_name} onChange={this.updateField} />
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_1" type="number" value={p4_hole_1} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_2" type="number" value={p4_hole_2} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_3" type="number" value={p4_hole_3} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_4" type="number" value={p4_hole_4} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_5" type="number" value={p4_hole_5} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_6" type="number" value={p4_hole_6} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_7" type="number" value={p4_hole_7} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_8" type="number" value={p4_hole_8} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_9" type="number" value={p4_hole_9} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p4_front" type="number" value={p4_front} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_10" type="number" value={p4_hole_10} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_11" type="number" value={p4_hole_11} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_12" type="number" value={p4_hole_12} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_13" type="number" value={p4_hole_13} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_14" type="number" value={p4_hole_14} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_15" type="number" value={p4_hole_15} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_16" type="number" value={p4_hole_16} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_17" type="number" value={p4_hole_17} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item">
                            <input className="scorecard-template-item-input" name="p4_hole_18" type="number" value={p4_hole_18} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p4_back" type="number" value={p4_back} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p4_total" type="number" value={p4_total} onChange={this.updateField}></input>
                        </div>
                        <div className="scorecard-template-item scorecard-label-col">
                            <input className="scorecard-template-item-input" name="p4_handicap" type="number" value={p4_handicap} onChange={this.updateField}></input>
                        </div>
                    </div>

                    <div id="tool-1" className="btn" onClick={this.handleSubmit}>Submit Edit</div>
                    <div id="tool-2" className="btn btn-delete" onClick={this.confirmClear}>Clear</div>
                    <div id="tool-3" className="btn btn-delete" onClick={this.confirmCancel}>Cancel</div>
            </Fragment>
            );
        } else {
            return (<h1>Please log in to continue.</h1>);
        }
    }
}

export default ScorecardEdit;