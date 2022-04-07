import React from 'react';
import {
    NavLink
} from 'react-router-dom';


//component that sets up the Header that shows up no matter what page they are linking to. Checks if the person is authorized and if so shows a welcome message that changes the state of the component only if they are authorized.

export default class Header extends React.PureComponent {
    render() {
        const {
            context
        } = this.props;
        const authUser = context.authenticatedUser;
        return ( <
            header >
            <
            div className = "wrap header--flex" >
            <
            h1 className = "header--logo" > < NavLink to = "/" > Courses < /NavLink></h1 >
            <
            nav > {
                authUser ? ( <
                    ul className = "header--signedin" >
                    <
                    li > Welcome, {
                        authUser.firstName
                    } {
                        authUser.lastName
                    }! < /li> <
                    li > < NavLink to = "/signout" > Sign Out < /NavLink></li >
                    <
                    /ul>
                ) : ( <
                    ul className = "header--signedout" >
                    <
                    li > < NavLink to = "/signup" > Sign Up < /NavLink></li >
                    <
                    li > < NavLink to = "/signin" > Sign In < /NavLink></li >
                    <
                    /ul>
                )
            } <
            /nav> <
            /div> <
            /header>
        );
    }
}