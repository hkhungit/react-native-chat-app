/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @reducer: Chats
 */

import Types             from '../actions/Types'
import Immutable         from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import Auth             from '../services/Auth'

export const INITIAL_STATE = Immutable({
  chats: []
})

const FetchChats = (state, action) => {
  const { chats } =  action
  return {...state, chats}
}

const ACTION_HANDLERS = {
  [Types.FETCH_CHATS]: FetchChats,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
