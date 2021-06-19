import React,{Component} from 'react';
import Navbar from "./Pages/components/Navbar";
import { Route, Switch, Link } from 'react-router-dom';
import { AccountContext } from './Pages/components/context';

import "./App.scss"
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Register from './Pages/Register'
import HomePage from './Pages/HomePage'
import Logout from './Pages/Logout'
import Profile from './Pages/Profile'
import Landing from './Pages/Landing'
import Fellow from './Pages/Fellow'


export default class App extends Component {
  constructor(props){
    super(props)
    if(localStorage.LoggedIn=="true"){
      this.state = {
        LoggedIn:localStorage.LoggedIn,
        Account:localStorage.Account,
      }
    }
    else{
      localStorage.setItem('LoggedIn', false);
      localStorage.setItem('Account', '');
      this.state = {
        LoggedIn:localStorage.LoggedIn,
        Account:localStorage.Account,
      }
    }
    this.onAccountChange = this.onAccountChange.bind(this)
  }

  // OnAccountChange 
  onAccountChange(loggedIn, account){
    this.setState({
        LoggedIn:loggedIn,
        Account:account
    })
    localStorage.setItem('LoggedIn', loggedIn);
    console.log(localStorage.LoggedIn)
    localStorage.setItem('Account', account);
  }

  render(){
    console.log("rerender App",this.state)
    return (
      <>
        <AccountContext.Provider value={this.state}>
          <Navbar accountState={this.state}/>
        </AccountContext.Provider>
        <div className="body">
          <Switch>
            <Route exact path="/">
              <HomePage />  
            </Route>
            <Route path="/login">
              <AccountContext.Provider value={this.state}>
                <Login accountHandler={this.onAccountChange} accountState={this.state}/>
              </AccountContext.Provider>
            </Route>
            <Route path="/register">
              <AccountContext.Provider value={this.state}>
                <Register accountHandler={this.onAccountChange} accountState={this.state}/>
              </AccountContext.Provider>
            </Route>
            <Route path="/profile">
              <AccountContext.Provider value={this.state}>
                <Profile accountHandler={this.onAccountChange} accountState={this.state}/>
              </AccountContext.Provider>
            </Route>
            <Route path="/fellow">
              <AccountContext.Provider value={this.state}>
                <Fellow accountHandler={this.onAccountChange} accountState={this.state}/>
              </AccountContext.Provider>
            </Route>
            <Route path="/logout">
              <Logout accountHandler={this.onAccountChange} accountState={this.state}/>
            </Route>
            <Route path="/landing">
              <AccountContext.Provider value={this.state}>
                <Landing/>
              </AccountContext.Provider>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </>
    )
  }  
  
}
