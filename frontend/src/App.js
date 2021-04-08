import React,{Component} from 'react';
import Navbar from "./Pages/components/Navbar";
import { Route, Switch, Link } from 'react-router-dom';

import "./App.scss"
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Register from './Pages/Register'
import HomePage from './Pages/HomePage'
import Logout from './Pages/Logout'
import Profile from './Pages/Profile'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      LoggedIn:"true",
      Account:"juno"
    }
  }
  render(){
    return (
      <>
        <Navbar props={this.state}/>
        <div className="body">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </>
    )
  }  
  
}
