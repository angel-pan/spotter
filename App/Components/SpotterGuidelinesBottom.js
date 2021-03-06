import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Images, Profiles, Metrics, Colors } from '../Themes';
import DefaultTag from './DefaultTag';
import DefaultButton from './DefaultButton';

export default function SpotterGuidelinesBottom(props){
  return(
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}> Instructions </Text>
        <View style={styles.shadow}>
          <View style={styles.infoBox}>
            <Text style={styles.text}> You can generally find me near the machines or the bikes </Text>
          </View>
        </View>
        <Text style={styles.header}> How I Look Today </Text>
        <View style={styles.shadow}>
          <Image style={styles.picture} source={Images.amy_bio}/>
        </View>
      </ScrollView>
      <DefaultButton text={"Secure Spotter"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      marginTop: -Metrics.screenHeight * 0.25,
  },

  picture:{
    height: 252,
    width: Metrics.screenWidth - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },

  text:{
    fontSize: 15,
    fontFamily: 'OpenSans_400Regular',

  },

  header:{
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
    fontSize: 25,
    fontFamily:'OpenSans_600SemiBold',
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
  infoBox:{
    backgroundColor: 'white',
    padding: 20,
    paddingHorizontal: Metrics.screenWidth * 0.05,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 20,
    width: Metrics.screenWidth * 0.9,
    flexWrap: 'wrap',

  },
})
