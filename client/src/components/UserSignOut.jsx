import React from 'react';
import {
    Redirect
} from 'react-router-dom';

//simple component that signs-out a user

export default ({
    context
}) => {
    context.actions.signOut();

    return ( <
        Redirect to = "/" / >
    );
}