/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @reducer: Chat
 */

import Types             from '../actions/Types'
import Immutable         from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import Auth             from '../services/Auth'

export const INITIAL_STATE = Immutable({
  messages: []
})

const FetchMessages = (state, action) => {
  const { chat } = action
  const { messages } = chat
  return {...state, messages: messages.reverse(), chat_id: chat.chat.id}
}

const AddMessage = (state, action) => {
  const { message } = action
  let { messages } = state
  messages = [message, ...messages]
  return {...state, messages, chat_id: message.chat_id, time: Math.random()}
}

const ACTION_HANDLERS = {
  [Types.ADD_MESSAGE]: AddMessage,
  [Types.FETCH_MESSAGES]: FetchMessages,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
