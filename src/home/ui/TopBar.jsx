import React from 'react';

import { withRouter } from 'react-router-dom'

import {
  TopBarWrap
}from './StyledHome'

const TopBar = (props) => {

  return (
    <>
      <TopBarWrap>
        <div>
          <ul>
            <li className={props.pathname === '/home/category' ? 'active' : ''} onClick={props.onGotoPage('category')}>分类浏览</li>
            <li className={props.pathname === '/home/onlineLibrery' ? 'active' : ''} onClick={props.onGotoPage('onlineLibrery')}>在线图书馆</li>
            <li className={props.pathname === '/home/magazineCategory' ? 'active' : ''} onClick={props.onGotoPage('magazineCategory')}>电子杂志</li>
            <li onClick={props.onGotoPage('category')}>电子报刊</li>
            <li onClick={props.onGotoPage('category')}>资料库</li>
            <li onClick={props.onGotoPage('category')}>热门排行</li>
            <li className='last-li'>精准搜索</li>
          </ul>
          <span className='my-bookself'>我的书架</span>
          <span className='my-identity'>我的身份:贡士</span>
        </div>
      </TopBarWrap>
    </>
  );
}

export default withRouter(TopBar);
