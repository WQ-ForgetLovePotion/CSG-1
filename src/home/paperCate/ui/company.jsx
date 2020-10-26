import React, { PureComponent } from 'react';

export default class Company extends PureComponent {
   state = {
      list: [
         {"id": 0,"name": "光明日报报业集团", "paper": ["生活时报","文摘报","博览群书","中华读书报","书摘","考试"]},
         {"id": 1,"name": "经济日报报业集团", "paper": ["名牌时报","中国花卉报","中国企业家","服装时报","中国经济信息"]},
         {"id": 2,"name": "文汇-新民联合报业集团", "paper": ["文汇报","新民晚报"]},
         {"id": 3,"name": "南方日报报业集团", "paper": ["南方周末","南方都市","花鸟世界"]},
         {"id": 4,"name":  "广州日报报业集团", "paper": ["足球","广州文摘报"]},
         {"id": 5,"name": "羊城晚报报业集团", "paper": ["羊城体育","新闻周刊新快报"]}                                   
      ]
   }

   render() {
      return (
         <section className='cont cont-left l'>
            <h2><span>报业集团</span></h2>
            <ul>
               {
                  this.state.list.map(v=> 
                     <li key={v.id}>
                        <div>{v.name}</div>
                        <div>
                           {
                              v.paper.map(item => 
                                 <span key={item}>{item}</span>
                              )
                           }
                        </div>
                     </li>   
                  )
               }
            </ul>
         </section>
      )
   }
}
