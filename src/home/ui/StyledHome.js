import styled from 'styled-components'

const TopWrap = styled.div`
  width: 100%;
  height: 30px;
  background: #F5F5F5;
  div{
    width: 1191px;
    margin: 0 auto;
    ul{
      float: right;
      line-height: 30px;
      span{
        cursor: pointer;
      }
    }
  }
`

const NavOneWrap = styled.div`
  width: 100%;
  /* height: 47px; */
  .nav-one{
    width: 1199px;
    margin: 0 auto;
    position: relative;
    padding-top: 38px;
    overflow: hidden;
    img{
      width: 297px;
      height: 85px;
      position: absolute;
      left: -70px;
      top: 5px;
    }
    ul{
      float: right;
      li{
        float: left;
        width: 135px;
        height: 47px;
        text-align: center;
        line-height: 47px;
        color: #fff;
        background-color: #319DF7;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        box-sizing: border-box;
        &.active{
          background-color: #087AD9;
          border-bottom: 2px solid #FBCF00;
        }
      }
    }
    .search{
      float: right;
      input{
        width: 130px;
        height: 15px;
        float: left;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #999999;
        padding: 15px;
        border: 1px solid #CCCCCC;
        border-right: 0;
        margin-left: 18px;
      }
      span{
        display: block;
        width: 46px;
        height: 47px;
        float: left;
        background-color: #68B9FC;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`

const TopBarWrap = styled.div`
  width: 100%;
  div{
    width: 1199px;
    height: 58px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ul{
      height: 58px;
      /* float: right; */
      display: flex;
      align-items: center;
      li{
        cursor: pointer;;
        padding: 0 25px;
        font-size: 15px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        border-right: 1px solid #EAEAEA;
        &.last-li{
          border: none;
        }
        &.active{
          color: #319DF7;
        }
      }
    }
    span{ 
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
    }
    .my-bookself{
      padding: 0 17px;
    }
    .my-identity{
      padding: 0 19px 0 11px;
    }
  }
`

export {
  TopWrap,
  NavOneWrap,
  TopBarWrap
}