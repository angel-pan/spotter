import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import { Metrics } from '../Themes';
import CurrentGym from '../Components/CurrentGym';
import CurrentlySpotting from '../Components/CurrentlySpotting';
import Screen from '../Components/Screen';



export default function HomeScreen() {
    return (
      <Screen>
        {/* <Text>Welcome to the home screen!</Text> */}
        <View style={styles.textComponent}>
          <Text style={styles.greetingText}>Hi User,</Text>
          <Text style={styles.welcomeBackText}>Welcome back!</Text>
        </View>

        <View style={styles.container}>
          <CurrentGym/>
          <CurrentlySpotting/>
        </View>

      </Screen>
    );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  textComponent:{
    paddingBottom: Metrics.smallPadding,
  },

  greetingText:{
    fontSize: 20,
    fontFamily:'OpenSans_700Bold',
    letterSpacing: 0.4,
  },

  welcomeBackText:{
    fontSize: 26,
    fontFamily:'OpenSans_700Bold',
    letterSpacing: 0.4,
  },


});