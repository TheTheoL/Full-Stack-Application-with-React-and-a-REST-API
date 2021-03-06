import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


//This component provides the "Courses" screen by retrieving the list of courses from the REST API's /api/courses route and rendering a list of courses.

export default class Courses extends Component {

    state = {

        courses: []

    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/courses')
            .then(res => {
                this.setState({
                    courses: res.data
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }


    render() {
        return (

            <div className="wrap main--grid">
                {this.state.courses.map((course) => (
                    <NavLink key={course.id} className="course--module course--link" to={`/courses/${course.id}`}>
                        <h2 className="course--label">Course</h2>
                        <h3 className="course--title">{course.title}</h3>
                    </NavLink>
                ))}
                <NavLink className="course--module course--add--module" to="/courses/create">
                    <span className="course--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                        New Course
                    </span>
                </NavLink>
            </div>
        );
    }
}





