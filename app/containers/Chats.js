/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @container: Chats
 * @class: Chats
 */

import React, { Component  } from 'react'
import {
  Text,
  View,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native'
import Actions          from '../actions'
import { connect }      from 'react-redux'
import Router           from '../navigators'
import Auth             from '../services/Auth'
import { Color }        from '../assets/Varibles'
import Button           from 'react-native-button'
import Storage          from 'react-native-storage'
import Lists            from '../components/chats'
import Topbar           from '../components/sidebars/Topbar'
import Icon             from 'react-native-vector-icons/FontAwesome'

class Chats extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const token = Auth.getToken()
    this.props.dispatch(Actions.GetChats(token))
  }

  render() {
    const { chats, onPress=(c)=>{} } = this.props

    return (
      <View style={styles.container}>
        <View style={[styles.header, styles.row]}>
          <View style={styles.coverTitle}><Text style={styles.title}> Chats</Text></View>
          <Button style={styles.btnIcon}><Icon name='edit' color={Color.white} size={20}/></Button>
        </View>
        <View style={styles.component}>
          <Lists dataSource={chats} onPress={onPress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },

  header: {
    padding: 8,
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.sidebar
  },

  coverTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.white,
  },

  btnIcon: {
    width: 30,
    height: 30,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.transparent
  },

  component: {
    flex: 1,
    backgroundColor: Color.transparent
  },

  row: {
    flexDirection: 'row'
  }
});

function map(state) {
  return state.Chats
}

export default connect(map)(Chats)
