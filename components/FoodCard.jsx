import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ShoppingBagIcon } from 'react-native-heroicons/solid'
import tw from 'twrnc'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'



export default function FoodCard({item, i}) {

    const {name, price, img, ingredients} = item
    const navigation  = useNavigation()

  return (
    <Animatable.View
    delay={i*120}
    animation='slideInRight'
    style={tw`bg-[rgba(255,255,255,0.2)] w-56 h-70 my-5 mr-6 p-3 py-5 rounded-3xl`}>
      <View style={tw`flex-row justify-center`}>
        <Image source={img} style={tw`h-32 w-32`} />
      </View>
      <View style={tw`flex-1 px-3 py-2 gap-y-2`}>
        <Text style={tw`text-gray-800 text-xl font-medium tracking-wider`}>
            {name}
        </Text>
        <Text style={tw`text-gray-800`}>
            {ingredients}
        </Text>
      </View>
      <View style={tw`flex-row justify-between items-center px-2 mt-2`}>
        <Text style={tw`text-2xl font-semibold text-gray-800`}>
            ${price}
        </Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('FoodDetails', {...item})}
        style={tw`bg-white p-3 rounded-full`}>
            <ShoppingBagIcon size='25' color='black' />
        </TouchableOpacity>
        </View>
    </Animatable.View>
  )
}