import React, { PureComponent } from 'react';

import { SideBar } from './stylePaperCate';
import { get } from '@u/http';

export default class sideBar extends PureComponent { 
/*    // 类组件 绑定类型检查 
   static propTypes = {
      list: PropsTypes.array
   }
 */
   state = { 
      curIndex: 0,
      cate: {}
   }

   handleClick = index => {
      return () => {
         this.setState({
            curIndex: index
         })
      }
   }

   async componentDidMount(){
      let res = await get({
         url: '/api/cate'
      })
      this.setState({
         cate: res.data.data.category
      })
   }

   render() {
      let { cate } = this.state;
      return (
         <SideBar>
            <li>{ Object.keys(cate) }</li>
            {
               cate[Object.keys(cate)] && cate[Object.keys(cate)].map((v, i) => 
                  <li 
                     key={v} 
                     className={this.state.curIndex === i ? 'active':''} 
                     onClick={this.handleClick(i)}
                  >{ v }</li>
               )
            }
         </SideBar>
      )
   }
}
