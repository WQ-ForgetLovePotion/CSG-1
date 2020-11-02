import { combineReducers } from 'redux'

import {
    reducer as introduce
} from '../home/introduce'

const reducer = combineReducers({
    introduce
} )

export default reducer