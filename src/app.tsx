import { Component } from 'react'


import './app.less'
import configStore from './store'
import { Provider} from "react-redux";
import Taro from '@tarojs/taro';
import {UserService} from "./service/UserService";
// import Taro from '@tarojs/taro';
// import {SETTING} from "./store/constants/i18n";

// import rootReducer from './reducer'
const store = configStore()
// const dispatch = useDispatch()

class App extends Component {

  // 初始化方法
  init(){
    // const _this = this
    Taro.login({
      success: function (res) {
        if (res.code) {
          // ###1.调用微信登录
          UserService.wxLogin({code: res.code}).then((checkIsHasUserRes:any)=>{
            console.log(checkIsHasUserRes,'checkIsHasUserRes')
            if (checkIsHasUserRes.isHasUser){
              // 登录成功后先设置token
              try {
                Taro.setStorageSync('token', checkIsHasUserRes.token);
              } catch (e) {
                // error
              }
              // 拿用户信息，存到vuex里
              console.log(console)
            } else {
              // 登录失败后清除token
              try {
                Taro.removeStorageSync('token');
              } catch (e) {
                // error
              }
              // 设置openid
              try {
                Taro.setStorageSync('openid', 'wxLoginCb.openid');
              } catch (e) {
                // error
              }
              // 如果没有注册过，并且是通过分享页过来的，打去鉴权页****
              // 如果没有注册过，并且是通过分享页过来的，打去鉴权页****
              // 如果没有注册过，并且是通过分享页过来的，打去鉴权页****
              // if (_this.option.source){
              //   uni.redirectTo({
              //     url:'/pages/Auth/index?source=' + _this.option.source
              //   })
              // } else {
              //   uni.redirectTo({
              //     url:'/pages/index/index'
              //   })
              // }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentDidMount () {
    this.init()

    // Taro.request({
    //   method:'GET',
    // }).then(res=>{
    //   store.dispatch({type:SETTING,payload:res.data})
    //   // console.log(,'store')
    //   // console.log(res.data)
    //   // dispatch({ type: SETTING, payload:res.data })
    // })



  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
