import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import RTGear from "./components/RotateTransmitGear"
import ogb from "./components/css/img/gear_blue.svg"
import ogy from "./components/css/img/gear_logo_gold.svg"
import ogg from "./components/css/img/gear_gray.svg"


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
        this.globalAccountChange = props.accountHandler;
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit(event) {
        console.log(this.state.username)
        console.log(this.state.password)
        axios.post(`http://127.0.0.1:8000/authentication/api/token/`,{
            email: this.state.username,
            password: this.state.password,
        }).then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.access);
            localStorage.setItem('user', res.config.data);
            if (res.status === 200) {
                this.setState({ isSignedUp: true }); // after signing up, set the state to true. This will trigger a re-render
                this.globalAccountChange(true,this.state.username)
            }
        }).catch(function (err){
            console.log(Object.keys(err.response.statusText))
            for(var key in err.response){
                var value = err[key]
                console.log(key, value)
            }
            alert(err.response.statusText)
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
                <RTGear className={"blue_gear"} src={ogb} dir={-1}/>
                <RTGear className={"yellow_gear"} src={ogy} dir={-1}/>
                <RTGear className={"grey_gear"} src={ogg} dir={1}/>
                <div className="form">
                    <h3>Sign In</h3>
                    <form action="">
                        <div className="row">
                            <label>Account</label>
                            <input type="text" name="username" placeholder="E-mail / Phone Number" value={this.state.username} onChange={this.onChange} onKeyDown={(e)=>{if(e.key==="Enter"){this.handleSubmit(e)}}}/>
                        </div>
                        
                        <div className="row">
                            <label>Password</label>
                            <input type="password" id="password" name="password" value={this.state.password} onChange={this.onChange} onKeyDown={(e)=>{if(e.key==="Enter"){this.handleSubmit(e)}}}/>
                        </div>

                        <div className="btn-row">
                            <input type="button" className="primary-btn" id="login" value="log in" onClick={this.handleSubmit}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}