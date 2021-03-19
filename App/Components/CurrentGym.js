import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Profiles, Metrics, Colors, Images } from '../Themes';
import { useNavigation } from '@react-navigation/native';
import DefaultButton from './DefaultButton';
import metrics from '../Themes/Metrics';

export default function CurrentGym() {
  const navigation = useNavigation();
  
  return (
    <View style = {styles.profileCard}>
      <Image style = {styles.spotterImg} source={Images.gym}/>
      <View style={{justifyContent: 'space-evenly', alignItems: 'center'}}>
        <View style = {styles.checkInInfo}>
            <Text style = {styles.currentlyAtText}>Checked-in at</Text>
            <Text style = {styles.gymText}>Star Alameda Gym</Text>
        </View>
        <DefaultButton text='Check Out' inverted={true}/>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  profileCard:{
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'orange',
      borderRadius: Metrics.roundedBorder,
      paddingBottom: '4%'
  },
  spotterImg:{
    height: metrics.screenHeight * .3,
    width: '100%',
    borderTopLeftRadius: Metrics.roundedBorder,
    borderTopRightRadius: Metrics.roundedBorder,
    resizeMode: 'cover',
  },

  checkInInfo:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.medPadding,
    paddingTop: Metrics.smallPadding,
  },

  gymText:{
    fontSize: metrics.screenHeight * 0.03,
    fontFamily:'OpenSans_700Bold',
    letterSpacing: 0.4,
    color: Colors.white,

  },

  currentlyAtText:{
    fontSize: metrics.screenHeight * 0.025,
    fontFamily: 'OpenSans_600SemiBold',
    color: Colors.white,
    letterSpacing: 0.4

  },

});