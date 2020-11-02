import React from 'react';

import { ShoppingCartUiWrap } from './StyledShoppingCart'

import ShoppingCartList from './ShoppingCartList'

const ShoppingCartUi = () => {
  return (
    <ShoppingCartUiWrap>
      <div className="container">
        <ShoppingCartList></ShoppingCartList>
      </div>
    </ShoppingCartUiWrap>
  );
}

export default ShoppingCartUi;
