import * as React from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../Components/SearchBar';
import Screen from '../Components/Screen';
import NotesPreviewItem from '../Components/NotePreviewItem'

export default function NotesScreen() {
    return (
      <Screen>
        <Text>Spotting Notes</Text>
        <SearchBar />
        <NotesPreviewItem />
      </Screen>
    );
}