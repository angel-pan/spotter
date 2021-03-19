import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Profiles, Metrics, Colors, Images } from '../Themes';
import DefaultButton from './DefaultButton'

export default function CurrentlySpotting({spotterInfo, onButtonPress}) {
  console.log(spotterInfo)
  const styles = StyleSheet.create({
    profileCard:{
      height: '50%',
      width: '100%',
      borderRadius: Metrics.roundedBorder,
      backgroundColor: Colors.white,
      marginVertical: Metrics.smallPadding,
    },
  
    spotterImg:{
      height: '50%',
      width:'100%',
      borderTopLeftRadius: Metrics.roundedBorder,
      borderTopRightRadius: Metrics.roundedBorder,
      resizeMode: 'cover',
    },
  
    checkInInfo:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: Metrics.medPadding,
      paddingVertical: Metrics.smallPadding,
    },
  
    gymText:{
      fontSize: 26,
      fontFamily:'OpenSans_700Bold',
      letterSpacing: 0.4,

    },
  
    currentlyAtText:{
      fontSize: 20,
      fontFamily: 'OpenSans_600SemiBold',
      color: Colors.grayText,
  
    },
  
  });
  
  return (
    <View style = {styles.profileCard}>
      <Image style = {styles.spotterImg} source={{uri: spotterInfo.profileImage.uri}}/>
      <View style={{justifyContent: 'space-evenly', flex: 1}}>
        <View style = {styles.checkInInfo}>
            <Text style = {styles.currentlyAtText}>Currently Spotting With</Text>
            <Text style = {styles.gymText}>{spotterInfo.name}</Text>
            <DefaultButton 
              text="Complete Session" 
              onPress={onButtonPress} />
        </View>

      </View>
    </View>
  );
}


