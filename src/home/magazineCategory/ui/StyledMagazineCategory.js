import styled from 'styled-components'

const MagazineCategoryWrap = styled.div`
  width: 100%;
  overflow: hidden;
  div.container{
    width: 1199px;
    overflow: hidden;
    margin: 0 auto;
    div.left-aside{
      width: 141px;
      float: left;
      overflow: hidden;
    }
    div.right-content{
      width: 1033px;
      float: right;
      overflow: hidden;
    }
  }
`

const MagazineListWrap = styled.div`
  overflow: hidden;
  margin-bottom: 30px;
  ul{
    margin-bottom: 33px;
    overflow: hidden;
    li{
      width: 153px;
      float: left;
      margin-right: 66px;
      margin-bottom: 37px;
      &:nth-child(5n){
        margin-right: 0;
      }
      img{
        width: 153px;
        height: 224px;
        margin-bottom: 15px;
      }
      p{
        text-align: center;
      }
    }
  }
`

const PagerWrap = styled.div`
  float: right;
`

const HotRecommendWrap = styled.div`
  width: 498px;
  overflow: hidden;
  background-color: #666;
  ul{
    margin-top: 26px;
    li{
      float: left;
      width: 143px;
      img{
        width: 143px;
        height: 143px;
        margin-bottom: 15px;
      }
      h3{
        text-align: center;
        font-size: 14px;
        color: #666;
      }
      p{
        width: 100%;
        line-height: 23px;
        font-size: 14px;
        color: #999;
      }
    }
  }
`

export {
  MagazineCategoryWrap,
  MagazineListWrap,
  PagerWrap,
  HotRecommendWrap
}