import React, { Component } from 'react';
import './App.css';
 import Interviewer_Event from './Interviewer_Event/Interviewer_Event';
import Interviewer_Dashboard from './Interviewer_Dashboard/Interviewer_Dashboard';
import Testing from './Testing/Testing';
class App extends Component {
  render() {
    return (
      <div >
      
       <Interviewer_Event />
        <Interviewer_Dashboard />
        <Testing />
      </div>
    );
  }
}

export default App;
