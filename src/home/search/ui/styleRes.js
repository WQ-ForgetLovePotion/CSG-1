import styled from 'styled-components';
import border from '@a/styled/border';
import ellipsis from '@a/styled/ellipsis';

const Div = styled.div`
   height: 100%;
   background: #fff;
   display: flex;
   flex-direction: column;
   >main {
      flex: 1;
      .ant-pagination{
         margin: 60px 0;
         display: flex;
         justify-content: center;
         li{
            button{
               width: 20px;
               height: 38px;
               background: #319DF7;
               svg{
                  color: #FFFFFF;
               }
            }
            &.ant-pagination-prev{
               min-width: 0;
               margin: 0;
            }
            &.ant-pagination-item{
               width: 50px;
               height: 38px;
               line-height: 38px;
               color: #319DF7;
               font-size: 22px;
               border: none;
               margin: 0;
               background: #eee;
            }
         }
      }
   }
`

const Title1 = border(
   styled.h2`
      width: 100%;
      font-size: 18px;
      color: #319DF7;
      line-height: 50px;
      span {
         width: 228px;
         display: inline-block;
         text-align: center;
         border-bottom: 2px solid #319DF7;
      }
`
)

const Title2 = styled.h3`
      width: 228px;
      text-align: center;
      font-size: 18px;
      color: #666666;
      line-height: 50px;
`

const PageWrap = ellipsis(styled.p``)
const UlWrap = styled.ul`
   padding: 20px 0;
   font-weight: 400;
   li{
      display: flex;
      padding: 20px 0;
      img {
         margin-right: 20px;
      }
      > div:last-child{
         h2 {
            color: #666666;         
            font-size: 18px;
            height: 25px;
            line-height: 25px;
            span{
               padding-right: 42px;
            }
            button{
               width: 50px;
               height: 25px;
               background: #319DF7;
               font-size: 16px;
               color: #FFFEFE;
            }
         }
         h3 {
            font-size: 16px;
            color: #666666;
            line-height: 36px;
         }
         p {
            span {
               font-size: 14px;
               color: #666666;
            }
            font-size: 14px;
            color: #999999;
            line-height: 24px;
         }
         h4 {
            width: 326px;
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            div{
               display: flex;
               color: #319DF7;
               .iconfont{
                  display: block;
                  width: 20px;
                  height: 18px;
               }
               span {
                  font-size: 14px;
                  padding-left: 2px;
               }
            }
         }
      }
   }
`


export {
   Div,
   Title1,
   Title2,
   UlWrap,
   PageWrap
}