import React, { Component } from 'react'
import { Redirect } from 'react-router'
import RTGear from './components/RotateTransmitGear'
import blue_gear from "../Pages/components/css/img/gear_logo_blue.svg"
import "../Pages/components/css/HomePage.scss"

export default class HomePage extends Component {
    render() {

        //question what does this mean?
        if(!localStorage.getItem('token')){
            return <Redirect to='/login'/>
        }
        else{
            return (   
                <div className="page-container homapage-container">
                    <RTGear className={"blue_gear"} src={blue_gear} dir={1}/>
                    <div className="comming">comming soon</div>
                    {/*localStorage.getItem('user')*/}
                </div>
            )
        }

    }
}