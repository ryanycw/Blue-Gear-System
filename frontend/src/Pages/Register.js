import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button, Container, Col } from 'react-bootstrap'

import "./components/css/Register.scss"
const axios = require('axios')


export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          isSignedUp: false, // <-- initialize the signup state as false
          page:1,
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    

    handleSubmit=(event)=> {
        console.log(this.state.first_name)
        console.log(this.state.last_name)
        console.log(this.state.email)
        console.log(this.state.password)
        axios.post('http://127.0.0.1:8000/authentication/api/register',{
            email:this.state.email,
            username: this.state.first_name,
            password: this.state.password,
            //first_name: this.state.first_name,
            //last_name: this.state.last_name
        }).then((res) => {
            console.log(res)
            /*localStorage.setItem('token', res.data.access);
            localStorage.setItem('user', res.config.data);*/
            if (res.status === 200) {
                this.setState({ isSignedUp: true }); // after signing up, set the state to true. This will trigger a re-render
            }
        }).catch(function (err){
            console.log(err.response.data.message)
        })
        event.preventDefault();
    }
    render() {
        if (this.state.isSignedUp) {
            // redirect to home if signed up
            return <Redirect to = '/login'/>;
        }
        if (this.state.page===1){
            return (
            
                <div className="reg-container">
                    <h3>Register</h3>
                    <div className="row">
                        <label>First name</label>
                        <input type="text" name="first_name" placeholder="Enter First Name" value={this.state.first_name} onChange={this.onChange}/>
                    </div>
                    <div className="row">
                        <label>Last name</label>
                        <input type="text" name="last_name" placeholder="Enter Last Name" value={this.state.last_name} onChange={this.onChange}/>
                    </div>
                    <div className="row">
                        <label>Username</label>
                        <input type="text" name="email" placeholder="Enter username" value={this.state.email} onChange={this.onChange}/>
                    </div>
                    <div className="row">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <input type="submit" className="primary-btn" value="register" onClick={this.handleSubmit}/>
                </div>
            )
        }
        if(this.state.page===2){
            return(
                <>page2</>
            )
        }
        
    }
}