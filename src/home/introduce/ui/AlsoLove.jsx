import React/* , { Component } */ from 'react';
import img from '@a/images/alsolove.png'

import {
    TitleWraper,
    AlsoLoveWraper
} from './StyledIntroduce'


const AlsoLove=()=> {
    // render() {
        return (
            <AlsoLoveWraper>
                <TitleWraper
                width="0 0 1px 0"
                // borderColor='#000'
                >
                    <span>喜欢这本书的人也喜欢</span>
                </TitleWraper>
                <ul>
                    <li>
                        <div>
                            <img src={`${img}`} alt=""/>
                        </div>
                        <div>防止脱发三十六计</div>
                    </li>
                    <li>
                        <div>
                            <img src={`${img}`} alt=""/>
                        </div>
                        <div>防止脱发三十六计</div>
                    </li>
                    <li>
                        <div>
                            <img src={`${img}`} alt=""/>
                        </div>
                        <div>防止脱发三十六计</div>
                    </li>
                    <li>
                        <div>
                            <img src={`${img}`} alt=""/>
                        </div>
                        <div>防止脱发三十六计</div>
                    </li>
                </ul>


            </AlsoLoveWraper>
        );
    // }
}

export default AlsoLove;