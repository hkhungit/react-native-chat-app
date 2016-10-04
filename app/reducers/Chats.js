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
  return {...state, chats: renderChats(chats)}
}

const renderChats = (chats) =>{
  return chats.map(chat => FetchChat(chat))
}

const FetchChat = (chat)=>{
  const user  = Auth.currentUser()
  const names = chat.users.filter(u => u.id != user.id).map(u=> u.fullname)
  const mess  = chat.last_message
  const name  = names.join(',')
  const { message } = mess
  const time  = '0 sec'
  const image = 'https://facebook.github.io/react/img/logo_og.png'
  const id    = chat.id
  return { name, message, image, time, id }
}

const ACTION_HANDLERS = {
  [Types.FETCH_CHATS]: FetchChats,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
