/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @container: Search
 * @class: Search
 */

import React, { Component  } from 'react'
import {
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Dimensions,
  LayoutAnimation,
  TouchableHighlight
} from 'react-native'
import Actions          from '../actions'
import Router           from '../navigators'
import Auth             from '../services/Auth'
import { Color }        from '../assets/Varibles'
import Button           from 'react-native-button'
import Storage          from 'react-native-storage'
import Lists            from '../components/chats'
import Topbar           from '../components/sidebars/Topbar'
import Icon             from 'react-native-vector-icons/FontAwesome'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Setting extends Component {
  constructor(props) {
    super(props)    
    this.state = {
      showDrop:false
    }
  }

  componentWillMount() {
    const token = Auth.getToken()
  }

  _menuStyles = {}
  minRight = 0
  maxRight = - 1.7 * width
  layoutLinear = {
    duration: 600,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  }

  menu = (null : ?{ setNativeProps(props: Object): void })

  updatePosition() {
    this.menu && this.menu.setNativeProps(this._menuStyles)
  }

  componentDidMount() {
    this._menuStyles = {
      style: {
        right: this.maxRight
      }
    }

    this.updatePosition();
  }

  goSetting(){
    const { showDrop } = this.state
    this.setState({showDrop: !showDrop})
    if (showDrop) {
      this._menuStyles.style.right = this.maxRight
    }else{
      this._menuStyles.style.right = this.minRight
    }
    this.updatePosition();
    LayoutAnimation.configureNext(this.layoutLinear);
  }

  render() {
    const { onLogout =()=>{} } = this.props
    const image = 'https://facebook.github.io/react/img/logo_og.png'
    return (
      <View style={styles.drop} ref={(menu) => {this.menu = menu}}>
        <Topbar style={styles.topbar}/>
        <View style={[styles.header, styles.row]}>
          <View style={styles.coverTitle}><Text style={styles.title}>Setting</Text></View>
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.avatarCover}>
            <Image source={{uri: image}} style={styles.avatar} />
          </View>
          <View style={styles.content}>
            <Button style={styles.btn}>
              <Icon name='edit' color={Color.background} size={20}/>
              <Text style={styles.btnText}>Profile</Text>
            </Button>
            <Button style={styles.btn}>
              <Icon name='file-image-o' color={Color.background} size={20}/>
              <Text style={styles.btnText}>Media</Text>
            </Button>
            <Button style={styles.btn}>
              <Icon name='bell-slash-o' color={Color.background} size={20}/>
              <Text style={styles.btnText}>Sound</Text>
            </Button>
            <Button style={styles.btn}>
              <Icon name='download' color={Color.background} size={20}/>
              <Text style={styles.btnText}>Download</Text>
            </Button>
            <Button style={styles.btn}>
              <Icon name='area-chart' color={Color.background} size={20}/>
              <Text style={styles.btnText}>Statistical</Text>
            </Button>
          </View>
          <View style={{marginTop: 50, alignItems: 'center', justifyContent: 'center'}}>
            <Button style={[styles.btn, styles.btnLogout]} onPress={onLogout}>
              <Icon name='sign-out' color={Color.white} size={20}/>
              <Text style={[styles.btnText, styles.textLogout]}>Logout</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 0.7*width,
    alignSelf: 'flex-end',
    backgroundColor: Color.drankwhite,
  },

  header: {
    padding: 16,
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.sidebar
  },

  avatarCover: {
    padding: 20,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content:{
    flex: 1,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  topbar: {
    ...Platform.select({
      ios: {
        height: 30,
      }
    }),
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
  drop:{
    height: height - 50,
    width: width,
    position:"absolute",
    top:0,
    right: this.maxRight,
    opacity:1,
    backgroundColor:"rgba(0,0,0,0.6)"
  },

  btn:{
    padding: 10,
    borderWidth: 0,
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: "rgba(0,0,0,0.6)",
    backgroundColor: Color.transparent
  },

  btnIcon: {
    width: 30,
    height: 30,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.transparent
  },

  btnLogout: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomWidth: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Color.background
  },

  btnText: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: Color.background
  },

  textLogout: {
    marginLeft: 0,
    color: Color.white
  },

  row: {
    flexDirection: 'row'
  }
});

export default Setting
