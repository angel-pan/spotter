import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';

export default function HomeScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Welcome to the home screen!</Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});