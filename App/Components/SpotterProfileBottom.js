import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Profiles, Metrics, Colors } from '../Themes';
import DefaultTag from './DefaultTag';
import DefaultButton from './DefaultButton';

export default function SpotterProfileBottom({spotterInfo}){
  return(
    <View style={styles.container}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: '25%'}}
      style={{paddingHorizontal: 3}}>
        <Text style={styles.header}> Bio </Text>
        <View style={styles.shadow}>
          <View style={styles.infoBox}>
            <Text style={styles.text}> {spotterInfo.bio} </Text>
          </View>
          <View style = {styles.inline}>
            <View style={styles.square}>
              <Text style={styles.text}> Focus Area: </Text>
              {spotterInfo.focusAreas.map((focusArea)=>
                <DefaultTag text={focusArea} />
              )}
            </View>
            <View style={styles.square}>
              <Text style={styles.text}> Spotted: </Text>
              <Text style={styles.emphasize}> {spotterInfo.spotted} </Text>
            </View>
          </View>
        </View>
        <Text style={styles.header}> Endorsements </Text>
          <View style={styles.shadow}>
            <View style={styles.infoBox}>
              {spotterInfo.endorsements.map((endorsement)=> 
                <DefaultTag text={endorsement} type='endorsement' />
              )}
            </View>
          </View>
        </ScrollView>
        <View style={styles.secureSpotter}>
          <DefaultButton  text={"Secure Spotter"}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
  },
  inline:{
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: '100%',
    flexWrap: 'wrap',

  },
  square:{
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '47%',
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
  },

  header:{
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 25,
    fontFamily:'OpenSans_600SemiBold',
  },
  secureSpotter: {
    position: 'absolute',
    bottom: '1%'
  }
})
