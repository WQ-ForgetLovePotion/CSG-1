import React/* , { Component }  */from 'react';


import {
    Container
} from './StyledIntroduce'

// 公共组件
import Header from '@c/header/Header'
import MainNav from '@c/mainNav/MainNav'
import MinorNav from '@c/minorNav/MinorNav'
import Footer from '@c/footer/Footer'

// 书籍介绍页组件
import Details from './Details'
import BookIntro from './BookIntro';
import AuthorIntro from './AuthorIntro'
import BookMenu from './BookMenu'
import AlsoLove from './AlsoLove'
import ShortComments from './ShortComments'
import LongComments from './LongComments'
import AboutBook from './AboutBook'

 const IntroduceUi =()=> {
    
        return (
            <Container>
                <Header ></Header>
                <main className = 'container'>
                    <MainNav></MainNav>
                    <MinorNav></MinorNav>
                    <div className = 'l'>
                        <Details></Details>
                        <BookIntro></BookIntro>
                        <AuthorIntro></AuthorIntro>
                        <BookMenu></BookMenu>
                        <AlsoLove></AlsoLove>
                        <ShortComments></ShortComments>
                        <LongComments></LongComments>
                    </div>
                    <div className='r'>
                        <AboutBook></AboutBook>
                    </div>
                </main>
                <Footer></Footer>
            </Container>
        );
   
}

export default IntroduceUi;