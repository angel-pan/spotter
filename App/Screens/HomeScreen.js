import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import { Images, Profiles, Metrics } from '../Themes';
import SpotterCard from '../Components/SpotterCard';
import DefaultButton from '../Components/DefaultButton'

export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.selectedCategory}>

          <Text>label here</Text>
        </View>

        <SpotterCard />
        <DefaultButton text={"Secure Spotter"}/>

      </View>
      

    );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedCategory: {
    backgroundColor: 'blue',
  },

  spotterView: {
    flex: 1,
  },

  buttonView:{
    flex: 1,
  },

  dotsView:{
    flex: 1,
  }


});