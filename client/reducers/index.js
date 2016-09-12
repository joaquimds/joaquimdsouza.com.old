import { combineReducers } from 'redux'
import joaquim from './joaquim'
import startleOptions from './startleOptions'
import walkieTalkie from './walkieTalkie'

let reducers = combineReducers({ joaquim, startleOptions, walkieTalkie })

export default reducers
