import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';



//imported components
import Header from './components/Header';
import Courses from './components/Courses';


export default class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Route path="/api/courses" component={Courses} />


        </div>
      </BrowserRouter>
    );
  }
}
