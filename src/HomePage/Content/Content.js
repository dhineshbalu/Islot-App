import React, { Component } from 'react';
import './Content.css';


class Content extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
          firstName:'',
          password:'',
          firstNameError:'false',
          passwordError:'false'
        }
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }
    submit()
    {
    this.props.data(this.state.firstName,this.state.password);
    }
     checkFirstName(firstname)
    {
        
        if(firstname!=""){
           document.getElementById("name_error").innerHTML="";
            return true;
          
        }
        else{
            return false;
        }

    }
  first_error()
    {
    
        document.getElementById("name_error").innerHTML=" name is required";
    }
    checkContainsNumber(firstname)
    {
        for(var i=0;i<firstname.length;i++)
        {
            if(firstname[i]>="0" && firstname[i]<="9")
               return true;
        }
        return false;
    }
     containsNumber1_error()
    {
        document.getElementById("name_error").innerHTML="no number to be used";
    }

    checkPassword(password)
    {
        
        if(password!=""){
           document.getElementById("password_error").innerHTML="";
            return true;
          
        }
        else{
            return false;
        }

    }
  password_error()
    {
    
        document.getElementById("password_error").innerHTML=" password is required";
    }

 
    change(name, e) {
        var value = e.target.value;
        
        this.setState(
            {
                [name]: value
            }
        );
//  console.log(value);
        this.validate(name, value);
    }

    validate(name, value) {
        let firstnameValid = this.state.firstnameError;
        let passwordValid = this.state.passwordError;
         if(name=="firstName")
        {
        
            if(this.checkFirstName(value)==false)
        {
            this.first_error();
            firstnameValid=false;
            
        }
        else if(this.checkContainsNumber(value))
        {
      
            this.containsNumber1_error();
            firstnameValid=false;
        }
        else
        {
            this.setState({
                firstNameError: true
            });
            firstnameValid=true;
        }
    }
    else
    {
            if(this.checkPassword(value)==false)
        {
            this.password_error();
            passwordValid=false;
        }
        else
        {
            this.setState({
                passwordError: true
            });
            passwordValid=true;
        }
    }
   // console.log(firstnameValid);
    //console.log(this.state.firstNameError);

    }

    render() {
        return (
            <div >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 content_page">
                            <h3 id="about">About us</h3>  
                            <p id="about_content">
                            AboutUs.com is a wiki Internet domain directory.  
                            It listed websites along with information about their content. As a wiki, 
                            AboutUs allows Internet users to add entries or modify information. 
                            AboutUs.com has since become a wiki for more than just websites.
                             The site now allows pages to be created for people, places, 
                             and almost anything else.Ray King, Jay Westerdal, 
                             and Paul Stahura founded AboutUs in 2005. 
                            </p>
                        </div>


                        <div class="col-lg-6 bend">
                            <h3 id="signin"><span id="top_name">Sign In</span></h3>
                            <div class="input-group ">

                                <input id="text" type="text" class="form-control inp" onChange={this.change.bind(this,'firstName')} name="username" placeholder="username" />
                          { this.state.firstNameError && <span id="name_error"></span>}
                            </div>
                            <div class="input-group">

                                <input id="password" type="password" class="form-control inp" onChange={this.change.bind(this,'password')} name="password" placeholder="Password" />
                          {  this.state.passwordError && <span id="password_error"></span> }
                            </div>

                            <button type="button" onClick={this.submit} class="btn btn-lg btn-primary bt1 ">Login</button>

                            <h4 id="dont">Don't have an Account</h4>
                           <span id="inline"> <button type="button" class="btn btn-lg btn-warning bt2">Sign up for Interviwer </button>
                              <button type="button" class="btn btn-lg btn-danger bt3">Sign up for Admin</button></span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
