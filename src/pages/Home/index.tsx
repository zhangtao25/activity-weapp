import {Swiper, SwiperItem, View} from "@tarojs/components";
const Index = ()=>{
    return (
        <View>
            主页
            <View style={{width:'100%',height:'200px'}}>
                <Swiper
                    className='test-h'
                    indicatorColor='#999'
                    indicatorActiveColor='#333'
                    vertical
                    circular
                    indicatorDots
                    autoplay>
                    <SwiperItem>
                        <View className='demo-text-1'>1</View>
                    </SwiperItem>
                    <SwiperItem>
                        <View className='demo-text-2'>2</View>
                    </SwiperItem>
                    <SwiperItem>
                        <View className='demo-text-3'>3</View>
                    </SwiperItem>
                </Swiper>
            </View>
        </View>
    )
}
export default Index