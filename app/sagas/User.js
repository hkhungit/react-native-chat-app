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

export function* getStrangersWatcher() {
  while(true) {
    const { token } = yield take(Types.GET_STRANGERS)
    yield call(getStrangers, token)
  }
}

export function* getFriendsWatcher() {
  while(true) {
    const { token } = yield take(Types.GET_FRIENDS)
    yield call(getFriends, token)
  }
}
export function* getInvitersWatcher() {
  while(true) {
    const { token } = yield take(Types.GET_CHATS)
    yield call(getInviters, token)
  }
}

function* getStrangers(token) {
  const response = yield call(Api.get, '/users/strangers', null, { headers: { Authorization: token }})
  const { status, data } = response.data
  if (status === 'success')
    yield put(Actions.FetchStrangers(data))
}

function* getFriends(token) {
  const response = yield call(Api.get, '/users/friends', null, { headers: { Authorization: token }})
  const { status, data } = response.data

  if (status === 'success')
    yield put(Actions.FetchFriends(data))
}

function* getInviters(token) {
  const response = yield call(Api.get, '/users/inviters', null, { headers: { Authorization: token }})
  const { status, data } = response.data
  if (status === 'success')
    yield put(Actions.FetchInviters(data))
}
