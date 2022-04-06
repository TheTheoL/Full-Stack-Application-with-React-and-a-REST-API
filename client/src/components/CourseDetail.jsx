import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Context } from '../Context';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom"


export default function CourseDetail({ history }) {


    const context = useContext(Context);
    //per ReactRouter: useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
    let { id } = useParams();

    //state
    const [course, setCourse] = useState('')
    const [title, setTitle] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [description, setDescription] = useState('');
    const [materialsNeeded, setMaterialsNeeded] = useState('');
    const [errors, setErrors] = useState([]);



    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses/${id}`)
            .then(res => setCourse(res.data)
            )
    }, [])

    function deleteCourse(event) {
        event.preventDefault();
        const deletedCourse = { title, estimatedTime, description, materialsNeeded, userId: context.authenticatedUser.id }

        const encodedCredentials = btoa(`${context.authenticatedUser.emailAddress}:${context.authenticatedUser.password}`);

        fetch(`http://localhost:5000/api/courses/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${encodedCredentials}`
            },
            body: JSON.stringify(deletedCourse)
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
            <div className="actions--bar">
                <div className="wrap">
                    <NavLink className="button" to={`/courses/${course.id}/update`}>Update Course</NavLink>
                    <NavLink className="button" to="/" onClick={deleteCourse}>Delete Course</NavLink>
                    <NavLink className="button button-secondary" to="/">Return to List</NavLink>
                </div>
            </div>

            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.title}</h4>
                            {course.student ? <p>By {course.student.firstName} {course.student.lastName}</p> : null}

                            <ReactMarkdown>{course.description}</ReactMarkdown>
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>{course.estimatedTime}</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ReactMarkdown>{course.materialsNeeded}</ReactMarkdown>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}





