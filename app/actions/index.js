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

const SignOutExecute = () => (
  {type: Types.SIGN_OUT_EXECUTE}
)

const GetFriends = (token) => (
  {type: Types.GET_FRIENDS, token}
)

const GetInviters = (token) => (
  {type: Types.GET_INVITERS, token}
)

const GetStrangers = (token) => (
  {type: Types.GET_STRANGERS, token}
)

const FetchStrangers = (strangers) => (
  {type: Types.FETCH_STRANGERS, strangers}
)

const FetchFriends = (friends) => (
  {type: Types.FETCH_FRIENDS, friends}
)

const FetchInviters = (inviters) => (
  {type: Types.FETCH_INVITERS, inviters}
)

const SendMessage = (message) => (
  {type: Types.SEND_MESSAGE, message}
)

const GetMessages = (chat) => (
  {type: Types.GET_MESSAGES, chat}
)

const FetchMessages = (chat) => (
  {type: Types.FETCH_MESSAGES, chat}
)

const AddMessage = (message)=>(
  {type: Types.ADD_MESSAGE, message}
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
  SignOutExecute,

  GetChats,
  FetchChats,
  GetFriends,
  GetInviters,
  GetStrangers,
  FetchFriends,
  FetchInviters,
  FetchStrangers,

  SendMessage,
  GetMessages,
  FetchMessages,
  AddMessage
}