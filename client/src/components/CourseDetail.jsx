import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function CourseDetail(props) {

    const [course, setCourse] = useState('')
    useEffect(() => {
        axios.get("http://localhost:5000/api/courses/")
            .then(res => setState(res.data)
            )
    })

    return (
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <NavLink className="button" to="/updatecourse"> Update Course</NavLink>
                    <a className="button" href="#">Delete Course</a>
                    <a className="button button-secondary" href="index.html">Return to List</a>
                </div>
            </div>

            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.title}</h4>
                            <p>By {user.firstName} {user.lastName}</p>

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





