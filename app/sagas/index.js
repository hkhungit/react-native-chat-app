/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @sage: Index
 */

import { fork } from 'redux-saga/effects'
import { getChatsWatcher, sendMessageWatcher, getMessagesWatcher } from './Chats'
import { signUpWatcher } from './SignUp'
import { signInWatcher } from './SignIn'
import { getStrangersWatcher, getFriendsWatcher, getInvitersWatcher } from './User'

export default function* root() {
  yield fork(getChatsWatcher)
  yield fork(signUpWatcher)
  yield fork(signInWatcher)
  yield fork(getStrangersWatcher)
  yield fork(getFriendsWatcher)
  yield fork(getInvitersWatcher)
  yield fork(getMessagesWatcher)
  yield fork(sendMessageWatcher)
}
