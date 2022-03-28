import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function UserSignIn(props) {

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

    }

    function handleCancel(event) {
        event.preventDefault();

    }



    return (
        <div className="form--centered">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" defaultValue="" />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" defaultValue="" />
                <button className="button" type="submit" onClick={handleSubmit}>Sign In</button><button className="button button-secondary" onClick={handleCancel}>Cancel</button>
            </form>
            <p>Don't have a user account? Click here to <NavLink to='/usersignup'>sign up</NavLink>!</p>
        </div>
    );
}

