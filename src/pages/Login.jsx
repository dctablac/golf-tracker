import React, { Component } from "react";

import Idm from "../services/Idm";

class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    handleSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;
        const { handleLogIn } = this.props;
        
        Idm.login(email, password)
          .then(response => {
              alert(response.data["message"]);
              if (response.data["resultCode"] === 120) {
                handleLogIn(email);
                this.props.history.push('/home');
              }
          })
          .catch(error => console.log(error));
    };

    updateField = ({target}) => {
        const { name, value} = target;
        this.setState({ [name]: value} );
    };



    render() {
        const { email, password } = this.state;

        return (
            <form className="cred-form" onSubmit={this.handleSubmit}>
                <h2 className="content-title">Login</h2>

                <div className="cred-container">
                    <input className="cred-input" type="email" name="email" value={email} onChange={this.updateField} autoComplete="off" placeholder="Email"/>
                    <input className="cred-input" type="password" name="password" value={password} onChange={this.updateField} placeholder="Password"/>
                </div>
                

                <button className="form-btn" type="submit">Login</button>
            </form>
        );
    }
}

export default Login;