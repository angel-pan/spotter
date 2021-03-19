import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import FaqScreen from '../Screens/FaqScreen';

const Stack = createStackNavigator();

export default function MatchStackNavigator(){
    return (
    <Stack.Navigator
    headerMode='none'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Faq" component={FaqScreen}  />
    </Stack.Navigator>)
}