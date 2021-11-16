import {View} from "@tarojs/components";
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
      </View>
  )
}
export default Index