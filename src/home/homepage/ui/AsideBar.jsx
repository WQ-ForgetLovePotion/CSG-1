import React, { Component } from 'react'

import { SideBar } from '../paperCate/ui/stylePaperCate';

const C = (props) => {
   return (
      <SideBar>
         <li>书籍分类</li>
         {
            state.map(v =>
               <li
                  key={v.id}
                  className={curIndex === v.id ? 'active' : ''}
                  onClick={handleClick(v)}
               >{v.name}</li>
            )
         }
      </SideBar>
   )
}

export default C