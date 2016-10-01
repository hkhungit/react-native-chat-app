/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @sage: SignUp
 */

import { take, put, call } from 'redux-saga/effects'
import Types               from '../actions/Types'
import Actions             from '../actions'
import { Api }             from '../services/Api'

export function* signUpWatcher() {
  while(true) {
    const { user } = yield take(Types.SIGN_UP_EXECUTE)
    yield call(signUp, user)
  }
}

function* signUp(user) {
  const response = yield call(Api.post, '/users', user)
  const { status, data } = response.data
  if (status === 'success')
    yield put(Actions.SignUpSuccess(data))
  else{
    const errors = data ? data : {
      username: user.username ? null : ["can't be blank"],
      password: user.username ? null : ["can't be blank"],
      fullname: user.username ? null : ["can't be blank"]
    }
    yield put(Actions.SignUpFailure(errors))
  }
}
