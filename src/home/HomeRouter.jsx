import React, { Component } from 'react';

import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

// 导入二级路由组件
import Home from './Home';
import { PaperCate } from './paperCate';
import { SearchRes } from './search';
import Page404 from './page404/Page404';

@withRouter
class HomeRouter extends Component {
   render() {
      let { url } = this.props.match
      return (
         <Switch>
            <Route path={`${url}/browse`} component={Home}></Route>
            <Route path={`${url}/online`}></Route>
            <Route path={`${url}/magazine`}></Route>
            <Route path={`${url}/paper`}><PaperCate /></Route>
            <Route path={`${url}/database`}></Route>
            <Route path={`${url}/rank`}></Route>
            <Route path={`${url}/search`} render={SearchRes}></Route>
            <Route path={`${url}/bookshelf`}></Route>
            <Route path={`${url}/mine`}></Route>
            <Redirect from={`${url}`} to={`${url}/browse`}></Redirect>
            <Route path='*' render={Page404}></Route>
         </Switch>
      )
   }
}

export default HomeRouter