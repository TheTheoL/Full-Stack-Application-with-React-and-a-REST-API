import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function CourseDetail(props) {

    const [course, setCourse] = useState('')

    useEffect(() => {
        axios.get("http://localhost:5000/api/courses/" + props.match.params.id)
            .then(res => setCourse(res.data)
            )
    }, [])

    return (
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <NavLink className="button" to="#"> Update Course</NavLink>
                    <NavLink className="button" to="#">Delete Course</NavLink>
                    <NavLink className="button button-secondary" to="#">Return to List</NavLink>
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





