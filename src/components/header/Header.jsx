import React, { PureComponent } from 'react';

import {Header} from '@c/styleComp';

// export default (props) => {
//    useCallback((btnType) => {
//       return () => {
      
//       }
//    })

//    return (
//       <Header style={{background: '#F5F5F5'}}>
//          <div className='container'>
//             <section className="r">
//                <span onClick={this.handleClick(btnType)}>登录</span>
//                <i>|</i>
//                <span onClick={this.handleClick(btnType)}>注册</span>
//             </section>
//          </div>
//       </Header>
//    )
// }



export default class Head extends PureComponent {

   handleClick(){

   }
   
   render() {
      return (
         <Header style={{background: '#F5F5F5'}}>
            <div className='container'>
               <section className="r">
                  <span onClick={this.handleClick}>登录</span>
                  <i>|</i>
                  <span onClick={this.handleClick}>注册</span>
               </section>
            </div>
         </Header>
      )
   }
}
