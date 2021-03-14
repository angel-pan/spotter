import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Metrics, Colors } from '../Themes';
import FinishEndorseScreen from '../Screens/FinishEndorseScreen'
import Screen from '../Components/Screen';
import BackButton from '../Components/BackButton';
import SearchBar from '../Components/SearchBar';
import BrowseCard from '../Components/BrowseCard';

export default function BrowseScreen() {
    return (
      <Screen>
        <View style={{justifyContent:'flex-start'}}>
          <Text style={styles.text}>Browsing Spotters</Text>
          <SearchBar />
          <View style={styles.spotterList}>
            <BrowseCard/>
          </View>    
        </View>

      </Screen>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems:'center',
  },

  text: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: Metrics.screenHeight * 0.035,
    textAlign: 'center',
    letterSpacing: 0.4,
    marginBottom: "8%",
    color: Colors.black
  },

  spotterList:{
    alignItems: 'center', 
    paddingTop: Metrics.largePadding
  },

});