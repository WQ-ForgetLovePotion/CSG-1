import React from 'react';

// 公共组件
import Head from '@c/header/Header';
import NavOne from '@c/navOne/NavOne';
import NavTwo from '@c/navTwo/NavTwo';
import Foot from '@c/footer/Footer';
import { Div, Div2 } from './paperCate/ui/stylePaperCate';

const Home = (props) => {
   return (
      <Div>
         <Head></Head>
         <main className="container">
            <NavOne></NavOne>
            <NavTwo {...props}></NavTwo>
            <Div2 style={{fontSize: '30px'}}>
               首页内容模块
            </Div2>
         </main>
         <Foot></Foot>
      </Div>
   )
}

export default Home