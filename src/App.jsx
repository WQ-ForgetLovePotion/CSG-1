import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

import { Home } from '@/home/'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Redirect from='/' to='/home/category'></Redirect>
        </Switch>
      </div>
    );
  }
}

export default App;
