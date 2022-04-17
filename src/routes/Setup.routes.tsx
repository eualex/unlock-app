import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/Home'

const Stack = createNativeStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={HomeScreen} options={{  }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}