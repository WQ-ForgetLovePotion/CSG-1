import React from 'react';

import SmallTitle from '@c/smallTitle/SmallTitle' 

import { NewListWrap } from './StyledMagazineCategory'

const NewList = () => {
  return (
    <NewListWrap>
      <SmallTitle title='滚动新闻'></SmallTitle>
      <div className="content">
        <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
        <div className="new-right-content">
          <h3>模特上封面</h3>
          <p>超模之所以被称为“超级模特”其实说的就是她们的身价根据福布斯榜单显示，2017年国际超模Top 10的榜单实质地说明了现在的势力榜。但请注意，是势力而不是实力呦，这10位中，真正具备超模能力的是谁。

          <span>更多{'>'}</span>
          </p>
        </div>
      </div>
      <ul>
        <li>
          <p>【环球人物】很多人怀念老北京的风情，老舍、林语堂的文字里都能让</p>
          <span>更多{'>'}</span>
        </li>
        <li>
          <p>【环球人物】很多人怀念老北京的风情，老舍、林语堂的文字里都能让</p>
          <span>更多{'>'}</span>
        </li>
        <li>
          <p>【环球人物】很多人怀念老北京的风情，老舍、林语堂的文字里都能让</p>
          <span>更多{'>'}</span>
        </li>
      </ul>
    </NewListWrap>
  );
}

export default NewList;
