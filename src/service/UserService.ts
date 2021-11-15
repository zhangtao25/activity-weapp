import { request } from "@tarojs/taro";
import {config} from "../config";

export class UserService {
    static wxLogin (params){
        return request({
            url: config.platformapi + '/user/wxLogin',
            data: params,
            method: 'POST'
        })
    }
}