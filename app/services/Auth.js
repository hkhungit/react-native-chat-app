/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @service: Auth
 */

import Storage from 'react-native-storage';
import Env from '../../env'

var cache;

const Auth = {
  init (){
    cache = new Storage({defaultExpires: 1000 * 3600 * 24 * 100000})
    this.fetRoutes()
    this.fetUser()
    this.fetToken()
  },

  setRoutes (routes){
    currentId = routes ? routes.length : 0
    cache.save({
      key: 'routes',
      rawData: {routes, currentId}
    })
    Env.routes = {routes, currentId}
  },

  fetRoutes (){
    cache.load({
      key: 'routes'
    }).then(ret => {
      Env.routes = ret
    }).catch(err =>{})
  },

  getRoutes (){
    return Env.routes
  },

  delRoutes (){
    cache.remove({key: 'routes'})
    Env.routes = null
  },

  setToken (token){
    cache.save({
      key: 'token',
      rawData: token
    })
    Env.connected = true
    Env.token = token
  },

  fetToken (){
    cache.load({
      key: 'token'
    }).then(ret => {
      Env.token = ret
      Env.connected = true
    }).catch(err =>{
      Env.connected = true
    })
  },

  getToken (){
    return Env.token
  },

  delToken (){
    cache.remove({key: 'token'})
    Env.token = null
    this.delUser()
  },

  setUser (user){
    cache.save({
      key: 'user',
      rawData: user
    })
    Env.user = user
    this.fetUser()
  },

  fetUser (){
    cache.load({
      key: 'user'
    }).then(ret => {
      Env.user = ret
    }).catch(err => {})
  },

  currentUser (){
    return Env.user
  },

  delUser (){
    Env.token = null
    Env.user = null
    cache.remove({key: 'user'})
  },

  loaded (){
    return Env.connected
  },

  isLogin (){
    if (!this.loaded()) {
      return false;
    }

    return Env.token !== null && Env.token !== undefined
  }
}

Auth.init()
export default Auth