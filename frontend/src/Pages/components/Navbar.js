import React,{Component} from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Jdenticon from "react-jdenticon";
import { AccountContext } from './context';

import "./css/Navbar.scss"
import Gearlogo from "./css/img/gear_logo_blue.svg"
import MenuIcon from "./css/img/menu.svg"
import { render } from 'react-dom';

const fs = require("fs");

const MobileMenu = (props)=>{
    return(props.toggle?
        <div className="mobilecard"></div>
        :
        <></>
    )
}

const AccountMenu = (props) => {
    return(props.toggle?
        <div className="accountcard">
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/profile" target="_blank" rel="noopener noreferrer" >Profile</Link></li>
        </div>
        :
        <></>
    )
}

export default class Navbar extends Component{
    static contextType = AccountContext

    constructor(props){
        super(props)
        this.state={
            accountToggleOn:false,
            mobileToggleOn:false,
            //LoggedIn:props.accountState.LoggedIn,
            //Account:props.accountState.Account
        }
        this.accountState = (this.context)?this.context:{LoggedIn:false, Account:""}
        console.log(this.accountState)
        this.accountMenuClick = this.accountMenuClick.bind(this)
        this.mobileMenuClick = this.mobileMenuClick.bind(this)
    }    

    accountMenuClick(e){
        console.log("accountmenuclick")
        this.setState( (state) =>({
            accountToggleOn:!state.accountToggleOn,
        }))
    }

    mobileMenuClick(e){
        console.log("mobilemenuclick")
        this.setState( (state) =>({
            mobileToggleOn:!state.mobileToggleOn,
        }))
    }

    render(){
        this.accountState = this.context
        console.log("rerender Navbar",this.accountState)
        if (this.accountState.LoggedIn==="false"){
            return(
                <>
                <div className="easy-nav-bar">
                    <div className="logo">
                        <img className="logo-pic" src={Gearlogo} alt="blue gear logo"/>
                        <a className="logo-words" href="#">Blue Gear</a>
                    </div>
                </div>
                </>
            ) 
        }
        else{
            return(
                <>
                <div className="nav-bar">
                    <MobileMenu toggle={this.state.mobileToggleOn}/>
                    <AccountMenu toggle={this.state.accountToggleOn}/>
                    <div className="nav-container">
                        <img className="mobile-menu" src={MenuIcon} alt="toggle menu bar" onClick={this.mobileMenuClick}/>
                        <div className="logo">
                            <img className="logo-pic" src={Gearlogo} alt="blue gear logo"/>
                            <Link className="logo-words" to="/">Blue Gear</Link>
                        </div>
                        <nav>
                            <ul className="primary-nav">
                                <li><Link className="routes" id="login-btn" to="/fellow">Fellow</Link></li>
                                <li><Link className="routes" id="login-btn" to="/Moments">Moments</Link></li>
                                <li><Link className="routes" id="login-btn" to="/dashboard">On going</Link></li>
                                <li><Link className="routes" id="login-btn" to="/books">Books</Link></li>
                            </ul>
                        </nav>
                        <div id="avatar" onClick={this.accountMenuClick}>
                            <Jdenticon size="32" value={this.state.Account} alt=""/>
                        </div>
                    </div>
                </div>
                
                </>
            )

        }
    }
}
