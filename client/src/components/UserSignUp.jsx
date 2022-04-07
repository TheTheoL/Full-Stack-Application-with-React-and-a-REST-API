import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Form from './Form';


//Component that displays the signup page for someone to sign up and become an authorized user. 
export default class UserSignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: [],
    }



    render() {
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            errors,
        } = this.state;

        return (
            <div className="form--centered">
                <h2>Sign Up</h2>

                {this.state.errors.length > 0 ? (
                    <div className="validation--errors">
                        <h3>Validation Errors</h3>
                        <ul>
                            {
                                errors.map((error, i) => {
                                    return (<li key={i}>{error}</li>)
                                })
                            }
                        </ul>
                    </div>
                ) : (
                    null
                )

                }

                <Form
                    cancel={this.cancel}
                    submit={this.submit}
                    submitButtonText="Sign Up"
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

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(() => {
            return {
                [name]: value
            };
        });
    }

    submit = () => {
        const { context } = this.props;
        const {
            firstName,
            lastName,
            emailAddress,
            password,

        } = this.state;

        // Create user
        const user = {
            firstName,
            lastName,
            emailAddress,
            password

        };

        context.data.createUser(user)
            .then(errors => {
                if (errors.length) {
                    return <div className="validation--errors">
                        <h3>Validation Errors</h3>
                        <ul>
                            <li>Please provide a value for "Title"</li>
                            <li>Please provide a value for "Description"</li>
                        </ul>
                    </div>
                } else {
                    context.actions.signIn(emailAddress, password)
                        .then(() => {
                            this.props.history.push('/');
                        });
                }
            })
            .catch((err) => {
                console.log(err);
                this.props.history.push('/error');
            });

    }

    cancel = () => {
        this.props.history.push('/');
    }
}