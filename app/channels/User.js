import Auth         from '../lib/Auth'
import Env          from '../../../env'
import Actions      from '../actions/creators'

export default User = {
  setStore (store){
    this.props = store
    this.init()
  },

  init(){
    if (Auth.isLogin())
      this.userSubscription()
    else
      Env.UsersChannel = null
  },

  userSubscription(){
    this.userUnSubscription()
    const token = Auth.getToken()
    const el    = this
    let host    = Env.host.replace(/https:\/\//,"")
    host        = host.replace(/http:\/\//,"")
    this.websocket = ActionCable.createConsumer(`ws://${host}/cable?token=${token}`)
    Env.UsersChannel = this.websocket.subscriptions.create('UsersChannel', {
      received (response){
        
        const { data }    = response
        switch(response.model){
          case 'notification':
            return this._notification(response, el)
          case 'setting':
            return this._setting(response, el)
          case 'user':
            return this._user(response, el)
          case 'chatroom':
            return this._chatroom(response, el)
        }
        return
      },

      _notification(response, el){
        switch(response.operation){
          case 'notification':
            return el.props.dispatch(Actions.pushNotification(response.data))
        }
      },

      _setting(response, el){
        switch(response.operation){
          case 'notification':
            return el.props.dispatch(Actions.settingNotificationSuccess(response.data))
        }
      },

      _chatroom(response, el){
        const { data } = response
        switch(response.operation){
          case 'add':
            return el.props.dispatch(Actions.addChatroomSuccess(data))
          case 'change':
            el.props.dispatch(Actions.changeChatSuccess(data))
            return el.props.dispatch(Actions.addChatroomSuccess(data))
          case 'remove':
            return el.props.dispatch(Actions.removeChatroomSuccess(data))
          case 'chatrooms':
            return el.props.dispatch(Actions.getChatsroomSuccess(data))
        }
      },      

      _user(response, el){
        const { data } = response
        switch(response.operation){
          case 'friends':
            return el.props.dispatch(Actions.getFriendsSuccess(data))
          case 'inviters':
            return el.props.dispatch(Actions.getInvitersSuccess(data))
          case 'setting':
            return 
          case 'medias':
            return el.props.dispatch(Actions.getMediasSuccess(data))
          case 'update':
            return el.props.dispatch(Actions.fetchUserReceive(response))
          case 'strangers':
            return el.props.dispatch(Actions.getStrangerSuccess(response.data))
        }
      },

      getMedia (){
        this.perform('medias')
      },

      UnSubscription (){
        this.perform('unsubscribed')
      },  

      getStrangers (){
        this.perform('stranger')
      },

      settingNotification(notification){
        this.perform('setting_notification', notification)
      },   

      fetchSettingNotification(){
        this.perform('fetch_setting_notification')
      },

      rejected (){
        Auth.delToken()
      }
    })
  },

  userUnSubscription(){
    if (Env.UsersChannel) {
      Env.UsersChannel.UnSubscription()
      Env.UsersChannel.unsubscribe()
    }
  }
}