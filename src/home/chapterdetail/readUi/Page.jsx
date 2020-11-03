import React, { Component, useCallback } from 'react';
import { PageWrap, H6Wrap } from './styleChapterRead';

export default class App extends Component {
   handleClick = () => {
      return () => {

      }
   }

   render() {
      return (
         <PageWrap>
            <div>
               <span>下一章</span>
               <i className='iconfont' onClick={this.handleClick()}>&#xe773;</i>
            </div>
            <div>
               <H6Wrap width='0 0 1px 0' color='#eee'>正文第一章 瑶村没落</H6Wrap>
               <p>
                  高不可攀的盘须山下，一道水弯，水岸边青草绿地，绿地上盛开着鲜艳的各色花。
                  花朵之上，美丽的蝴蝶飞舞，蝴蝶之中，一个女孩欢乐地在玩耍着。
               </p>
               <p>
                  那一草一木，一花一蝶一美人犹不让人心生愉悦，在这春色中尤为美丽，让人可观。
                  远处树荫之下，满头白发的老道喝着美酒，欣赏着美景和那娇小的身躯追着蝴蝶。
                  少女欢笑游乐间看到了那树荫之下的白须，她轻快地慢跑过去，眨巴着大眼睛，认
                  真地盯着那悠懒在树下的白须老道。
               </p>
               <p>“爷爷从哪里来的？”女孩清润的声音眨巴着一双灵眸疑惑地问道。</p>
               <p>
                  白须老道懒懒地抬起眼皮，满目慈祥，伸出手来指了指不远处那巍峨的盘须山。
                  女孩顺着老道的手势看向那盘须山后，不相信地一笑，“爷爷撒谎，怜霜的娘亲说了，
                  那盘须山上没有人家。”
               </p>
               <p> 老道笑眯眯地抚着他的白须，淡淡地摇头不赞成她的话，“你没见过那里的人家。”</p>
               <p>“爷爷真是从那山上下来的？”少女蹲下身子，眨巴着她疑惑的水眸。</p>
               <p>“嗯。”盘须老道点点头，呵呵的抚须一笑。</p>
               <p>  “爷爷是神仙？”少女歪着脑袋，那可爱疑惑的模样很是让人喜欢。</p>
               <p>“神仙啊？”盘须老道挠了挠自己的头，若有所思一样，吹嘟着嘴，“神仙，我盘须老道没见过。”</p>
               <p>少女很失望的嘟嘴，“爷爷不是神仙啊？”</p>
               <p>“你很想见到神仙吗？”盘须老道眯着眼笑盈盈地看着女孩。</p>
               <p>女孩一同坐在树下，靠在盘须老道的身侧，昂头望去那盘须山。</p>
               <p>“爷爷若不是神仙，怎住在那盘须山？那山可没有人上得去。”盘须老道呵呵一笑。
               “怜霜村里的朋友都想见到神仙，可世上哪有神仙让凡人见过……”怜霜可爱的笑容停
               留在脸上。“神仙——凡人自然是见不到，但——”盘须老道半闭着眼睛靠在树杆上，
               吼着小曲，饮着美酒，欲欲睡去。
               </p>
               
               <p>“老爷爷……你睡着了么，和怜霜说一说神仙的故事吧。”</p>
               <p> 盘须老道再次微微睁开眼睛，看着怜霜“你喜欢蝴蝶？” </p>
               <p> 怜霜点点头，“是啊，怜霜从小就很喜欢蝴蝶，喜欢它美丽的翅膀。”</p>
               <p>盘须老道眯着满是皱纹的眼，神绪忧郁一般，久久的将怜霜的话停留在心里。</p>
               <p>“蝴蝶么，是你会喜欢的，可它虽美，但不一定好。”</p>
               <p>“为何不好？”怜霜不明白，眨巴着眼睛。</p>
               <p>“小怜霜啊……”盘须老道慈祥的笑着，“等时机到了，你就会知道的。”</p>
               <p>何为时机到了？小怜霜不明白盘须老道的话是何意。</p>
            </div>
            <div></div>
         </PageWrap>
      )
   }
}