import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotesScreen from '../Screens/NotesScreen';
import NotesChooseSessionScreen from '../Screens/NotesChooseSessionScreen';
import NoteEditScreen from '../Screens/NoteEditScreen';

const Stack = createStackNavigator();

export default function MatchStackNavigator(){
    return (
    <Stack.Navigator
    headerMode='none'>
      <Stack.Screen name="View Notes" component={NotesScreen} />
      <Stack.Screen name="Choose Session" component={NotesChooseSessionScreen} />
      <Stack.Screen name="Edit Note" component={NoteEditScreen} />
    </Stack.Navigator>)
}