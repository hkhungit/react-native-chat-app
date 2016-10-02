/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @reducer: Home
 */

import { createReducer } from 'reduxsauce'
import Auth              from '../services/Auth'
import Types             from '../actions/Types'
import Immutable         from 'seamless-immutable'

export const INITIAL_STATE = Immutable({})
const SignOutExecute = (state, action) => {
  Auth.delUser()
  Auth.delToken()
  return {...state, Signout: true}
}

const ACTION_HANDLERS = {
  [Types.SIGN_OUT_EXECUTE]: SignOutExecute,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
