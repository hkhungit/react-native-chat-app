/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @container: SignIn
 * @class: SignIn
 */

import React, { Component  } from 'react'
import {
  Text,
  View,
  TextInput,
  StatusBar,
  ScrollView,
  StyleSheet,
} from 'react-native'
import Actions          from '../actions'
import Router           from '../navigators'
import { connect }      from 'react-redux'
import Auth             from '../services/Auth'
import { Color }        from '../assets/Varibles'
import Button           from 'react-native-button'
import { Sae }          from 'react-native-textinput-effects'
import Topbar           from '../components/sidebars/Topbar'
import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.onBack = this.onBack.bind(this)
    this.onSignIn = this.onSignIn.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  onBack(){
    this.props.navigator.pop();
  }

  onCancel(){
    this.props.dispatch(Actions.SignInReset())
  }

  onSignIn() {
    const username = this.refs.username.state.value
    const password = this.refs.password.state.value
    this.props.dispatch(Actions.SignInExecute({username, password}))
  }

  componentWillReceiveProps(props) {
    if (Auth.isLogin() && props.redirect) {
      return this.props.navigator.resetTo({name: 'chats'})
    }
  }  

  render() {
    const { user = {}, errors={} } = this.props
    const { username } = user
    const password = ''
    return (
      <View style={styles.container}>
        <Topbar text='Back' onPress={this.onBack} enable/>
        <ScrollView>
          <View style={styles.form}>
            <View style={styles.coverTitle}>
              <Text style={styles.titleText}>F</Text>
            </View>
            <Sae
              key='username'
              ref='username'
              value={username}
              label={'username'}
              labelColor={Color.white}
              iconClass={FontAwesomeIcon}
              iconName={'pencil'}
              iconColor={Color.drankwhite}
              autoCapitalize={'none'}
              autoCorrect={false}
              labelStyle={styles.labelStyle}
              inputStyle={styles.inputStyle}
              style={{borderBottomWidth: 1, borderBottomColor: Color.drankwhite, marginTop: 5}}
            />
            { errors.username && errors.username.map(err =><Text key={Math.random()}  style={styles.messageError}>Username {err}</Text>)}

            <Sae
              key='password'
              ref='password'
              value={password}
              label={'password'}
              labelColor={Color.white}
              iconClass={FontAwesomeIcon}
              iconName={'pencil'}
              iconColor={Color.drankwhite}
              autoCapitalize={'none'}
              autoCorrect={false}
              secureTextEntry={true}
              labelStyle={styles.labelStyle}
              inputStyle={styles.inputStyle}
              style={{borderBottomWidth: 1, borderBottomColor: Color.drankwhite, marginTop: 5}}
            />
            { errors.password && errors.password.map(err =><Text key={Math.random()}  style={styles.messageError}>Password {err}</Text>)}
          </View>
        </ScrollView>
        <View style={styles.groupControl}>
          <View style={styles.row}>
            <Text style={{color: Color.white, marginRight: -10}}> Don't have an account?</Text>
            <Button
              styleText={styles.btnLabelText}
              style={styles.btnLabel}
              onPress={() => Router.redirect(this, 'sign-up')} 
              text="Sign up now!" />
          </View>
        </View>
        <Button
          styleText={styles.btnText}
          style={styles.btn}
          onPress={this.onSignIn}
          text="SIGN IN" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    margin: 20,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: Color.background,
    justifyContent: 'space-between'
  },

  coverTitle: {
    width: 100,
    height: 100,
    marginBottom: 30,
    borderRadius: 50,
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Color.sidebar,
    justifyContent: 'center',
  },

  titleText:{
    fontSize: 50,
    fontWeight: 'bold',
    color: Color.white,
  },

  form:{
    flex: 1,
    padding: 50,
    justifyContent: 'center'
  },

  inputStyle: {
    color: Color.white,
  },

  labelStyle: {
    marginTop: 5,
    marginBottom: 5,
    color: Color.drankwhite,
    fontWeight: 'normal'
  },

  groupControl: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: 10,
    borderWidth: 0,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.sidebar,
  },

  btnText: {
    color: '#FFF',
    fontSize: 20,
  },

  btnLabelText: {
    margin: 0,
    padding: 0,
    fontWeight: 'bold',
    color: Color.white,
  },

  btnLabel: {
    flex: 0,
    margin: 0,
    padding: 0,
    borderWidth: 0,
    backgroundColor: Color.transparent
  },

  messageError: {
    margin: 5,
    color: 'red',
    fontSize: 13,
    marginLeft: 0,
  },

  row: {
    flexDirection: 'row'
  }
});

function map(state) {
  return state.SignIn
}

export default connect(map)(SignIn)
