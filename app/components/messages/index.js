/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @component: Chats
 * @class: Chats
 */

import React, { Component  } from 'react'
import {
  Text,
  View,
  ListView,
  StyleSheet,
} from 'react-native'
import Item             from './Item'
import { Color }        from '../../assets/Varibles'

class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: null
    }
    this.renderRow = this.renderRow.bind(this)
  }

  renderRow(item){
    return <Item {...item} />
  }

  cloneWithRows(items){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ds.cloneWithRows(items)
  }

  render() {
    const { style = {} } = this.props
    const { dataSource } = this.state
    return (
      <View style={[styles.container, style]}>
      {
        (dataSource && dataSource.length > 0) ?
        <ListView
          style={styles.reversed}
          enableEmptySections
          dataSource={this.cloneWithRows(dataSource)}
          renderRow={this.renderRow}
        />
        :
        <Text style={styles.norecord}> No Message </Text>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'center',
  },

  reversed: {
    transform: [
      { scaleY: -1 },
    ],
  },

  norecord: {
    fontSize: 20,
    color: Color.white,
    alignSelf: 'center',
  }
});
export default Messages
