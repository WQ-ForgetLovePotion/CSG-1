import React from 'react';
// import PropsTypes from 'prop-types';

// 公共组件
import Head from '@c/header/Header';
import NavOne from '@c/navOne/NavOne';
import NavTwo from '@c/navTwo/NavTwo';
import Foot from '@c/footer/Footer';

import { Div, Title1,Title2 } from './styleRes';
import ResComWrap from './ResCom';
import SepPage from "@c/separatepage/SepPage";

const SearchCateUi = (props) => {
   return (
      <Div>
         <Head></Head>
         <main className="container">
            <NavOne></NavOne>
            <NavTwo></NavTwo>

            <Title1 width='0 0 1px 0' color='#eee'>
               <span>搜索关键词（20条结果）</span>
            </Title1>
            <Title2>搜索结果1-20 共20条</Title2>

            <ResComWrap></ResComWrap>
            
            <SepPage {...props}></SepPage>
         </main>
         <Foot></Foot>
      </Div>
   )
}

export default SearchCateUi