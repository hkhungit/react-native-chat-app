/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @reducer: Index
 */

import { combineReducers }  from 'redux'
import Main                 from './Main'
import Chats                from './Chats'
import SignIn               from './SignIn'
import SignUp               from './SignUp'

export default combineReducers({
  Main,
  Chats,
  SignIn,
  SignUp,
})