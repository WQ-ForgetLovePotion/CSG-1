import React, { Component } from 'react';
import img from '@a/images/logo.png'


import { SearchOutlined } from '@ant-design/icons';

import {
    MainNavWraper
} from './StyledMainNav'

// import { Layout, Menu, Breadcrumb } from 'antd';

// const { Header, Content, Footer } = Layout;

class MainNav extends Component {
    state  = {
        mainNav : ['藏书阁','视频文化','读书广场','原创','读书会活动','书店']
    }
    render() {
        return (
            <MainNavWraper>
                <div className = 'l'>
                    <img src={`${img}`} alt=""/>
                </div>
                <ul>
                    {
                        this.state.mainNav.map((v,i) => {
                            return(
                                <li  key={i}> 
                                    {v}
                                </li>
                            )
                        }
                           
                        )
                    }
                    {/* <li>藏书阁</li>
                    <li>视频文化</li>
                    <li>读书广场</li>
                    <li>原创</li>
                    <li>读书会活动</li>
                    <li>书店</li> */}
                </ul>
 
                {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}
                className='ul'
                >
                    <Menu.Item className='li' key="1">藏书阁</Menu.Item>
                    <Menu.Item className='li' key="2">视频文化</Menu.Item>
                    <Menu.Item className='li' key="3">读书广场</Menu.Item>
                    <Menu.Item className='li' key="4">原创</Menu.Item>
                    <Menu.Item className='li' key="5">读书会活动</Menu.Item>
                    <Menu.Item className='li' key="6">书店 </Menu.Item>
                </Menu> */}

                <div className="inuptWrap">
                   <input type="text" placeholder='好书尽在这里'/>
                   <SearchOutlined />
                </div>
            </MainNavWraper>
        );
    }
}

export default MainNav;