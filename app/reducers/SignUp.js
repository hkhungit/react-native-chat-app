/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @reducer: SignUp
 */

import Types             from '../actions/Types'
import Immutable         from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  user: {}
})

const SignUpReset = (state, action) => {
  return {...state, user: {}, errors: {}}
}

const SignUpExecute = (state, action) => {
  const { user } = action
  return {...state, user, errors: {}}
}

const SignUpSuccess = (state, action) => {
  const { user } = action
  return {...state, user, errors: {}}
}

const SignUpFailure = (state, action) => {
  const { errors } = action
  return {...state, errors}
}

const ACTION_HANDLERS = {
  [Types.SIGN_UP_RESET]: SignUpReset,
  [Types.SIGN_UP_EXECUTE]: SignUpExecute,
  [Types.SIGN_UP_SUCCESS]: SignUpSuccess,
  [Types.SIGN_UP_FAILURE]: SignUpFailure,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
