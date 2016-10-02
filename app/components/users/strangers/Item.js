/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @component: Users
 * @class: ItemStranger
 */

import React, { Component  } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native'
import { Color }        from '../../../assets/Varibles'
import Button           from 'react-native-button';

class ItemStranger extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { fullname, image = 'https://facebook.github.io/react/img/logo_og.png', status = 'hello react native chatapp', time ='0 sec', style = {} } = this.props
    return (
      <Button style={[styles.container, style]}>
        <View style={styles.imageOutner}>
          <Image style={styles.image} source={{uri: image}} />
        </View>
        <View style={styles.component}>
          <Text style={styles.name}>{fullname.toUpperCase()}</Text>
          <Text style={styles.message}>{status}</Text>
        </View>
        <View style={styles.btnGroup}>
          <Button text='ADD' style={styles.btn} />
        </View>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 0.5,
    borderRadius: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    flexDirection: 'row',
    borderColor: Color.gray,
    backgroundColor: Color.transparent,
  },

  image: {
    margin: 5,
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 25,
  },

  component: {
    flex: 1,
    margin: 5,
    alignSelf: 'center',
  },

  name: {
    fontSize: 18,
    color: Color.white,
    fontWeight: 'bold',
  },

  message: {
    color: '#bcdaee'
  },

  caption: {
    margin: 5,
    fontSize: 12,
    alignSelf: 'center',
    color: Color.drankwhite,
  },

  btnGroup: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  btn: {
    padding: 0,
    marginLeft: 10,
    borderWidth: 0,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 20,
    backgroundColor: Color.sidebar
  }
});
export default ItemStranger
