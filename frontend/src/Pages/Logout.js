import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Logout extends Component {
    constructor(props){
        super(props)
        this.props.accountHandler("false","")
    }
    render() {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.setItem("LoggedIn", false);
            localStorage.setItem("Account","")
            return <Redirect to='/login'/>
    }
}