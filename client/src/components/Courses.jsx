import React, { Component } from 'react';
import axios from 'axios';

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
                    <a key={course.id} className="course--module course--link" to={`/courses/${course.id}`}>
                        <h2 className="course--label">Course</h2>
                        <h3 className="course--title">{course.title}</h3>
                    </a>
                ))}
                <a className="course--module course--add--module" href="create-course.html">
                    <span className="course--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                        New Course
                    </span>
                </a>
            </div>
        );
    }
}


//need to be able to click on a course and have the specific course's detail page render. 
//need to be able to click on the 'new course' button and have the new-course form page appear. 

