import { View, Text, Image } from 'react-native'
import { ChevronLeftIcon, MinusIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { HeartIcon, PlusIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'


export default function FoodDetailsScreen(props) {

    const item = props.route.params

    const {name, img, price, desc, ingredients} = item

    const navigation = useNavigation()

  return (
    <View style={tw`flex-1 bg-white`}>
        <Image source={'../assets/images/backgroundimage.jpg'} blurRadius={30} 
        style={tw`h-96 w-full absolute rounded-bl-[60px] rounded-br-[60px]`}
        />
        <SafeAreaView>
            <View style={tw`flex-row justify-between mx-4 items-center pt-6`}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={tw`bg-white rounded-2xl p-3 shadow`}>
                    <ChevronLeftIcon size='23' stroke={50} color='black' />
                </TouchableOpacity>
                <TouchableOpacity style={tw`bg-white rounded-2xl p-3 shadow`}>
                    <HeartIcon size='23' color='black'/>
                </TouchableOpacity>
            </View>
            <View style={tw`flex justify-center items-center`}>
                <Image source={img} style={tw`h-48 w-48`} />
                <Text style={tw`text-3xl text-gray-800 font-bold`}>{name}</Text>
            </View>
            <View style={tw`flex-row justify-center items-center mt-16`}>
                <View style={tw`flex-row items-center gap-x-3 bg-gray-100 rounded-2xl justify-between `}>
                    <TouchableOpacity style={tw`rounded-2xl bg-white border-2 border-gray-200 p-3`}>
                        <MinusIcon size='20' strokeWidth={1.8} color='black' />
                    </TouchableOpacity>
                    <Text style={tw`text-xl`}>1</Text>
                    <TouchableOpacity style={tw`rounded-2xl bg-white border-2 border-gray-200 p-3`}>
                        <PlusIcon size='20' strokeWidth={1.8} color='black' />
                    </TouchableOpacity>
                </View>
            </View>
            {/* details */}
            <View style={tw`flex-row justify-between items-center mx-4 h-20 overflow-hidden`}>
                <Animatable.View 
                delay={180}
                animation='slideInDown'
                style={tw`flex- items-center gap-y-2`}>
                    <Image source={'../assets/images/calories.png'} style={tw`h-6 w-6`} />
                    <Text>130 cal</Text>
                </Animatable.View>
                <Animatable.View 
                delay={280}
                animation='slideInDown'
                style={tw`flex- items-center gap-y-2`}>
                    <Image source={'../assets/images/clock.png'} style={tw`h-6 w-6`} />
                    <Text>15-20 min</Text>
                </Animatable.View>
                <Animatable.View 
                delay={380}
                animation='slideInDown'
                style={tw`flex- items-center gap-y-2`}>
                    <Image source={'../assets/images/favorite.png'} style={tw`h-8 w-8`} />
                    <Text>4.6 votes</Text>
                </Animatable.View>
                <Animatable.View 
                delay={480}
                animation='slideInDown'
                style={tw`flex- items-center gap-y-2`}>
                    <Image source={'../assets/images/gram.png'} style={tw`h-8 w-8`} />
                    <Text>350 g</Text>
                </Animatable.View>
            </View>
        </SafeAreaView>
    </View>
  )
}