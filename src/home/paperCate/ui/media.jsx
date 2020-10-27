import React, { PureComponent } from 'react';


export default class App extends PureComponent {
   state = {
      list: ["人民日报","新华社","中国记协","中央电视台","科技日报","中国日报","法制日报","解放军报","农民日报","检查日报"]
   }

   render() {
      return (
         <section className='cont cont-rt l'>
            <h2><span>中央新闻媒体</span></h2>
               <ul>
                  {
                     this.state.list.map(
                        (v,i) => <li className="l" key={i}>{v}</li>
                     )
                  }
               </ul>
         </section>
      )
   }
}
