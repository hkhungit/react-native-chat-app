/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @container: Home
 * @class: Home
 */

import React, { Component  } from 'react'
import {
  Text,
  View,
  Platform,
  Dimensions,
  StatusBar,
  StyleSheet,
  LayoutAnimation,
  TouchableHighlight
} from 'react-native'
import Actions          from '../actions'
import Users            from './Users'
import Chats            from './Chats'
import Search           from './Search'
import Inviters         from './Inviters'
import Setting          from './Setting'
import { connect }      from 'react-redux'
import Router           from '../navigators'
import { Color }        from '../assets/Varibles'
import Button           from 'react-native-button'
import Tabs             from '../components/sidebars/Tabs'
import Topbar           from '../components/sidebars/Topbar'
import TabsView         from 'react-native-scrollable-tab-view'
import Icon             from 'react-native-vector-icons/FontAwesome'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDrop:false
    }
  }

  goSetting(){
    this.refs.setting.goSetting()
  }

  onLogout(){
    this.props.dispatch(Actions.SignOutExecute())
  }

  onProfile(){
    
  }

  onMedia(){
    
  }
  
  onSound(){
    
  }
  
  onDownload(){
    
  } 

  onStatistical(){
    
  }

  componentWillReceiveProps(props) {
    const { Signout } = props
    if (Signout)
      this.props.navigator.resetTo({name: 'screen'})
  }
  
  componentDidMount() {
    Router.save(this)
  }

  redirectChat(chat){
    return Router.redirect(this, 'chat', {chat})
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Topbar style={styles.topbar}/>
        <TabsView
          initialPage={0}
          style={styles.tabs}
          renderTabBar={() => <Tabs goSetting={this.goSetting.bind(this)} />}>
          <Chats tabLabel="chats" onPress={this.redirectChat.bind(this)} />
          <Users tabLabel="friends" />
          <Inviters tabLabel="inviters" />
          <Search tabLabel="search" />
        </TabsView>
        <Setting
          ref='setting'
          onProfile={this.onProfile.bind(this)}
          onMedia={this.onMedia.bind(this)}
          onSound={this.onSound.bind(this)}
          onDownload={this.onDownload.bind(this)}
          onStatistical={this.onStatistical.bind(this)}
          onLogout={this.onLogout.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.sidebar,
  },

  topbar: {
    ...Platform.select({
      ios: {
        height: 30,
      }
    }),
  },

  tabs: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: Color.background,
  },
});

function map(state) {
  return state.Home
}

export default connect(map)(Home)
