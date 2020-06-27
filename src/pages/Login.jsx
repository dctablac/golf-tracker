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
        
        Idm.login(email, password)
          .then(response => {
              console.log(response);
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
                <h1 className="content-title">Login</h1>

                <label>Email</label>
                <input className="cred-input" type="email" name="email" value={email} onChange={this.updateField} />
                <label>Password</label>
                <input className="cred-input" type="password" name="password" value={password} onChange={this.updateField} />

                <button className="form-btn" type="submit">Login</button>
            </form>
        );
    }
}

export default Login;