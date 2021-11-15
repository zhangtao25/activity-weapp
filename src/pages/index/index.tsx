import {Button, View} from "@tarojs/components";
import {useState} from "react";
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux'
import {SETTING} from "../../store/constants/i18n";
interface Counter {
    num:number
}
interface I18n {
    lang:string
    translation:any
}
const Index = ()=>{
    const [msg,setMsg] = useState<string>('hihi')
    const counter = useSelector((state:{counter:Counter}) => state.counter);

    // i18n使用
    const t = useSelector((state:{i18n:I18n}) => state.i18n)['translation'];
    const dispatch = useDispatch()
    console.log(counter,'123')
  return (
      <View>
          <Button onClick={()=>{setMsg(msg+'1')}}>＋</Button>
          {/*i18n的使用*/}
          <Button onClick={()=>{setMsg(msg+'1')}}>{t['个人中心.个人设置']}</Button>
          <Button onClick={() => dispatch({ type: SETTING })}>
              Increment counter
          </Button>
          {msg}
          {counter.num}
      </View>
  )
}
export default Index