import React, { Component } from 'react';

import {
    MinorNavWrap
} from './StyledMinorNav'

class MinorNav extends Component {
    state = {
        curIndex: 0,
        minorNav: ["分类浏览","在线图书馆","电子杂志","电子报刊","资料库","热门排行","精确搜索","我的书架","我的身份:贡士"]
     }
     handleClick=()=>{
        return(index)=>{
            this.setState({
                curIndex:index
            })
        }
     }
    render() {
        return (
            
                <MinorNavWrap >
                    {/* <li>分类浏览</li>
                    <li>在线图书馆</li>
                    <li>电子杂志</li>
                    <li>电子报刊</li>
                    <li>资料库</li>
                    <li>热门排行</li>
                    <li>精确搜索</li>
                    <li>我的书架</li>
                    <li>我的身份:贡士</li> */}
                    {
                        this.state.minorNav.map((value,index)=>{
                            return   (<li 
                                key={index}
                                onClick={this.handleClick(index)}
                                // style={this.state.curIndex===index?color:" #319DF7":''}
                                >
                                {value}
                                </li>)
                            }
                        )
                    }
                    

                </MinorNavWrap>
            
        );
    }
}

export default MinorNav;