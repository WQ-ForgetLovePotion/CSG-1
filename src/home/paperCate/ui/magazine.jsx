import React, { PureComponent } from 'react';

import { Row, Col } from 'antd';

export default class Maga extends PureComponent {
   state = {
      list: ["京报网-北京日报","北京晨报","北京青年报","北京商报","法制晚报","北京科技报","新京报","京华时报","京报","北京周报","中学时事报","国际商报","信息产业报","第一财经日报","北京少年报","北京青年周刊","中国大学生","健康报"]
   }
   
   render() {
      return (
         <section className='cont cont-top'>
            <h2><span>报纸杂志</span></h2>
            <Row>
               {
                  this.state.list.map(
                     (v,i) => <Col key={i} span={4}>{v}</Col>
                  )
               }
            </Row>
         </section>
      )
   }
}
