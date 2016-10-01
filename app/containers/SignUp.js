/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @container: SignUp
 * @class: SignUp
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
import { Color }        from '../assets/Varibles'
import { connect }      from 'react-redux'
import Button           from 'react-native-button'
import { Sae }         from 'react-native-textinput-effects'
import Topbar           from '../components/sidebars/Topbar'
import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.onBack   = this.onBack.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onSignUp = this.onSignUp.bind(this)
  }

  onBack(){
    this.props.navigator.pop();
  }

  onCancel(){
    this.props.dispatch(Actions.SignUpReset())
  }

  onSignUp(){
    const username = this.refs.username.state.value
    const password = this.refs.password.state.value
    const fullname = this.refs.fullname.state.value
    this.props.dispatch(Actions.SignUpExecute({username, password, fullname}))
  }

  componentWillReceiveProps(props) {
    const { user = {} } = props
    if (user.id){
      this.props.dispatch(Actions.SignUpReset())
      Router.redirect(this, 'sign-in')
    }
  }

  componentWillUnmount() {
    this.props.dispatch(Actions.SignUpReset())
  }

  render() {
    const { user = {}, errors={} } = this.props
    const { username, fullname } = user
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
            { errors.username && errors.username.map(err =><Text key={Math.random()} style={styles.messageError}>Username {err}</Text>)}

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

            <Sae
              key='fullname'
              ref='fullname'
              value={fullname}
              label={'Name'}
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
            { errors.fullname && errors.fullname.map(err =><Text key={Math.random()}  style={styles.messageError}>Name {err}</Text>)}
          </View>
        </ScrollView>

        <View style={styles.groupControl}>
          <View style={styles.row}>
            <Text style={{color: Color.white, marginRight: -10}}> Do you have an account?</Text>
            <Button
              styleText={styles.btnLabelText}
              style={styles.btnLabel}
              onPress={() => Router.redirect(this, 'sign-in')} 
              text="Sign in now!" />
          </View>
        </View>
        <Button
          styleText={styles.btnText}
          style={styles.btn}
          onPress={this.onSignUp}
          text="SIGN UP" />
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
    margin: 5,
    color: Color.white,
  },

  labelStyle: {
    margin: 5,
    color: Color.drankwhite,
    fontWeight: 'normal'
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

  groupControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  return state.SignUp
}

export default connect(map)(SignUp)

