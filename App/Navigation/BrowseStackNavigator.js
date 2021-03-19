import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BrowseScreen from "../Screens/BrowseScreen";
import BioScreen from "../Screens/BioScreen";
import FinishEndorseScreen from '../Screens/FinishEndorseScreen';
import EndorsementsScreen from '../Screens/EndorsementsScreen';

const Stack = createStackNavigator();
const BrowseBio = (props) => BioScreen({...props, spotterSecured: false, nextScreen: 'Browse Secured'});
const SpotterSecured = (props) => BioScreen({...props, spotterSecured: true, nextScreen: 'Browse Endorse'});

export default function BrowseStackNavigator(){
    return (
    <Stack.Navigator
    headerMode='none'>
      <Stack.Screen name="Browse" component={BrowseScreen} />
      <Stack.Screen name="Browse Bio" component={BrowseBio} />
      <Stack.Screen name="Browse Secured" component={SpotterSecured} />
      <Stack.Screen name="Browse Endorse" component={EndorsementsScreen} />
      <Stack.Screen name="Browse Finish Endorse" component={FinishEndorseScreen} />
    </Stack.Navigator>)
}