import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import Jdenticon from "react-jdenticon";
import { AccountContext } from './components/context';
import "./components/css/Profile.scss"

const axios = require('axios')
export default class Profile extends Component {
    static contextType = AccountContext
    constructor(props) {
        super(props);
        this.state = {
          name: 'JaneDoe',
          password: '-',
          bgp_class: '6',
          cur_country: 'wonderlamd',
          location: 'lalaland',
          email: 'outofnowhere@gmail.com',
          phone: '885252',
          profession: "still searching",
          website:"www.google.com",
          grad_class: '-1',
          grad_dep: 'CS',
          isSignedUp: false, // <-- initialize the signup state as false
        }
        this.accountState = this.context
        console.log(this.accountState)
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

        axios.post(`http://127.0.0.1:8000/member/api/create`,{
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

    componentDidMount(){
        axios.get()
    }

    onChangeIconClick=()=>{
        alert("function under construction")
    }

    render() {
        this.accountState = this.context
        console.log("render Profile", this.accountState,this.state)
        if(!localStorage.getItem('token')){
            return <Redirect to='login'/>
        }
        return (
            <div className="page-container profile-page">
                <div id="profile-image-container">
                    <Jdenticon size="200" value={this.accountState.Account} alt=""/>
                    <input className="primary-btn btn" type="button" value="Change Icon" onClick={this.onChangeIconClick}/>
                </div>
                <div id="form-container">
                    <div className="row">
                        <div className="title">Name</div>
                        <input type="text" onChange={this.onChange} value="name" value={this.state.name}/>
                    </div>
                    <div className="row">
                        <div className="title">Email</div>
                        <input type="text"  onChange={this.onChange} value="email" value={this.state.email}/>
                    </div>
                    <div className="row">
                        <div className="title">Password</div>
                        <input type="text"  onChange={this.onChange} value="password" value={this.state.password}/>
                    </div>
                    <div className="row">
                        <div className="title">Location</div>
                        <input type="text"  onChange={this.onChange} value="location" value={this.state.location}/>
                    </div>
                    <div className="row">
                        <div className="title">Professions</div>
                        <input type="text"  onChange={this.onChange} value="Professions" value={this.state.professions}/>
                    </div>
                    <div className="row">
                        <div className="title">interest</div>
                        <input type="text"  onChange={this.onChange} value="interest" value={this.state.interest}/>
                    </div>
                    <div className="row">
                        <div className="title">website</div>
                        <input type="text"  onChange={this.onChange} value="website" value={this.state.website}/>
                    </div>
                    <div className="row">
                        <div className="title">self-intro</div>
                        <input type="textarea"  onChange={this.onChange} value="intro" value={this.state.intro}/>
                    </div>
                    <div className="btn-container">
                        <input className="primary-btn btn" type="button" value="update change" />
                    </div>
                </div>
            </div>
        )
    }
}

