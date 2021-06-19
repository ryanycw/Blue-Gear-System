import { Component } from "react";
import { Redirect, useHistory } from 'react-router-dom'
import RTGear from "./components/RotateTransmitGear"
import ogb from "./components/css/img/gear_logo_blue.svg"

import "./components/css/Landing.scss"
import { ThemeProvider } from "react-bootstrap";

export default class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {'redirect':false,}
        this.onRegisterClick = this.onRegisterClick.bind(this)
        this.onLoginClick = this.onLoginClick.bind(this)
    }

    onRegisterClick = () => {
        this.setState(
            {
                'redirect':true,
                'redirectpath':"/register"
            }
        )
    }

    onLoginClick = () => {
        this.setState(
            {
                'redirect':true,
                'redirectpath':"/login"
            }
        )
    }

    render() {
        if (this.state.redirect)
            return <Redirect to={this.state.redirectpath} />
        else {
            return (
                <div className="hero-container">
                    <div className="header">
                        <div className="h3">Blue Gear</div>
                        <div className="p">藍齒輪計畫</div>
                    </div>
                    <div className="button-group">
                        <input type="button" className="primary-btn login-btn" value="register" onClick={this.onRegisterClick} />
                        <input type="button" className="primary-btn register-btn" value="login" onClick={this.onLoginClick} />
                    </div>
                    <div className="vertical">Lerom Law Firm was founded in Toronto</div>
                    <RTGear className={"blue_gear"} src={ogb} dir={1} />
                </div>
            )
        }
    }
}