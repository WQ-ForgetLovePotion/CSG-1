import React, { useCallback, useState } from 'react';
import { useRouteMatch, Switch, Route, withRouter } from 'react-router-dom';

// import { SideBar } from '../paperCate/ui/stylePaperCate';

// 导入三级路由 页面组件
import { ChapterDet } from '../chapterdetail';
import { ChapterRead } from '../chapterdetail';
import Page404 from '../page404/Page404';

const Home = (props) => {
   let { url } = useRouteMatch();
   let newUrl = url.replace(/\/novel/, '')
   // console.log(url)      //  /home/browse/novel
   console.log(newUrl)   //  /home/browse
   /* const [state, setState] = useState([
      { id: 0, path: 'novel', name: '小说（999）' },
      { id: 1, path: 'chapterdet', name: '书籍详情页' },
      { id: 2, path: 'chapterpage', name: '阅读页' },
   ]) */

   const handleClick = useCallback(() => {
      return () => {
         // props.history.push(`${newUrl}/chapterdet`)
         props.history.push('/home/browse/chapterdet')
      }
   })

   return (
      <>
         <div>
            <h1 onClick={handleClick()}>首页渲染区域模块</h1>
         </div>

         <Switch>
            {/* home -- 分类浏览 */}
            <Route path={`${newUrl}`}></Route>
            {/* <Route path={`${newUrl}/chapterdet`}> <ChapterDet /></Route> */}
            {/* <Route path={`${newUrl}/chapterpage`}> <ChapterRead /></Route> */}
            <Route><Page404></Page404></Route>
         </Switch>
      </>
   )
}

export default withRouter(Home)