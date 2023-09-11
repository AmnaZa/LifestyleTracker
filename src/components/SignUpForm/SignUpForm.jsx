import React, { Component } from "react";
import { signUp } from '../../utilities/users-service';
import '../form.css'


export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
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
            delete formData.error;
            delete formData.confirm;

            const user = await signUp(formData);
            this.props.setUser(user);
        } catch {
            // An error occurred
            this.setState({ error: 'Sign Up Failed - Try Again' });
        }
    };

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="container">
                    <div className="title">Sign Up</div>
                    <div className="content">
                        <form onSubmit={this.handleSubmit}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Name</span>
                                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Confirm Password</span>
                                    <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                                </div>
                            </div>
                            <div className="button">
                                <button type="submit" disabled={disable}>SIGN UP</button>
                            </div>
                        </form>
                        <p className="error-message">&nbsp;{this.state.error}</p>
                    </div>
                </div>
            </div>
        );
    }
}
