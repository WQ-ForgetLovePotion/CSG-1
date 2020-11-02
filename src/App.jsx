import React, { Component } from 'react';

import Com from './home/paperCate/container/PaperCate';
import LibraryNew from '@o/onlineLibrary/container/LibraryNew'
import NewspapersNum from '@o/Newspaper/container/NewspapersNum'
import PreciseSearch from '@o/Search/container/PreciseSearch'
import BookReview from '@o/bookReview/container/BookReview'
import Newscontent from '@o/News/container/NewsContent'
import  NewspaperReading  from '@o/Newspaper/container/NewspaperReading'
export default class App extends Component {
   render() {
      return (
         // <LibraryNew></LibraryNew>
         // <Newscontent></Newscontent>
         // <NewspaperReading></NewspaperReading>
         // <NewspapersNum></NewspapersNum>
         // <PreciseSearch></PreciseSearch>
         <BookReview></BookReview>
         // <Com></Com>
      )
   }
}
