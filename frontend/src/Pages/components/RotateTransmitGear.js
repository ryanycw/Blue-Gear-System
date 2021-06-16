import { Component } from "react";
import gear from "./css/img/SVG/Asset 10.svg"
import "./css/RTGear.scss"

export default class RTGear extends Component{
    _isMounted = false;

    constructor(props){
        super(props)
        this.state = {
            cursorX:0,
            cursorY:0,
        }
        this.mousemovehandler = this.mousemovehandler.bind(this)
    }

    mousemovehandler(e){
        if(this._isMounted){
            this.setState({
                cursorX:e.pageX,
                cursorY:e.pageY    
            })
        }
    }

    componentDidMount(){
        this._isMounted = true;
        window.addEventListener('mousemove',this.mousemovehandler)
    }

    componentWillUnmount(){
        this._isMounted = false;
        window.removeEventListener('mousemove',this.mousemovehandler)
    }

    render(){
        return(
          <img src={this.props.src} alt="gear pic"
            className={"gear"+" "+this.props.className}
            style={{
                //width: `${this.props.sz}em`,
                //height:`${this.props.sz}em`,
                //top:`${this.props.top}%`,
                //left:`${this.props.left}%`,
                transform: `rotateZ(${this.state.cursorX*0.03*this.props.dir}deg) scale(${this.state.cursorY*0.00005+1})`,
                transition: `transform 1s`,
            }}
          />  
        )
    }
    
}