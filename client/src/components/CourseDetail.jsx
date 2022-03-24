import React, { Component } from 'react';
import './Courses';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';




export default class CourseDetail extends Component {

    state = {

        courses: [],

    }

    componentDidMount({ match }) {
        axios.get(`http://localhost:5000/api/courses/${match.path}`)
            .then(res => {
                this.setState({
                    courses: res.data,
                    users: res.data
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }


    render() {
        return (
            // console.log(this.props)

            <main>
                <div class="actions--bar">
                    <div class="wrap">
                        <NavLink className="button" to="/updatecourse"> Update Course</NavLink>
                        <a class="button" href="#">Delete Course</a>
                        <a class="button button-secondary" href="index.html">Return to List</a>
                    </div>
                </div>

                <div class="wrap">
                    <h2>Course Detail</h2>
                    <form>
                        <div class="main--flex">
                            <div>
                                <h3 class="course--detail--title">Course</h3>
                                <h4 class="course--name">{course.title}</h4>
                                <p>By {user.firstName} {user.lastName}</p>

                                <ReactMarkdown>{course.description}</ReactMarkdown>
                            </div>
                            <div>
                                <h3 class="course--detail--title">Estimated Time</h3>
                                <p>{course.estimatedTime}</p>

                                <h3 class="course--detail--title">Materials Needed</h3>
                                <ReactMarkdown>{course.materialsNeeded}</ReactMarkdown>
                            </div>
                        </div>
                    </form>
                </div>
            </main>



        );
    }
}