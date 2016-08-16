import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const Store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

export default Store
