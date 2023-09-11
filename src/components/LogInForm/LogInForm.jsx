import React, { Component } from "react";
import { login } from '../../utilities/users-service';
import '../form.css'

export default class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    handleSubmit = async (evt) => {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            const formData = { ...this.state };

            const user = await login(formData);
            this.props.setUser(user);
        } catch {
            // An error occurred
            this.setState({ error: 'Login Failed - Try Again' });
        }
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="title">Log In</div>
                    <div className="content">
                        <form onSubmit={this.handleSubmit}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                                </div>
                            </div>
                            <div className="button">
                                <button type="submit">LOG IN</button>
                            </div>
                        </form>
                        <p className="error-message">&nbsp;{this.state.error}</p>
                    </div>
                </div>
            </div>
        );
    }
}
