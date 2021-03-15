import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import SessionHistoryItem from '../Components/SessionHistoryItem';


export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the home screen!</Text>

      </View>
    );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});