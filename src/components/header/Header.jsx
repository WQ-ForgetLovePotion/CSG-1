import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

import {
    HeaderWraper
} from './StyledHeader'

@withRouter
class Header extends Component {
    handleClick = () => {
        return()=>{
            let { history } = this.props
            history.push('/login')
           
        }
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