/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @component: Chats
 * @class: Item
 */

import React, { Component  } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native'
import { Color }        from '../../assets/Varibles'
import Button           from 'react-native-button'
import Auth             from '../../services/Auth'

class Chats extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { content, sender_id } = this.props
    const user = Auth.currentUser();
    style = user.id == sender_id ? styles.right : styles.left
    return (
        <View style={[styles.container, styles.reversed]}>
          <View style={[styles.inner, style]}>
            <Text style={[styles.message]}>{content}</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 3,
    borderWidth: 0,
    flexWrap: 'wrap',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: Color.transparent,
  },

  reversed: {
    transform: [
      { scaleY: -1 },
    ],
  },

  inner: {
    borderRadius: 20,
    overflow: 'hidden',
    alignSelf: 'flex-end'
  },

  message: {
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    color: Color.white,
    backgroundColor: '#2c4250'
  },

  left: {
    marginRight: 40,
    alignSelf: 'flex-start'
  },

  right: {
    marginLeft: 40,
    alignSelf: 'flex-end'
  }
});
export default Chats
