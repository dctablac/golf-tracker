import React, { Component, Fragment } from "react";
import Scorecard from "../services/Scorecard";

const localStorage = require('local-storage');

class ScorecardView extends Component {

    state = {
        finished_loading: false
    }

    deleteScorecard = () => {
        const email = localStorage.get("email");
        const { id } = this.state;

        this.closeDeletion();
        this.setState({finished_loading: false});

        Scorecard.deleteCard(email, id)
          .then(response => {
            alert(response.data["message"]);
            this.props.history.push("/scorecard/all");
          })
          .catch(err => console.log(err));

    }

    closeDeletion() {
        document.getElementById("confirm-box").setAttribute("class","delete-confirmation-box");
        document.getElementById("tool-1").setAttribute("class","btn");
        document.getElementById("tool-2").setAttribute("class","btn btn-delete");
    }

    confirmDeletion() {
        document.getElementById("confirm-box").setAttribute("class","delete-confirmation-box-active");
        document.getElementById("tool-1").setAttribute("class","btn-hidden");
        document.getElementById("tool-2").setAttribute("class","btn-hidden");
    }

    editScorecard = () => {
        localStorage.set("state", this.state);

        this.props.history.push("/scorecard/edit");
    }



    retrieveDetails(id) {
        const email = localStorage.get("email");

        Scorecard.retrieveCard(email, id)
          .then(response => {

            let link = window.location.href.split('/');
            let cname = link[5].split('%20').join(' ');
            let pdate = link[6];

            this.setState({
                id: id,
                course_name: cname, play_date: pdate,

                yard_front: response.data.yards["yard_front"],
                yard_back: response.data.yards["yard_back"],
                yard_total: response.data.yards["yard_total"],
                yard_handicap: response.data.yards["yard_handicap"],
                yard_1: response.data.yards["yard_list"][0], yard_2: response.data.yards["yard_list"][1], yard_3: response.data.yards["yard_list"][2],
                yard_4: response.data.yards["yard_list"][3], yard_5: response.data.yards["yard_list"][4], yard_6: response.data.yards["yard_list"][5],
                yard_7: response.data.yards["yard_list"][6], yard_8: response.data.yards["yard_list"][7], yard_9: response.data.yards["yard_list"][8],
                yard_10: response.data.yards["yard_list"][9], yard_11: response.data.yards["yard_list"][10], yard_12: response.data.yards["yard_list"][11],
                yard_13: response.data.yards["yard_list"][12], yard_14: response.data.yards["yard_list"][13], yard_15: response.data.yards["yard_list"][14],
                yard_16: response.data.yards["yard_list"][15], yard_17: response.data.yards["yard_list"][16], yard_18: response.data.yards["yard_list"][17],

                par_front: response.data.pars["par_front"],
                par_back: response.data.pars["par_back"],
                par_total: response.data.pars["par_total"],
                par_handicap: response.data.pars["par_handicap"],
                par_1: response.data.pars["par_list"][0], par_2: response.data.pars["par_list"][1], par_3: response.data.pars["par_list"][2],
                par_4: response.data.pars["par_list"][3], par_5: response.data.pars["par_list"][4], par_6: response.data.pars["par_list"][5],
                par_7: response.data.pars["par_list"][6], par_8: response.data.pars["par_list"][7], par_9: response.data.pars["par_list"][8],
                par_10: response.data.pars["par_list"][9], par_11: response.data.pars["par_list"][10], par_12: response.data.pars["par_list"][11],
                par_13: response.data.pars["par_list"][12], par_14: response.data.pars["par_list"][13], par_15: response.data.pars["par_list"][14],
                par_16: response.data.pars["par_list"][15], par_17: response.data.pars["par_list"][16], par_18: response.data.pars["par_list"][17],

                p1_name: response.data.players["player_1"].name, p2_name: response.data.players["player_2"].name, 
                p3_name: response.data.players["player_3"].name, p4_name: response.data.players["player_4"].name, 

                p1_front: response.data.players["player_1"]["score_front"],
                p1_back: response.data.players["player_1"]["score_back"], p1_total: response.data.players["player_1"]["score_total"],
                p1_handicap: response.data.players["player_1"]["score_handicap"], 

                p1_hole_1: response.data.players["player_1"]["strokes"][0],
                p1_hole_2: response.data.players["player_1"]["strokes"][1], p1_hole_3: response.data.players["player_1"]["strokes"][2],
                p1_hole_4: response.data.players["player_1"]["strokes"][3], p1_hole_5: response.data.players["player_1"]["strokes"][4],
                p1_hole_6: response.data.players["player_1"]["strokes"][5], p1_hole_7: response.data.players["player_1"]["strokes"][6],
                p1_hole_8: response.data.players["player_1"]["strokes"][7], p1_hole_9: response.data.players["player_1"]["strokes"][8],
                p1_hole_10: response.data.players["player_1"]["strokes"][9], p1_hole_11: response.data.players["player_1"]["strokes"][10],
                p1_hole_12: response.data.players["player_1"]["strokes"][11], p1_hole_13: response.data.players["player_1"]["strokes"][12],
                p1_hole_14: response.data.players["player_1"]["strokes"][13], p1_hole_15: response.data.players["player_1"]["strokes"][14],
                p1_hole_16: response.data.players["player_1"]["strokes"][15], p1_hole_17: response.data.players["player_1"]["strokes"][16],
                p1_hole_18: response.data.players["player_1"]["strokes"][17], 

                p2_front: response.data.players["player_2"]["score_front"],
                p2_back: response.data.players["player_2"]["score_back"], p2_total: response.data.players["player_2"]["score_total"],
                p2_handicap: response.data.players["player_2"]["score_handicap"], 

                p2_hole_1: response.data.players["player_2"]["strokes"][0],
                p2_hole_2: response.data.players["player_2"]["strokes"][1], p2_hole_3: response.data.players["player_2"]["strokes"][2],
                p2_hole_4: response.data.players["player_2"]["strokes"][3], p2_hole_5: response.data.players["player_2"]["strokes"][4],
                p2_hole_6: response.data.players["player_2"]["strokes"][5], p2_hole_7: response.data.players["player_2"]["strokes"][6],
                p2_hole_8: response.data.players["player_2"]["strokes"][7], p2_hole_9: response.data.players["player_2"]["strokes"][8],
                p2_hole_10: response.data.players["player_2"]["strokes"][9], p2_hole_11: response.data.players["player_2"]["strokes"][10],
                p2_hole_12: response.data.players["player_2"]["strokes"][11], p2_hole_13: response.data.players["player_2"]["strokes"][12],
                p2_hole_14: response.data.players["player_2"]["strokes"][13], p2_hole_15: response.data.players["player_2"]["strokes"][14],
                p2_hole_16: response.data.players["player_2"]["strokes"][15], p2_hole_17: response.data.players["player_2"]["strokes"][16],
                p2_hole_18: response.data.players["player_2"]["strokes"][17],

                p3_front: response.data.players["player_3"]["score_front"],
                p3_back: response.data.players["player_3"]["score_back"], p3_total: response.data.players["player_3"]["score_total"],
                p3_handicap: response.data.players["player_3"]["score_handicap"], 

                p3_hole_1: response.data.players["player_3"]["strokes"][0],
                p3_hole_2: response.data.players["player_3"]["strokes"][1], p3_hole_3: response.data.players["player_3"]["strokes"][2],
                p3_hole_4: response.data.players["player_3"]["strokes"][3], p3_hole_5: response.data.players["player_3"]["strokes"][4],
                p3_hole_6: response.data.players["player_3"]["strokes"][5], p3_hole_7: response.data.players["player_3"]["strokes"][6],
                p3_hole_8: response.data.players["player_3"]["strokes"][7], p3_hole_9: response.data.players["player_3"]["strokes"][8],
                p3_hole_10: response.data.players["player_3"]["strokes"][9], p3_hole_11: response.data.players["player_3"]["strokes"][10],
                p3_hole_12: response.data.players["player_3"]["strokes"][11], p3_hole_13: response.data.players["player_3"]["strokes"][12],
                p3_hole_14: response.data.players["player_3"]["strokes"][13], p3_hole_15: response.data.players["player_3"]["strokes"][14],
                p3_hole_16: response.data.players["player_3"]["strokes"][15], p3_hole_17: response.data.players["player_3"]["strokes"][16],
                p3_hole_18: response.data.players["player_3"]["strokes"][17],

                p4_front: response.data.players["player_4"]["score_front"],
                p4_back: response.data.players["player_4"]["score_back"], p4_total: response.data.players["player_4"]["score_total"],
                p4_handicap: response.data.players["player_4"]["score_handicap"], 

                p4_hole_1: response.data.players["player_4"]["strokes"][0],
                p4_hole_2: response.data.players["player_4"]["strokes"][1], p4_hole_3: response.data.players["player_4"]["strokes"][2],
                p4_hole_4: response.data.players["player_4"]["strokes"][3], p4_hole_5: response.data.players["player_4"]["strokes"][4],
                p4_hole_6: response.data.players["player_4"]["strokes"][5], p4_hole_7: response.data.players["player_4"]["strokes"][6],
                p4_hole_8: response.data.players["player_4"]["strokes"][7], p4_hole_9: response.data.players["player_4"]["strokes"][8],
                p4_hole_10: response.data.players["player_4"]["strokes"][9], p4_hole_11: response.data.players["player_4"]["strokes"][10],
                p4_hole_12: response.data.players["player_4"]["strokes"][11], p4_hole_13: response.data.players["player_4"]["strokes"][12],
                p4_hole_14: response.data.players["player_4"]["strokes"][13], p4_hole_15: response.data.players["player_4"]["strokes"][14],
                p4_hole_16: response.data.players["player_4"]["strokes"][15], p4_hole_17: response.data.players["player_4"]["strokes"][16],
                p4_hole_18: response.data.players["player_4"]["strokes"][17],

                finished_loading: true

            })
          })
          .catch(err => console.log(err));
    }

    componentDidMount() {
        let card_id = parseInt(window.location.href.split('/')[7]);

        this.retrieveDetails(card_id);
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
                p4_total, p4_handicap, finished_loading } = this.state;

        if (loggedIn) {
            if (!finished_loading) {
                return (<h3 className="loading">Loading...</h3>)
            }
            else {
                return (
                    <Fragment>
                        <div id="confirm-box" className="delete-confirmation-box">
                            <h3>Delete this scorecard?</h3>
                            <p className="warning-red">This action cannot be undone.</p>
                            <div className="btn btn-delete btn-confirm" onClick={this.deleteScorecard}>I'm sure.</div>
                            <div className="btn btn-confirm" onClick={this.closeDeletion}>No, I change my mind.</div>
                        </div>
                        <div className="scorecard-view-title">
                            <label>{course_name}</label>
                            <label>{play_date}</label>
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
                                <p className="scorecard-view-item">{yard_1}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_2}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_3}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_4}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_5}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_6}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_7}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_8}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_9}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{yard_front}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_10}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_11}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_12}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_13}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_14}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_15}</p>                            
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_16}</p>                            
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_17}</p>                            
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{yard_18}</p>                            
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{yard_back}</p>                            
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{yard_total}</p>                            
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{yard_handicap}</p>                            
                            </div>

                            <div className="scorecard-template-item center-text">Par</div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_1}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_2}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_3}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_4}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_5}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_6}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_7}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_8}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_9}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{par_front}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_10}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_11}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_12}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_13}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_14}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_15}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_16}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_17}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{par_18}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{par_back}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{par_total}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">+/-</div>

                            <div className="scorecard-template-item center-text">
                                <p className="scorecard-view-item">{p1_name}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_1}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_2}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_3}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_4}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_5}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_6}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_7}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_8}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_9}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p1_front}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_10}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_11}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_12}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_13}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_14}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_15}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_16}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_17}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p1_hole_18}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p1_back}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p1_total}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p1_handicap}</p>
                            </div>

                            <div className="scorecard-template-item center-text">
                                <p className="scorecard-view-item">{p2_name}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_1}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_2}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_3}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_4}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_5}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_6}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_7}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_8}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_9}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p2_front}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_10}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_11}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_12}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_13}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_14}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_15}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_16}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_17}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p2_hole_18}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p2_back}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p2_total}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p2_handicap}</p>
                            </div>

                            <div className="scorecard-template-item center-text">
                                <p className="scorecard-view-item">{p3_name}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_1}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_2}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_3}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_4}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_5}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_6}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_7}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_8}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_9}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p3_front}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_10}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_11}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_12}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_13}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_14}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_15}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_16}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_17}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p3_hole_18}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p3_back}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p3_total}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p3_handicap}</p>
                            </div>

                            <div className="scorecard-template-item center-text">
                                <p className="scorecard-view-item">{p4_name}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_1}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_2}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_3}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_4}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_5}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_6}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_7}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_8}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_9}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p4_front}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_10}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_11}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_12}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_13}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_14}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_15}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_16}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_17}</p>
                            </div>
                            <div className="scorecard-template-item">
                                <p className="scorecard-view-item">{p4_hole_18}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p4_back}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p4_total}</p>
                            </div>
                            <div className="scorecard-template-item scorecard-label-col">
                                <p className="scorecard-view-item">{p4_handicap}</p>
                            </div>
                        </div>

                        <div id="tool-1" className="btn" onClick={this.editScorecard}>Edit</div>
                        <div id="tool-2" className="btn btn-delete" onClick={this.confirmDeletion}>Delete</div>
                </Fragment>
                );
            }
        } else {
            return (<h1>Please log in to continue.</h1>);
        }
    }
}

export default ScorecardView;