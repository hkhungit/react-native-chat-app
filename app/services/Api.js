/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @service: Api
 */

import { create } from 'apisauce'
import Env from '../../env'
export const Api        = (create({baseURL: Env.api, headers: {'Accept': 'application/chatapp.v' + Env.version}}))
export default Host     = (create({baseURL: Env.host}))
