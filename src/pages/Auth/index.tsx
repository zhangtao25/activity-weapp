import {Button, View} from "@tarojs/components";
import {UserService} from "../../service/UserService";
import Taro from "@tarojs/taro";

const Index = () => {
    return (
        <View>
            <Button onClick={() => {
                // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
                // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
                // @ts-ignore
                wx.getUserProfile({
                    desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                    success: (res) => {
                        console.log(res)
                        UserService.wxCreateAndUpdate({
                            // weappId:weappId,
                            // session_key: Taro.getStorageSync('session_key'),
                            weappId:Taro.getStorageSync('weappId'),
                            userInfo:res.userInfo
                        }).then(wxCreateAndUpdateRes=>{
                            console.log(wxCreateAndUpdateRes)
                            Taro.showModal({
                                title: '提示',
                                content: JSON.stringify(wxCreateAndUpdateRes),
                                success: function (res) {
                                    if (res.confirm) {
                                        console.log('用户点击确定')
                                    } else if (res.cancel) {
                                        console.log('用户点击取消')
                                    }
                                }
                            })
                        })
                    }
                })
            }}>一键登录</Button>
        </View>
    )
}
export default Index