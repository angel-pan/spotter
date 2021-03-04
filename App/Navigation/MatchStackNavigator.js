import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MatchScreen from "../Screens/MatchScreen";
import MatchLoadingScreen from "../Screens/MatchLoadingScreen";

const Stack = createStackNavigator();

export default function MatchStackNavigator(){
    return (
    <Stack.Navigator
    headerMode='none'>
      <Stack.Screen name="Find Match" component={MatchScreen} />
      <Stack.Screen name="Loading Match" component={MatchLoadingScreen} />
    </Stack.Navigator>)
}