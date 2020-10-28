import React from 'react';
import PropsTypes from 'prop-types';

import { Div, Div2 } from './stylePaperCate';

// 公共组件
import Head from '@c/header/Header';
import NavOne from '@c/navOne/NavOne';
import NavTwo from '@c/navTwo/NavTwo';
import Foot from '@c/footer/Footer';

// 其余组件
import AsideBar from './AsideBar';
import Maga from './magazine';
import Company from './company';
import Media from './media';

const PaperCateUi = (props) => {
   // console.log(props)
   return (
      <Div>
         <Head></Head>
         <main className="container">
            <NavOne></NavOne>
            <NavTwo></NavTwo>
            <AsideBar></AsideBar>
            <Div2>
               <Maga cate={props && props.cate}></Maga>
               <Company cate={props && props.cate}></Company>
               <Media cate={props && props.cate}></Media>
            </Div2>
         </main>
         <Foot></Foot>
      </Div>
   )
}
// 函数式组件 绑定类型检查 
PaperCateUi.propTypes = {
   cate: PropsTypes.array
}

export default PaperCateUi;