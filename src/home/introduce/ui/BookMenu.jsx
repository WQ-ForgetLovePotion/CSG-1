import React/* , { Component }  */from 'react';

import {
    TitleWraper,
    BookMenuWraper
} from './StyledIntroduce'

const BookMenu=()=> {
    // render() {
        return (
            < BookMenuWraper>
                 <TitleWraper
                width="0 0 1px 0"
                // borderColor='#000'
                >
                     <span>书籍目录</span>
                </TitleWraper>
                <ul>
                    <li>
                        <span>第一章</span>&nbsp;
                        <span>前端发展史</span>
                    </li>
                    <li>
                        <span>第一章</span>&nbsp;
                        <span>前端发展史</span>
                    </li>
                    <li>
                        <span>第一章</span>&nbsp;
                        <span>前端发展史</span>
                    </li>
                    <li>
                        <span>第一章</span>&nbsp;
                        <span>前端发展史</span>
                    </li>
                    <li>
                        <span>第一章</span>&nbsp;
                        <span>前端发展史</span>
                    </li>
                    <li>
                        <span>第一章</span>&nbsp;
                        <span>前端发展史</span>
                    </li>
                    <li>
                        <span>第一章</span>&nbsp;
                        <span>前端发展史</span>
                    </li>
                    <li>
                        <span>第一章</span>&nbsp;
                        <span>前端发展史</span>
                    </li>
                    
                </ul>
                <div>
                    <span>查看更多V</span>
                </div>
            </ BookMenuWraper>
        );
    // }
}

export default BookMenu;