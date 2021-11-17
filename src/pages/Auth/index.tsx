import {Button, View} from "@tarojs/components";
const Index = ()=>{
    const handleWXGetUserInfo = (event) => {
        console.log(event.detail)
    }
    return (
        <View>
            <Button openType='getUserInfo' onGetUserInfo={handleWXGetUserInfo}>授权</Button>
        </View>
    )
}
export default Index