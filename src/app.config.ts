export default {
  pages: [
    'pages/Home/index',
    'pages/Setting/index',
    'pages/index/index',
  ],
  tabBar:{
    color:'blue',
    selectedColor: 'green',
    backgroundColor:'white',
    borderStyle:'black',
    list:[
      {
        pagePath:'pages/Home/index',
        text:'Home'
      },
      {
        pagePath: 'pages/Setting/index',
        text:'Setting'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
