import { createStore, applyMiddleware } from 'redux'
import sagas                            from '../sagas/'
import reducers                         from './'
import createSagaMiddleware             from 'redux-saga'

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  
  let store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(sagas)

  return store
}
