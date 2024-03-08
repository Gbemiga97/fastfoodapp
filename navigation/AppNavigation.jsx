import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import FoodDetailsScreen from "../screens/FoodDetailsScreen"



const Stack = createNativeStackNavigator()

export default function AppNavigation() {



  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="FoodDetails" options={{headerShown: false}} component={FoodDetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}