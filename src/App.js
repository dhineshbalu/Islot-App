import React, { Component } from 'react';
import './App.css';

import Interviewer_Dashboard from './Interviewer_Dashboard/Interviewer_Dashboard';
import Event_Detail from './Event_Detail/Event_Detail';
import Interviewer_Event from './Interviewer_Event/Interviewer_Event';
import fire from './Fire';
import HomePage from './HomePage/HomePage';
class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   speed:10
    // }

    this.state = {
      user: {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user
        });
      }
      else {
        this.setState({
          user: null
        });
      }
    });
  }
  // componentDidMount()
  // {
  //   const  rootRef = fire.database().ref().child('react');
  //   console.log(rootRef);
  //   const speedRef = rootRef.child('speed');
  //   speedRef.on('value',snap =>{
  //     this.setState({
  //       speed:snap.val()
  //     });
  //   });

  // }
  render() {
    return (
      <div >
        {/* {this.state.user ? (<Interviewer_Dashboard />):(<HomePage />)}
       */}
       <HomePage />
       <Interviewer_Dashboard />
       <Event_Detail />
       <Interviewer_Event/>
      </div>
    );
  }
}

export default App;
