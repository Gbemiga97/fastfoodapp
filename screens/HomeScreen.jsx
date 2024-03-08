import { View, Text, Image, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { AdjustmentsHorizontalIcon, Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import { data } from '../utils'
import { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import FoodCard from '../components/FoodCard'

export default function HomeScreen() {

    const [activeCategory, setActiveCategory] = useState("Burger")

  return (
    <View style={tw`flex-1 relative`}>
      <Image blurRadius={30} source={'../assets/images/backgroundimage.jpg'} style={tw`absolute w-full h-full`} />
    <SafeAreaView style={tw`flex-1 pt-6`}>
        <View style={tw`flex-row justify-between items-center mx-4`}>
            <View style={tw`bg-white p-3 shadow-md rounded-2xl`}>
            <Bars3CenterLeftIcon size='25' stroke={100} color='black' />
            </View>
            <View style={tw`bg-[rgba(255,255,255,0.7)] p-[2px] rounded-2xl`}>
                <Image source={'../assets/images/profilepic.avif'} style={tw` rounded-2xl h-12 w-12`} />
            </View>
        </View>
        {/* punchline */}
        <View style={tw`my-12 gap-y-2 mx-4`}>
            <Text style={tw`text-gray-800 text-5xl font-medium`}>Fast and</Text>
            <Text style={tw`text-gray-800 text-5xl font-medium`}>
            <Text style={tw`font-extrabold`}>Delicious</Text> Food
            </Text>
        </View>
        {/* Search  */}
        <View style={tw`flex-row items-center justify-between gap-x-3 mx-4`}>
            <View style={tw`bg-white rounded-2xl flex-1 flex-row p-4`}>
                <MagnifyingGlassIcon stroke={40} color='gray' />
                <TextInput placeholder='Food' value='Search' style={tw`text-gray-800 ml-2`} />
            </View>
            <View style={tw`bg-white rounded-2xl p-4`}>
                <AdjustmentsHorizontalIcon size='25' stroke={40}  />
            </View>
        </View>

        {/* categories scrollbar */}
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 20}}
        style={tw`mt-6 pt-6 max-h-20`}
        >
            {
                data.categories.map((cat, i) => (
                <Animatable.View
                delay={i*120}
                animation='slideInDown'
                key={i}
                >
                     <TouchableOpacity style={tw`mr-9 flex items-center`} onPress={() => setActiveCategory(cat)} >
                        <Text style={tw`${cat === activeCategory && 'font-bold'}
                        text-gray-800 text-base tracking-widest`}>
                            {cat}
                        </Text>
                        {
                         cat === activeCategory && 
                        <View style={tw`bg-gray-800 font-extrabold h-1 w-5  mt-2`} />
                        }
                    </TouchableOpacity>
                </Animatable.View>
                ))
            }
        </ScrollView>

        {/* food cards */}
        <ScrollView contentContainerStyle={{paddingHorizontal: 20}} horizontal stickyHeaderHiddenOnScroll={false}>
            {
                data.foodItems.map((item, i) => <FoodCard key={i} item={item} i={i} />)
            }
        </ScrollView>
    </SafeAreaView>
    </View>
  )
}