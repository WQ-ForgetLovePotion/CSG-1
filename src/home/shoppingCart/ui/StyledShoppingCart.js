import styled from 'styled-components'

const ShoppingCartUiWrap = styled.div`
  width: 100%;
  overflow: hidden;
  div.container{
    width: 1199px;
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

`

const ShoppingCartListWrap = styled.table`
  width: 990px;
  overflow: hidden;
  background-color: #666;
  th{
    padding: 5px 1px;
  }
`

export {
  ShoppingCartUiWrap,
  ShoppingCartListWrap
}