import React, { PureComponent } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import { HomeRouter } from './home';
import Login from './login/Login';
import Regsiter from './regsiter/Regsiter';

export default class App extends PureComponent {
   render() {
      return (
         <Switch>
            <Route path='/home' {...this.props}>
               <HomeRouter />
            </Route>
            <Route path='/login' render={Login}></Route>
            <Route path='/reg' children={Regsiter}></Route> 
            <Redirect from='/' to='/home'></Redirect>
         </Switch>
      )
   }
}
