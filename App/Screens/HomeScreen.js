import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import { Images, Profiles, Metrics } from '../Themes';

export default function HomeScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <View style = {styles.profileCard}>
          <Image style = {styles.spotterImg} source={Images.amy}/>


          <View style = {styles.spotterInfo}>
            <Text style = {styles.spotterNameText}>Amy Anderson</Text>
            <Text></Text>
            <Text style = {{fontSize: 18}}>Hi I'm Amy! Looking forward to teaching you what I know.</Text>
          </View>

          <View style = {styles.spotterEndorsements}>
            <Text style = {{fontSize: 22, fontWeight: 'bold'}}>Endorsements: </Text>
            <Text> </Text>
            <Text> hi </Text>
            
          </View>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // profileView: {
  //   //flex: 6,
  //   padding: Metrics.doubleBaseMargin,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },


  profileCard:{
    //height: Metrics.screenHeight*0.6,
    width: Metrics.screenWidth*0.9,
    alignItems: 'flex-start',
    //borderWidth: 1,
    //borderColor: '#C5C5C5',
    backgroundColor: 'white',
    borderRadius: Metrics.roundedBorder,
  },

  spotterImg:{
    //aspectRatio: 1,
    height: '60%',
    width: Metrics.screenWidth*0.9,
    borderTopLeftRadius: Metrics.roundedBorder,
    borderTopRightRadius: Metrics.roundedBorder,
    //resizeMode: 'contain',
  },

  spotterInfo:{
    alignItems: 'flex-start',
    padding: Metrics.medPadding,
  },

  spotterNameText:{
    fontSize: 30,
    fontWeight:'bold',
  },

  spotterEndorsements:{
    alignItems: 'flex-start',
    padding: Metrics.medPadding,
  },

});