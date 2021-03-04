import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import { Images, Profiles, Metrics } from '../Themes';
import SpotterCard from '../Components/SpotterCard';
import DefaultButton from '../Components/DefaultButton'

const endorsements = ['Friendly', 'Patient', 'Knowledgeable'];

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