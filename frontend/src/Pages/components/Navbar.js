import React,{Component} from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Jdenticon from "react-jdenticon";

import "./css/Navbar.scss"
import Gearlogo from "./css/img/gear_logo_blue.svg"
import MenuIcon from "./css/img/menu.svg"

const fs = require("fs");
export default class Navbar extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    
    render(){
        console.log(this.props)
        if (this.props.LoggedIn=="false"){
            console.log("not logged in, return easy-nav")
            return(
                <>
                <div className="nav-bar">
                    <div className="container">
                        <img className="mobile-menu" src={MenuIcon} alt="toggle menu bar"/>
                        <div className="logo">
                            <img className="logo-pic" src={Gearlogo} alt="blue gear logo"/>
                            <a className="logo-words" href="#">Blue Gear</a>
                        </div>
                    </div>
                </div>
                </>
            ) 
        }
        else{
            return(
                <>
                <div className="nav-bar">
                    <div className="container">
                        <img className="mobile-menu" src={MenuIcon} alt="toggle menu bar"/>
                        <div className="logo">
                            <img className="logo-pic" src={Gearlogo} alt="blue gear logo"/>
                            <a className="logo-words" href="#">Blue Gear</a>
                        </div>
                        <nav>
                            <ul className="primary-nav">
                                <li><Link className="routes" id="login-btn" to="/login">Login</Link></li>
                                <li><Link className="routes" id="register-btn" to="/register">Register</Link></li>
                                <li><Link className="routes" id="profile-btn" to="/profile">About</Link></li>
                            </ul>
                        </nav>
                        <div id="avatar">
                            <Jdenticon size="32" value="default" alt=""/>
                        </div>
                    </div>
                </div>
                
                </>
            )

        }
    }
}
