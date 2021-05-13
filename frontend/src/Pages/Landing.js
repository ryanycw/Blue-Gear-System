import { Component } from "react";
import { Container } from "react-bootstrap";
import RTGear from "./components/RotateTransmitGear"
import ogb from "./components/css/img/gear_blue.svg"
import ogy from "./components/css/img/gear_logo_gold.svg"
import ogg from "./components/css/img/gear_gray.svg"

import "./components/css/Landing.scss"

export default class Landing extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div className="hero-container">
                <div className="header">
                    <div className="h3">Blue Gear</div>
                    <div className="p">blablablablablablablablablablablablablablablablabla</div>
                </div>
                <input type="button" className="primary-btn" value="register"/>
                <input type="button" classname="primary-btn" value="login"/>
                <div className="vertical">Lerom Law Firm was founded in Toronto</div>
                <RTGear className="moving_gear" sz={800} src={ogb} top={0} left={28} dir={-1}/>
                <RTGear className="moving_gear gear_logogold" sz={300} src={ogy} top={6} left={20} dir={1}/>
                <RTGear className="moving_gear gear_gray"sz={500} src={ogg} top={40} left={62} dir={1}/>
            </div>
        )
    }
}