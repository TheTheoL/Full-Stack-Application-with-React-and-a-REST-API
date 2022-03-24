import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';




export default class CourseDetail extends Component {

    state = {

        courses: []

    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/courses/:id')
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
            
        );
    }
}