/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @reducer: Setting
 */

import Immutable         from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({})

const ACTION_HANDLERS = {}
export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
