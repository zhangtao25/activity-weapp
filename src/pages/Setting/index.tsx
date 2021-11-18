import {Button, Form, Input, Switch, Text, View} from "@tarojs/components";
import Taro,{ navigateTo } from "@tarojs/taro";
import {useEffect, useState} from "react";
import {UserService} from "../../service/UserService";
const Index = ()=>{
    const [useinfo,setUserinfo] = useState<any>({})
    useEffect(()=>{
        UserService.profile({}).then(res=>{
            console.log(res)
            setUserinfo(res)
        })
    },[])


    const formSubmit = e => {
        if (e.detail.value.weappId === ''){
            Taro.showToast({
                title: 'weappId不可为空'
            })
        } else {
            console.log(e.detail.value)
            Taro.setStorageSync('testWeappId',e.detail.value.weappId)
        }

    }

    const formReset = e => {
        console.log(e)
    }
  return (
      <View>
          {JSON.stringify(useinfo)}
          <Button onClick={()=>{navigateTo({
              url:'/pages/Auth/index'
          })}}>去auth页面</Button>



          <Text>当前的测试账号为：{JSON.stringify(useinfo)}</Text>
          {/*<Text>testWeappId{}</Text>*/}
          <Form onSubmit={formSubmit} onReset={formReset} >
              <View className='example-body'>
                  <Input name='weappId' type='text' placeholder='weappId'/>
              </View>
              <Button form-type={'submit'}>设置</Button>
              <Button onClick={()=>{
                  try {
                      Taro.removeStorageSync('testWeappId')
                  } catch (e) {
                      // Do something when catch error
                  }
              }}>取消</Button>
          </Form>
      </View>
  )
}
export default Index