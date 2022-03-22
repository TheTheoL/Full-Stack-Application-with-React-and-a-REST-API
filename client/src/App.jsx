import React, { Component } from 'react';



//imported components
import Header from './components/Header';



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      courses: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch(http://localhost:5000);
}

  render() {
    return (
      <Header />








    );
  }





}
