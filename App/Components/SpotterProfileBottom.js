import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Images, Profiles, Metrics, Colors } from '../Themes';
import DefaultTag from './DefaultTag';
import DefaultButton from './DefaultButton';

export default function SpotterProfileBottom(props){
  return(
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}> Bio </Text>
        <View style={styles.shadow}>
          <View style={styles.infoBox}>
            <Text style={styles.text}> Hi! I've been lifting for about 5 years now and am a regular at
            the gym here.
            </Text>
          </View>
          <View style = {styles.inline}>
            <View style={styles.square}>
              <Text style={styles.text}> Focus Area: </Text>
              <DefaultTag text='Weights' type='Weights' key='Weights'/>
              <DefaultTag text='Kickboxing' type='Kickboxing' key='Kickboxing' />
            </View>
            <View style={styles.square}>
              <Text style={styles.text}> Spotted: </Text>
              <Text style={styles.emphasize}> 12 </Text>
            </View>
          </View>
        </View>
        <Text style={styles.header}> Endorsements </Text>
          <View style={styles.shadow}>
            <View style={styles.infoBox}>
              <DefaultTag text='Friendly' type='endorsement' key='endorsement' />
              <DefaultTag text='Patient' type='endorsement' key='endorsement' />
              <DefaultTag text='Humble' type='endorsement' key='endorsement' />
              <DefaultTag text='Expert' type='endorsement' key='endorsement' />
            </View>
          </View>
        </ScrollView>
          <DefaultButton text={"Secure Spotter"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      marginTop: -Metrics.screenHeight * 0.25,
  },
  inline:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text:{
    fontSize: 15,
    fontFamily: 'OpenSans_400Regular',

  },
  emphasize:{
    fontSize: 54,
    fontFamily: 'OpenSans_300Light',
  },

  infoBox:{
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: Metrics.screenWidth * 0.05,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 20,
    width: Metrics.screenWidth * 0.9,
    flexWrap: 'wrap',

  },
  square:{
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height: Metrics.screenHeight * 0.16,
    width: Metrics.screenWidth * 0.4,
    flexDirection: 'column',
    padding: 10,

  },

  shadow:{
    shadowOffset: {
        width: 0,
        height: 1,
      },
    shadowOpacity: 0.12,
    shadowRadius: 2.22,

    elevation: 2,
  },

  header:{
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
    fontSize: 25,
    fontFamily:'OpenSans_600SemiBold',
  }
})
