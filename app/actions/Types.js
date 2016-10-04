/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @actions: type
 */

import { createTypes } from 'reduxsauce'

export default createTypes(`
  SIGN_IN_RESET
  SIGN_IN_EXECUTE
  SIGN_IN_SUCCESS
  SIGN_IN_FAILURE

  SIGN_UP_RESET
  SIGN_UP_EXECUTE
  SIGN_UP_SUCCESS
  SIGN_UP_FAILURE

  SIGN_OUT_EXECUTE
  
  GET_CHATS
  FETCH_CHATS
  GET_FRIENDS
  GET_INVITERS
  GET_STRANGERS
  FETCH_STRANGERS
  FETCH_INVITERS
  FETCH_FRIENDS

  SEND_MESSAGE
  GET_MESSAGES
  ADD_MESSAGE
  FETCH_MESSAGES
`)