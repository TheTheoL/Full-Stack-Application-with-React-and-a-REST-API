import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';



//imported components
import withContext, { Provider } from './Context';
import PrivateRoute from './PrivateRoute';
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import NotFound from './components/NotFound';
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
              <Route path="/signin" component={UserSignInWithContext} />
              <Route path="/signup" component={UserSignUpWithContext} />
              <Route path="/signout" component={UserSignOutWithContext} />

              {/* routes that need to be private in order that an unauthorized user wouldn't be able to create or update a course */}
              <PrivateRoute exact path="/courses/create" component={CreateCourseWithContext} />

              <PrivateRoute path="/courses/:id/update" component={UpdateCourseWithContext} />

              <Route exact path="/courses/:id" component={CourseDetailWithContext} />
              <Route component={NotFoundWithContext} />

              <Route exact path="/error" component={Error} />
            </Switch>

          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}
