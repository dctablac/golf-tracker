import React, { Component } from "react";
import Idm from "../services/Idm";

class Register extends Component {
    state = {
        email: "",
        password: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        
        const { email, password } = this.state;

        Idm.register(email, password)
          .then(response => {
              alert(response.data["message"]);
              this.props.history.push('/login');
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
                <h1 className="content-title">Register</h1>
                <label>Email</label>
                <input className="cred-input" type="email" name="email" value={email} onChange={this.updateField} />
                <label>Password</label>
                <input className="cred-input" type="password" name="password" value={password} onChange={this.updateField} />
                <button className="form-btn" type="submit">Register</button>
            </form>
        );
    };
}

export default Register;