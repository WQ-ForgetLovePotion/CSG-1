import React from 'react';

import { ShoppingCartListWrap } from './StyledShoppingCart'
 
const ShoppingCartList = () => {
  return (
    <ShoppingCartListWrap>
      <th>
        <td style={{width: '133px'}}>
          <input type="checkbox" name="" id=""/>
          全选
        </td>
        <td>
          商品
        </td> 
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </th>
    </ShoppingCartListWrap>
  );
}

export default ShoppingCartList;
