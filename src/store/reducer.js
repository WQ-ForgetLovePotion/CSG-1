import { combineReducers } from 'redux-immutable'

import {
  reducer as category
}from '@/home/category/'


const reducer = combineReducers({
  category
})

export default reducer