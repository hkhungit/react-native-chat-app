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

function* getChats(token) {
  const response = yield call(Api.get, '/chats', null, { headers: { Authorization: token }})
  const { status, data } = response.data

  if (status === 'success')
    yield put(Actions.FetchChats(data))
}
