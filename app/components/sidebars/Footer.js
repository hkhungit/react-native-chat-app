/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @component: Sidebars
 * @class: Footer
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

class Footer extends Component {
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
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.sidebar
  },
});
export default Footer
