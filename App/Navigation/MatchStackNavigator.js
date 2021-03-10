import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MatchScreen from "../Screens/MatchScreen";
import MatchLoadingScreen from "../Screens/MatchLoadingScreen";
import MatchProfileScreen from "../Screens/MatchProfileScreen";
import MatchBioScreen from "../Screens/MatchBioScreen";
import FinishEndorseScreen from '../Screens/FinishEndorseScreen';

const Stack = createStackNavigator();

export default function MatchStackNavigator(){
    return (
    <Stack.Navigator
    headerMode='none'>
      <Stack.Screen name="Find Match" component={MatchScreen} />
      <Stack.Screen name="Loading Match" component={MatchLoadingScreen}  />
      <Stack.Screen name="Match Profiles" component={MatchProfileScreen} />
      <Stack.Screen name="Match Bio" component={MatchBioScreen} />
      <Stack.Screen name="Finish Endorse" component={FinishEndorseScreen} />
    </Stack.Navigator>)
}
