import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MatchScreen from "../Screens/MatchScreen";
import MatchLoadingScreen from "../Screens/MatchLoadingScreen";
import MatchProfileScreen from "../Screens/MatchProfileScreen";
import BioScreen from "../Screens/BioScreen";
import FinishEndorseScreen from '../Screens/FinishEndorseScreen';
import EndorsementsScreen from '../Screens/EndorsementsScreen';

const Stack = createStackNavigator();
const MatchBio = (props) => BioScreen({...props, spotterSecured: false, nextScreen: 'Match Secured'});
const SpotterSecured = (props) => BioScreen({...props, spotterSecured: true, nextScreen: 'Match Endorse'});
const MatchEndorse = (props) => EndorsementsScreen({...props, tab: 'Match'})

export default function MatchStackNavigator(){
    return (
    <Stack.Navigator
    headerMode='none'>
      <Stack.Screen name="Find Match" component={MatchScreen} />
      <Stack.Screen name="Loading Match" component={MatchLoadingScreen}  />
      <Stack.Screen name="Match Profiles" component={MatchProfileScreen} />
      <Stack.Screen name="Match Bio" component={MatchBio} />
      <Stack.Screen name="Match Secured" component={SpotterSecured} />
      <Stack.Screen name="Match Endorse" component={MatchEndorse} />
      <Stack.Screen name="Match Finish Endorse" component={FinishEndorseScreen} />
    </Stack.Navigator>)
}
