import React, { useState, useContext } from 'react';
import { Context } from '../Context';


export default function CreateCourse({ history }) {


    const context = useContext(Context);

    //state
    const [title, setTitle] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [description, setDescription] = useState('');
    const [materialsNeeded, setMaterialsNeeded] = useState('');
    const [errors, setErrors] = useState([]);

    function handleCancel(event) {
        event.preventDefault();
        history.push('/');
    }


    const addNewCourse = (e) => {
        e.preventDefault();
        const newCourse = { title, estimatedTime, description, materialsNeeded, userId: context.authenticatedUser.id }

        const encodedCredentials = btoa(`${context.authenticatedUser.emailAddress}:${context.authenticatedUser.password}`);

        fetch('http://localhost:5000/api/courses', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${encodedCredentials}`
            },
            body: JSON.stringify(newCourse)
        })
            .then(res => {
                if (res.status === 400) {
                    res.json()
                        .then(data => setErrors(data.errors))
                } else {
                    history.push('/');
                }

            })
    }

    return (
        <main>
            <div className="wrap">

                <h2>Create Course</h2>

                {errors.length > 0 ? (
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

                <form onSubmit={addNewCourse}>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>
                            <input
                                id="courseTitle"
                                name="title"
                                type="text"
                                value={title}

                                onChange={(e) => setTitle(e.target.value)} />

                            <p>By </p>

                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea
                                id="courseDescription"
                                name="description"
                                value={description}

                                onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input
                                id="estimatedTime"
                                name="estimatedTime"
                                type="text"
                                value={estimatedTime}

                                onChange={(e) => setEstimatedTime(e.target.value)} />
                            <label htmlFor="materialsNeeded">Materials Needed</label>
                            <textarea
                                id="materialsNeeded"
                                name="materialsNeeded"
                                value={materialsNeeded}

                                onChange={(e) => setMaterialsNeeded(e.target.value)} />
                        </div>
                    </div>
                    <button className="button" type="submit">Create Course</button><button className="button button-secondary" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </main>
    );

}