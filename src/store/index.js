
import { createStore } from 'redux'

import Immutable from 'immutable'

import reducer from './reducer'

const initialState = Immutable.Map()

const store = createStore(reducer, initialState)

export default store