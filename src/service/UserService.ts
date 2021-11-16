import { request } from "../utils/request";
import {config} from "../config";

export class UserService {
    static wxLogin (params){
        return request({
            url: config.platformapi + '/user/wxLogin',
            data: params,
            method: 'POST'
        })
    }
    static profile (params){
        return request({
            url: config.platformapi + '/user/getuserinfo',
            data: params,
            method: 'GET'
        })
    }
}