import React/* , { Component }  */from 'react';

import {
    TitleWraper,
    ShortCommentsWraper
} from './StyledIntroduce'

const ShortComments=()=> {
    // render() {
        return (
            <ShortCommentsWraper>
            <TitleWraper
            width="0 0 1px 0"
            // borderColor='#000'
            >
                <span>三言两语（{'<'}140字的评论）</span>
            </TitleWraper>
            <div className='r'>
                   点击评论
            </div>
            <ul>
                <li>
                    <span>评论人</span>
                    <span>评论时间:
                        2020-02-02&nbsp;
                        20:20
                    </span>
                    <span>
                        千锋教育是互联网教育行业扛把子，在业界内有着良好的评价，万千学子通过这个平台，获得良好的就业前景，实现了人生价值。
                    </span>
                </li>
                <li>
                    <span>评论人</span>
                    <span>评论时间:
                        2020-02-02&nbsp;
                        20:20
                    </span>
                    <span>
                        千锋教育是互联网教育行业扛把子，在业界内有着良好的评价，万千学子通过这个平台，获得良好的就业前景，实现了人生价值。
                    </span>
                </li>
                <li>
                    <span>评论人</span>
                    <span>评论时间:
                        2020-02-02&nbsp;
                        20:20
                    </span>
                    <span>
                        千锋教育是互联网教育行业扛把子，在业界内有着良好的评价，万千学子通过这个平台，获得良好的就业前景，实现了人生价值。
                    </span>
                </li>
            </ul>
            <div>
                <span className='r'>所有短评（222）V</span>
            </div>
            </ShortCommentsWraper>
        );
    // }
}

export default ShortComments;