import Taro from '@tarojs/taro';
// import {options} from "@tarojs/runtime";
export const request = (options) => {
    return Taro.request({
        ...options,
        header:{
            'token': Taro.getStorageSync('token')
        }
    }).then(res=>res.data)
};