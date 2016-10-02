/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @reducer: Users
 */

import Types             from '../actions/Types'
import Immutable         from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import Auth             from '../services/Auth'

export const INITIAL_STATE = Immutable({
  inviters: []
})

const FetchInviters = (state, action) => {
  const { inviters } = action
  return {...state, inviters}
}

const ACTION_HANDLERS = {
  [Types.FETCH_INVITERS]: FetchInviters,
}
export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
