import React, { Component } from 'react';

import Header from './Header/Header';
import Content from './Content/Content';

class HomePage extends Component {
  constructor()
  {
    super();
    this.state = {
      loginDetails:
      {
        name:'',
        password:''
      }
    
    }
      this.login = this.login.bind(this);
  }
  login(name,password)
  {
    console.log(name + " " +  password);
  // this.setState({
  //   loginDetails:{
  //   name:name,
  //   password:password
  //   }
  // },()=>
  // {
  // console.log(this.state.loginDetails.name);
  // });


  }
  render() {
    return (
      <div >
        <Header />
        <Content data={this.login}/>
            
      </div>
    );
  }
}

export default HomePage;
