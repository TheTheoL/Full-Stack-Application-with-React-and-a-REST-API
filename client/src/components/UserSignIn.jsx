import React, { useState } from 'react'

export default function UserSignIn() {

    function handleSubmit(event) {
        event.preventDefault();
        submit();
    }

    function handleCancel(event) {
        event.preventDefault();
        cancel();
    }

    return (
        <div className="form--centered">
            <h2>Sign In</h2>
            <form>
                <label htmlFor="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" defaultValue="" />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" defaultValue="" />
                <button className="button" type="submit" onClick={handleSubmit}>Sign In</button><button className="button button-secondary" onClick={handleCancel}>Cancel</button>
            </form>
            <p>Don't have a user account? Click here to <a href="sign-up.html">sign up</a>!</p>
        </div>
    );
}

