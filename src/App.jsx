import React, { Component } from 'react';
import {Route ,Redirect,Switch} from 'react-router-dom'

import Home from './home/Home'
import Login from './login/Login'
import Page404 from './page404/Page404'
class App extends Component {
    render() {
        return (
             <Switch>
                <Route path="/home" component={props => <Home {...props}></Home>}></Route>

                <Route path="/login" component={props => <Login {...props}></Login>}></Route>

                <Redirect from="" to="/home"></Redirect>
                
                <Route path="*" component={props => < Page404 {...props}></ Page404>}></Route>

                
            </Switch>
        );
    } 
}
 
export default App;