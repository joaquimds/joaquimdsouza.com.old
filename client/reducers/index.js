import { combineReducers } from 'redux'
import joaquim from './joaquim'
import startleOptions from './startleOptions'
import audioRecorder from './audioRecorder'

let reducers = combineReducers({ joaquim, startleOptions, audioRecorder })

export default reducers
