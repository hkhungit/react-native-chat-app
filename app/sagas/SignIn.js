/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @sage: SignIn
 */

import { take, put, call } from 'redux-saga/effects'
import Types               from '../actions/Types'
import Actions             from '../actions'
import Host                from '../services/Api'

export function* signInWatcher() {
  while(true) {
    const { user } = yield take(Types.SIGN_IN_EXECUTE)
    yield call(signIn, user)
  }
}

function* signIn(user) {
  const response = yield call(Host.post, '/sessions/login', user)
  const { status, data } = response.data
  if (status === 'success'){
    yield put(Actions.SignInSuccess(data))
  }
  else{
    const errors = data ? data : {
      username: user.username ? null : ["can't be blank"],
      password: user.username ? null : ["can't be blank"]
    }
    yield put(Actions.SignInFailure(errors))
  }
}
