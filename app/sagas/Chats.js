/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @sage: Chats
 */

import { take, put, call } from 'redux-saga/effects'
import Types               from '../actions/Types'
import Actions             from '../actions'
import { Api }             from '../services/Api'

export function* getChatsWatcher() {
  while(true) {
    const { token } = yield take(Types.GET_CHATS)
    yield call(getChats, token)
  }
}

export function* getMessagesWatcher() {
  while(true) {
    const { chat } = yield take(Types.GET_MESSAGES)
    yield call(getMessages, chat)
  }
}

export function* sendMessageWatcher() {
  while(true) {
    const { message } = yield take(Types.SEND_MESSAGE)
    yield call(sendMessage, message)
  }
}

function* sendMessage(message) {
  yield call(Api.post, '/messages', message, { headers: { Authorization: message.token }})
}

function* getChats(token) {
  const response = yield call(Api.get, '/users/chats', null, { headers: { Authorization: token }})
  const { status, data } = response.data

  if (status === 'success')
    yield put(Actions.FetchChats(data))
}

function* getMessages(chat) {
  const response = yield call(Api.get, '/messages', chat, { headers: { Authorization: chat.token }})
  const { status, data } = response.data
  if (status == 'success')
    yield put(Actions.FetchMessages(data))
}
