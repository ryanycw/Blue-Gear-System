import React, { Component } from 'react'
import  { Redirect } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        if(!localStorage.getItem('token')){
            return <Redirect to='login'/>
        }
        
        return (
            <div>
                {localStorage.getItem('user')}
            </div>
        )
    }
}