/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @component: Sidebars
 * @class: Topbar
 */

import React, { Component  } from 'react'
import {
  Text,
  View,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native'
import { Color }        from '../../assets/Varibles'
import Button           from 'react-native-button';
import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome';

class Topbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { icon, enable, text, sizeIcon = 20, colorIcon = '#FFFFFF', style = {}, styleText = {} } = this.props
    const BtnIcon = (enable && icon)? icon : icon ? icon : <FontAwesomeIcon name='hand-o-left' size={sizeIcon} color={colorIcon} />
    let btnProps = {};
    if (!this.props.disabled) {
      btnProps.onPress = this.props.onPress;
      btnProps.onPressIn = this.props.onPressIn;
      btnProps.onPressOut = this.props.onPressOut;
      btnProps.onLongPress = this.props.onLongPress;
    }

    return (
      <View style={[styles.container, style]}>
        <StatusBar
          backgroundColor={Color.sidebar}
          barStyle="light-content"
        />
        <View style={[styles.header]}>
          {
            enable  && <Button style={styles.btn} {...btnProps}>
              {BtnIcon}
              <Text style={[styles.text, styleText]}>{text}</Text>
            </Button>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.sidebar,
  },

  header: {
    marginBottom: 10,
    ...Platform.select({
      ios: {
        marginTop: 30,
      }
    }),
  },

  btn: {
    margin: 5,
    marginLeft: 15,
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.transparent,
  },

  text: {
    color: Color.white,
    marginLeft: 10
  }
});
export default Topbar
