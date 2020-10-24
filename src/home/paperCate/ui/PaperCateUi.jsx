import React from 'react';
import PropsTypes from 'prop-types';

import { Div, Div2 } from './stylePaperCate';

// 公共组件
import Head from '@c/header/Header';
import NavOne from '@c/navOne/NavOne';
import NavTwo from '@c/navTwo/NavTwo';
import Foot from '@c/footer/Footer';

// 其余组件
import SideBar from './SideBar';
import Maga from './magazine';
import Company from './company';
import Media from './media';

const PaperCateUi = (props) => {
   return (
      <Div>
         <Head></Head>
         <main className="container">
            <NavOne></NavOne>
            <NavTwo></NavTwo>
            <SideBar></SideBar>
            <Div2>
               <Maga></Maga>
               <Company></Company>
               <Media></Media>
            </Div2>
         </main>
         <Foot></Foot>
      </Div>
   )
}
// 函数式组件 绑定类型检查 
PaperCateUi.propTypes = {
   list: PropsTypes.array
}

export default PaperCateUi;