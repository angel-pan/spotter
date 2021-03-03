import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar';
import ActivityButton from '../Components/ActivityButton';
import Screen from '../Components/Screen';

const items = ["Weights", "Yoga", "Diet", "Cardio", "Kickboxing", "General"];

export default function MatchScreen() {
    return (
      <Screen>
        <Text style={styles.text}>What do you need help in today?</Text>
        <SearchBar />
        <View style={styles.activityList}>
          {items.map((item) => <ActivityButton name={item}/>)}
        </View>
      </Screen>
    );
}

const styles = StyleSheet.create({
  activityList: {
    maxHeight: '100%',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'center'
  },
  text: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 30,
    textAlign: 'center',
    letterSpacing: 0.4,
    marginBottom: "8%"
  }

});