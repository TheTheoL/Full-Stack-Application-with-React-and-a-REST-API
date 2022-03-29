import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Form from './Form';

export default class UserSignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
    }

    render() {
        const {
            firstName,
            lastName,
            emailAddress,
            password
        } = this.state;

        return (
            <div className="form--centered">
                <h2>Sign Up</h2>

                <Form
                    cancel={this.cancel}
                    submit={this.submit}
                    submitButtonText="Sign In"
                    elements={() => (
                        <React.Fragment>
                            <label>First Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={firstName}
                                onChange={this.change} />
                            <label>Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={lastName}
                                onChange={this.change} />
                            <label>Email Address</label>
                            <input
                                id="emailAddress"
                                name="emailAddress"
                                type="email"
                                value={emailAddress}
                                onChange={this.change} />
                            <label>Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={this.change} />
                        </React.Fragment>
                    )} />
                <p>Already have a user account? Click here to <NavLink to="/signin">sign in</NavLink>!</p>
            </div>
        );
    }
}