import React, { PureComponent } from 'react';

import { Ul } from '@c/styleComp';

export default class NavTwo extends PureComponent {
   state = {
      curIndex: 0,
      text: ["分类浏览","在线图书馆","电子杂志","电子报刊","资料库","热门排行","精确搜索","我的书架","我的身份:贡士"]
   }

   handleClick = index => {
      return () => {
         this.setState({
            curIndex: index
         })
      }
   }

   render() {
      return (
         <Ul>
            {
               this.state.text.map((v, i) => 
                  <li 
                     key={i} 
                     className={this.state.curIndex === i ? 'active': ''}
                     onClick={this.handleClick(i)}
                  >{v}</li>
               )
            }
         </Ul>
      )
   }
}
