import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import HomeUi from '../ui/HomeUi'
import { Category } from '@/home/category/'
import { OnlineLibrary } from '@/home/onlineLibrary/'
import { MagazineNews } from '@/home/magazineNews/'
import { MagazineCategory } from '@/home/magazineCategory'

@withRouter
class Home extends Component {

  GotoPageHandler = (page) => {
    return () => {
      this.props.history.push('/home/'+ page)
    } 
  }

  render() {
    
    return (
      <div>
        <HomeUi
          onGotoPage={this.GotoPageHandler}
          pathname={this.props.location.pathname}
        ></HomeUi>
        
        <Switch>
          <Route path='/home/category' component={Category}></Route>
          <Route path='/home/onlineLibrery' component={OnlineLibrary}></Route>
          {/* <Route path='/home/magazine' component={MagazineNews}></Route> */}
          <Route path='/home/magazine' component={MagazineCategory}></Route>
          <Redirect from='/home' to='/home/category'></Redirect>
        </Switch>
      </div>
    );
  }
}

export default Home;
