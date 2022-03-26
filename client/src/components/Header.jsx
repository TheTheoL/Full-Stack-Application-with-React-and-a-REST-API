import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><NavLink to="/">Courses</NavLink></h1>
                <nav>
                    <ul className="header--signedout">
                        <li><a href="sign-up.html">Sign Up</a></li>
                        <li><NavLink to="/signin">Sign In</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}

export default Header; 