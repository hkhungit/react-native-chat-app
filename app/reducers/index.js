/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @reducer: Index
 */

import { combineReducers }  from 'redux'
import Home                 from './Home'
import Users                from './Users'
import Chats                from './Chats'
import SignIn               from './SignIn'
import SignUp               from './SignUp'
import Search               from './Search'
import Setting              from './Setting'
import Message              from './Message'
import Inviters             from './Inviters'

export default combineReducers({
  Home,
  Users,
  Chats,
  SignIn,
  SignUp,
  Search,
  Setting,
  Message,
  Inviters
})