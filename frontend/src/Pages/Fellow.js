import { Component } from "react";
import "../Pages/components/css/Fellow.scss"
import Jdenticon from "react-jdenticon";
import { AccountContext } from "./components/context";

export default class Fellow extends Component{
    static contextType = AccountContext
    constructor(props){
        super(props)
        this.accountState = this.context
        this.arr=["1","2","3","4","5","6","7","135","62","36","73","dsh","w","et","146"]
        console.log(this.arr)
    }
    render(){
        return(
            <div className="page-container">
                <SearchBar/>
                <div className="title">Class of 2020</div>
                    <div className="card-display">
                        {
                            this.arr.map((id)=>{
                                return <NameCard/>
                            })
                        }
                    </div>
                <div className="title">Class of 2019</div>
                    <div className="card-display">
                        {
                            this.arr.map((id)=>{
                                return <NameCard/>
                            })
                        }
                    </div>
                <div className="title">Class of 2018</div>
                    <div className="card-display">
                        {
                            this.arr.map((id)=>{
                                return <NameCard/>
                            })
                        }
                    </div>
            </div>
        )
    }
}

export class NameCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="card-container">
                <Jdenticon size="80" value={Math.random()} alt=""/>
            </div>
        )
    }
}

export class SearchBar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="searchbar-container">
                <div id="select-container">
                    <select name="grade" id="grade">
                        <option value="-">--屆數--</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>

                    <select name="major" id="major">
                        <option value="-">--科系--</option>
                        <option value="4">外文</option>
                        <option value="5">電機</option>
                        <option value="6">資財</option>
                        <option value="7">百川</option>
                    </select>

                    <select name="profession" id="profession">
                        <option value="-">--專長--</option>
                        <option value="4">UI</option>
                        <option value="5">Crypto</option>
                        <option value="6">Investing</option>
                        <option value="7">UX</option>
                    </select>
                </div>
                <div id="search-container">
                    <input type="text" name="searchname" id="" placeholder="name"/>
                    <input className="primary-btn btn" type="button" value="Search" />
                </div>
                
            </div>
        )
    }
}