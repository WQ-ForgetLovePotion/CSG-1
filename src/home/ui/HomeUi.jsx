import React from 'react';

import {
  TopWrap,
  NavOneWrap,
}from './StyledHome'

import TopBar from './TopBar'

const HomeUi = (props) => {
  // console.log(props)
  return (
    <>
      <TopWrap>
        <div>
          <ul>
            <span>登录</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span>注册</span>
          </ul>
        </div>
      </TopWrap>
      <NavOneWrap>
        <div className='nav-one'>
        {/* <img src={[require('../../assets/images/logo.png')]} alt=""/> */}
          <img src='/img/logo.png' alt=""/>
          <div className="search">
            <input type="text" placeholder='搜索海量图书'/>
            <span>
            <svg t="1603685312746" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3043" width="30" height="30"><path d="M863.38 825.09L714.17 675.88c48.01-57.12 74.18-128.58 74.18-204.08 0-84.89-33.06-164.7-93.08-224.72C635.24 187.05 555.44 154 470.55 154c-84.89 0-164.7 33.06-224.72 93.08s-93.08 139.83-93.08 224.72 33.06 164.7 93.08 224.72 139.83 93.08 224.72 93.08c76.22 0 148.33-26.67 205.72-75.56l149.08 149.08a26.805 26.805 0 0 0 19.01 7.88c6.88 0 13.76-2.63 19.01-7.88a26.805 26.805 0 0 0 7.88-19.01c0-6.89-2.62-13.77-7.87-19.02zM206.53 471.8c0-145.58 118.44-264.02 264.02-264.02 145.58 0 264.02 118.44 264.02 264.02S616.13 735.82 470.55 735.82c-145.58 0-264.02-118.44-264.02-264.02z" fill="#fff" p-id="3044"></path></svg>
            </span>
          </div>
          <ul>
            <li className='active'>藏书阁</li>
            <li>视频文化</li>
            <li>读书操场</li>
            <li>原创</li>
            <li>读书会活动</li>
            <li>书店</li>
          </ul>
        </div>
        
      </NavOneWrap>

      <TopBar
        onGotoPage={props.onGotoPage}
        pathname={props.pathname}
      ></TopBar>
    </>
  );
}

export default HomeUi;
