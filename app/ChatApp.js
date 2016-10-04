/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @class: ChatApp
 */

import React, { Component } from 'react'
import { 
  Text,
  Navigator, 
  ActivityIndicator,
  TouchableHighlight
} from 'react-native'
import Env                  from '../env'
import Router               from './navigators'
import Storage              from 'react-native-storage';
import ActionCable          from './vendors/actioncable'
import createStore          from './reducers/createStore'
import { Provider }         from 'react-redux'

let store = createStore()

class ChatApp extends Component {
  constructor(){
    super()
    this.state = {
      connected: false,
      routes: null,
      currentId: 0,
    }

    this.fetchRoute = this.fetchRoute.bind(this)
  }

  componentWillMount() {
    let cache = new Storage({defaultExpires: 1000 * 3600 * 24 * 100000})
    cache.load({ key: 'routes' })
    .then(this.fetchRoute)
    .catch(err =>{
      this.setState({connected: true, routes: null})
    })

    let timeour = setInterval(() => {
      if (this.state.connected) {
        clearInterval(timeour)
      }
    }, 100)
  }

  fetchRoute(data){
    const { routes , currentId } =  data
    this.setState({connected: true, routes, currentId: currentId ? currentId : 0})
  }

  render() {
    const { connected, routes } =  this.state
    const currentId = this.state.currentId

    if (!connected)
      return(
        <ActivityIndicator
            animating={true}
            style={{height: 100, alignSelf: 'center'}}
            size="large"
        />
      )

    if (routes && currentId && routes[currentId])
      return (
        <Provider store={store}>
          <Navigator
            ref="navigator"
            initialRoute={routes[currentId]}
            initialRouteStack={routes}
            renderScene={Router.renderScene}
            />
        </Provider>
      );

    return (
      <Provider store={store}>
        <Navigator
          ref="navigator"
          initialRoute={{name: 'screen'}}
          renderScene={Router.renderScene}
          configureScene={Router.configureScene}
        />
      </Provider>
    );
  }
}

export default ChatApp
