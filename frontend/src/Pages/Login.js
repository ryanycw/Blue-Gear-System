import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'

import enter from "./components/css/img/enter.svg"
import "./components/css/Login.scss"

const axios = require('axios')

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          isSignedUp: false, // <-- initialize the signup state as false
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit(event) {
        console.log(this.state.username)
        console.log(this.state.password)
        axios.post(`http://127.0.0.1:8000/authentication/api/token/`,{
            username: this.state.username,
            password: this.state.password,
        }).then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.access);
            localStorage.setItem('user', res.config.data);
            if (res.status === 200) {
                this.setState({ isSignedUp: true }); // after signing up, set the state to true. This will trigger a re-render
            }
        }).catch(function (err){
            console.log(err)
        })
        event.preventDefault();
    }

    render() {
        
        if (this.state.isSignedUp) {
            // redirect to home if signed up
            return <Redirect to = '/'/>;
        }
        return (
            <div className="container">
                <div className="left-col">
                    <h3>Sign In</h3>
                    <form action="">
                        <div className="row">
                            <label>Account</label>
                            <input type="text" name="username" placeholder="E-mail / Phone Number" value={this.state.username} onChange={this.onChange}/>
                        </div>
                        
                        <div className="row">
                            <label>Password</label>
                            <input type="password" id="password" name="password" value={this.state.password} onChange={this.onChange}/>
                        </div>

                        <div className="btn-row">
                            <input type="button" className="primary-btn" id="login" value="log in" onClick={this.handleSubmit}/>
                            <input type="button" className="primary-btn" id="register" value="register"/>
                        </div>
                    </form>
                </div>
                <div className="right-col"></div>
            </div>
        )
    }
}