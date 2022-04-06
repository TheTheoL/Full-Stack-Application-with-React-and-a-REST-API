import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';



//imported components
import withContext, { Provider } from './Context';
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import NotFound from './components/NotFound';
import Forbidden from './components/Forbidden';
import Error from './components/Error';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';

//components with context 
const HeaderWithContext = withContext(Header);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const NotFoundWithContext = withContext(NotFound);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Provider>
          <div>
            <HeaderWithContext />

            <Switch>
              <Route exact path="/" component={CoursesWithContext} />
              <Route exact path="/courses/:id" component={CourseDetailWithContext} />
              <Route path="/signin" component={UserSignInWithContext} />
              <Route path="/signup" component={UserSignUpWithContext} />
              <Route path="/signout" component={UserSignOutWithContext} />
              <Route path="/createcourse" component={CreateCourseWithContext} />
              <Route path="/courses/:id/update" component={UpdateCourseWithContext} />
              <Route component={NotFoundWithContext} />
              <Route exact path="/forbidden" component={Forbidden} />
              <Route exact path="/error" component={Error} />
            </Switch>

          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}
