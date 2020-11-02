import React from 'react';

import { MagazineListWrap, PagerWrap } from './StyledMagazineCategory'
import Pager from '@c/pager/Pager'

const MagazineList = () => {
  return (
    <MagazineListWrap>
      <ul>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
      </ul>
 
      <PagerWrap>
        <Pager
          // totalPageNum={totalPageNum}
          // totalPageNum={5}
          // curPageNum={1}
          // curPageNum={curPageNum}
          // onClickPageNum={onClickPageNum}
          // onClickLeftPageBtn={onClickLeftPageBtn}
          // onClickRightPageBtn={onClickRightPageBtn}
        >
        </Pager>
      </PagerWrap>
    </MagazineListWrap> 
  );
}

export default MagazineList;
 