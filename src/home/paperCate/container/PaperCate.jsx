import React, { PureComponent } from 'react';
// 引入ui组件
import PaperCateUi from '../ui/PaperCateUi';
// 引入用户操作、react-redux的方法
import { loadActionAsync } from '../actionCreator';
import { connect } from 'react-redux';

const mapState = state => ({
   list: state.paperCate.list
})
const mapDispatch = dispatch => ({
   renderData() {
      dispatch(loadActionAsync())
   }
})

@connect(mapState, mapDispatch)
class PaperCate extends PureComponent {
   componentDidMount() {
      this.props.renderData();
   }

   componentDidUpdate() {
      console.log(this.props.list);
   }

   render() {
      return (
         <PaperCateUi cate={this.props.list}></PaperCateUi>
      )
   }
}

export default PaperCate;
