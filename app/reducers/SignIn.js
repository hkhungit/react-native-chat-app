/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @reducer: SignIn
 */

import Types             from '../actions/Types'
import Immutable         from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import Auth             from '../services/Auth'

export const INITIAL_STATE = Immutable({
  user: {},
  token: null,
  redirect: false,
})

const SignInExecute = (state, action) => {
  const { user } = action
  return {...state, user, token: null, errors: {}, redirect: false}
}

const SignInSuccess = (state, action) => {
  const data = action.user
  const { user, token } = data
  Auth.setToken(token)
  Auth.setUser(user)
  return {...state, user, token, errors: {}, redirect: true}
}

const SignInFailure = (state, action) => {
  const { errors } = action
  Auth.delToken()
  Auth.delUser()
  return {...state, token: null, errors, redirect: false}
}

const ACTION_HANDLERS = {
  [Types.SIGN_IN_EXECUTE]: SignInExecute,
  [Types.SIGN_IN_SUCCESS]: SignInSuccess,
  [Types.SIGN_IN_FAILURE]: SignInFailure,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
