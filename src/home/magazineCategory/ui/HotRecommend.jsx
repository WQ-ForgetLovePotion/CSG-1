import React from 'react';

import SmallTitle from '@c/smallTitle/SmallTitle' 

import { HotRecommendWrap } from './StyledMagazineCategory'

const HotRecommend = () => {
  return (
    <HotRecommendWrap>
      <SmallTitle title='热门内容推荐'></SmallTitle>
      <ul>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <h3>登上封面</h3>
          <p>GOAOI：以资讯见长的FHM其时在英国的销量稳居第一名。<span>更多{'>'}</span></p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <h3>登上封面</h3>
          <p>GOAOI：以资讯见长的FHM其时在英国的销量稳居第一名。<span>更多{'>'}</span></p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <h3>登上封面</h3>
          <p>GOAOI：以资讯见长的FHM其时在英国的销量稳居第一名。<span>更多{'>'}</span></p>
        </li>
      </ul>
    </HotRecommendWrap>
  );
}

export default HotRecommend;
