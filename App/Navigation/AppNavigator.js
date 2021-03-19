import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
    <NavigationContainer>
        <Stack.Navigator
        headerMode='none'>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="App" component={BottomTabNavigator} />
        </Stack.Navigator>)
    </NavigationContainer>);
}