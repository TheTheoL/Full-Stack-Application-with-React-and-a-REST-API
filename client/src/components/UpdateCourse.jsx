import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../Context';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function UpdateCourse({ history }) {

    const context = useContext(Context);
    //per ReactRouter: useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
    let { id } = useParams();

    //state
    const [title, setTitle] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [description, setDescription] = useState('');
    const [materialsNeeded, setMaterialsNeeded] = useState('');
    const [errors, setErrors] = useState([]);
    const [course, setCourse] = useState('')

    //handles when user clicks cancel
    function handleCancel(event) {
        event.preventDefault();
        history.push(`/courses/${course.id}`);
    }

    //to update a course
    const updateCourse = (e) => {
        e.preventDefault();
        const updatedCourse = { title, estimatedTime, description, materialsNeeded, userId: context.authenticatedUser.id }

        const encodedCredentials = btoa(`${context.authenticatedUser.emailAddress}:${context.authenticatedUser.password}`);

        fetch(`http://localhost:5000/api/courses/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${encodedCredentials}`
            },
            body: JSON.stringify(updatedCourse)
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

    //Similar to the axios.get from our CourseDetail component, the useEffect gets the current state of the data inside the course details so to prevent a blank form from populating like it would if you were to create a new course. 
    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setDescription(res.data.description);
                setEstimatedTime(res.data.estimatedTime);
                setMaterialsNeeded(res.data.materialsNeeded);
            })
            .catch(err => { console.log('Oh no! Something went wrong fetching data', err); })
    }, [id]);




    return (
        <main>
            <div className="wrap">
                <h2>Update Course</h2>

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


                <form onSubmit={updateCourse}>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>
                            <input
                                id="courseTitle"
                                name="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />

                            <p>By Joe Smith</p>

                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea
                                id="courseDescription" name="description"
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
                                onChange={(e) => setMaterialsNeeded(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className="button" type="submit">Update Course</button><button className="button button-secondary" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </main>
    );
}