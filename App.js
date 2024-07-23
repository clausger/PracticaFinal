import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import ListaPaises from './screens/ListaPaises';
import DetallePaises from './screens/DetallePaises';



const Stack = createStackNavigator();

export default function app() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="ListaPaises" component={ListaPaises}/>
        <Stack.Screen name="DetallePaises" component={DetallePaises}/>
      </Stack.Navigator>
    </NavigationContainer>
  );


}
