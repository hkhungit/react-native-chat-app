import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import Button     from 'react-native-button'
import { Color }  from '../../assets/Varibles'
import Icon       from 'react-native-vector-icons/FontAwesome'

const Tabs = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
  },

  renderIcon(tab, page, icon) {
    switch (tab) {
      case 'chats':
        return <Icon name='comments' {...icon}/>
      case 'friends':
        return <Icon name='users' {...icon}/>
      case 'inviters':
        return <Icon name='user-plus' {...icon}/>
      case 'search':
        return <Icon name='search-plus' {...icon}/>
    }
  },

  render() {
    const icon = {}
    icon.size  = 20
    icon.color = '#FFFFFF'
    const { goSetting =()=>{}, goToPage =()=>{}} =  this.props
    return (
      <View style={styles.container} horizontal={true} contentContainerStyle={[styles.tabs,styles.shadow]}  elevation={5}>
          {this.props.tabs.map((tab, i) => {
            const isTabActive = this.props.activeTab === i
            const tabBackground = isTabActive ? 'rgba(255, 255, 255, .25)' : 'transparent'

            return <Button key={tab} onPress={() => goToPage(i)}  style={styles.btn} styleText={styles.textStyle}>
              {this.renderIcon(tab,i,icon)}
            </Button>
          })}
          <Button style={styles.btn} onPress={() => goSetting()} styleText={styles.textStyle} >
            <Icon name='gears' {...icon}/>
          </Button>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.sidebar,
  },

  shadow: {
    backgroundColor: '#31739e',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 1.5,
      width: 0
    },
  },

  btn: {
    flex: 1,
    padding: 15,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  tabs: {
    flexDirection: 'row',
    padding: 0,
    margin: 0,
    height: 50,
  },
});


export default Tabs