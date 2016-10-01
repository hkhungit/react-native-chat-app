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
  ScrollView,
  StyleSheet,
} from 'react-native'
import Router           from '../navigators'
import { Color }        from '../assets/Varibles'
import Button           from 'react-native-button'
import Storage          from 'react-native-storage'
import Topbar           from '../components/sidebars/Topbar'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    Router.save(this)
  }

  render() {
    return (
      <View style={styles.container}>
        <Topbar/>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={styles.form}>
            <View style={styles.coverTitle}>
              <Text style={styles.titleText}>Logo</Text>
            </View>
            <Text style={styles.slogan}> (^-^) Enter your slogan here (-.-) </Text>
          </View>
        </ScrollView>
        <View style={styles.btnGroup}>
          <Button
            styleText={styles.btnText}
            style={styles.btn}
            onPress={() => Router.redirect(this, 'sign-in')}
            text="SIGN IN" />
          <Button
            styleText={styles.btnText}
            style={styles.btn}
            onPress={() => Router.redirect(this, 'sign-up')}
            text="SIGN UP" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Color.background,
  },

  coverTitle: {
    width: 100,
    height: 100,
    marginBottom: 30,
    borderRadius: 50,
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.sidebar,
  },

  titleText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: Color.white,
  },

  form:{
    flex: 1,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  slogan: {
    color: Color.white,
    justifyContent: 'center',
  },

  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.sidebar,
  },

  btn: {
    margin: 0,
    padding: 5,
    borderWidth: 0,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.sidebar,
  },

  btnText: {
    fontSize: 20,
    color: '#FFF',
  }
});

export default Home
