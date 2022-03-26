import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';



//imported components
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';


export default class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Route exact path="/" component={Courses} />
          <Route path="/courses/:id" component={CourseDetail} />
          <Route path="/signin" component={UserSignIn} />

        </div>
      </BrowserRouter>
    );
  }
}
