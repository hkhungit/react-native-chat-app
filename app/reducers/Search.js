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
  strangers: []
})

const FetchStrangers = (state, action) => {
  const { strangers } = action
  return {...state, strangers}
}

const ACTION_HANDLERS = {
  [Types.FETCH_STRANGERS]: FetchStrangers,
}
export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
