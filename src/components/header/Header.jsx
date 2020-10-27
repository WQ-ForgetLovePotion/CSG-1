import React, { Component } from 'react';


import {
    HeaderWraper
} from './StyledHeader'

class Header extends Component {
    handleClick = () => {
        console.log('你好')
    }
    render() {
        return (
            <HeaderWraper>
                <div className='container'>
                    <section className='r'>
                        <span onClick = {this.handleClick}>登陆</span>
                        <i>|</i>
                        <span onClick = {this.handleClick}>注册</span>
                    </section>
                </div>
            </HeaderWraper>
        );
    }
}

export default Header;