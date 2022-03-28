import React from 'react';

export default (props) => {
    const {
        cancel,
        errors,
        submit,
        elements,
    } = props;

    function handleSubmit(event) {
        event.preventDefault();
        submit();
    }

    function handleCancel(event) {
        event.preventDefault();
        cancel();
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                {elements()}
                <div className="pad-bottom">
                    <button className="button" type="submit" >Sign In</button><button className="button button-secondary">Cancel</button>
                </div>
            </form>
        </div>
    );
}


