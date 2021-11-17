import {Button, View} from "@tarojs/components";
import { navigateTo } from "@tarojs/taro";
import {useEffect, useState} from "react";
import {UserService} from "../../service/UserService";
const Index = ()=>{
    const [useinfo,setUserinfo] = useState<string>('')
    useEffect(()=>{
        UserService.profile({}).then(res=>{
            console.log(res)
            setUserinfo(JSON.stringify(res))
        })
    },[])
  return (
      <View>
          {useinfo}
          <Button onClick={()=>{navigateTo({
              url:'/pages/Auth/index'
          })}}>去auth页面</Button>
      </View>
  )
}
export default Index