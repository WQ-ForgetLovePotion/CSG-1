  
import React, { Component } from 'react';

import {
    FooterWraper
} from './StyledFoot.js'

export default class Footer extends Component {
   render() {
      return (
         <FooterWraper style={{ textAlign: 'center' }}>
            <div>
                关于读书&nbsp; &nbsp;
                免责声明&nbsp;&nbsp;
                读书目录&nbsp;&nbsp;
                联系我们&nbsp;&nbsp;
            </div>
            <p>
               Copyright © 藏书阁 www.csga.com 2006-2016, All Rights Reserved. 鄂ICP备15019699号-2
            </p>
         </FooterWraper>
      )
   }
}