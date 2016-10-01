/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @actions: index
 */

import Types from './Types'

const SignInReset = () => (
  {type: Types.SIGN_IN_RESET}
)

const SignInExecute = (user) => (
  {type: Types.SIGN_IN_EXECUTE, user}
)

const SignInSuccess = (user) => (
  {type: Types.SIGN_IN_SUCCESS, user}
)

const SignInFailure = (errors) => (
  {type: Types.SIGN_IN_FAILURE, errors}
)

const SignUpReset = () => (
  {type: Types.SIGN_UP_RESET}
)

const SignUpExecute = (user) => (
  {type: Types.SIGN_UP_EXECUTE, user}
)

const SignUpSuccess = (user) => (
  {type: Types.SIGN_UP_SUCCESS, user}
)

const SignUpFailure = (errors) => (
  {type: Types.SIGN_UP_FAILURE, errors}
)

const GetChats = (token) => (
  {type: Types.GET_CHATS, token}
)

const FetchChats = (chats) => (
  {type: Types.FETCH_CHATS, chats}
)

export default {
  SignInReset,
  SignInExecute,
  SignInSuccess,
  SignInFailure,
  SignUpReset,
  SignUpExecute,
  SignUpSuccess,
  SignUpFailure,

  GetChats,
  FetchChats,
}