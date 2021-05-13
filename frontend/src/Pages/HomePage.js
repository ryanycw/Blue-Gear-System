import React, { Component } from 'react'
import  { Redirect } from 'react-router-dom'

export default class HomePage extends Component {
    render() {

        //question what does this mean?
        if(!localStorage.getItem('token')){
            return <Redirect to='landing'/>
        }
        else{
            return (   
                <div>
                    {localStorage.getItem('user')}
                </div>
            )
        }

    }
}