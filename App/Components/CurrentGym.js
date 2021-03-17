import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Profiles, Metrics, Colors, Images } from '../Themes';
import DefaultTag from './DefaultTag';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';

export default function CurrentGym() {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    profileCard:{
      height: '35%',
      width: '100%',
      backgroundColor: Colors.orange,
      borderRadius: Metrics.roundedBorder,
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
      color: Colors.white,

    },
  
    currentlyAtText:{
      fontSize: 20,
      fontFamily: 'OpenSans_600SemiBold',
      color: Colors.white,
  
    },
  
  });
  
  return (
    <View style = {styles.profileCard}>
      <Image style = {styles.spotterImg} source={Images.amy}/>
      <View style={{justifyContent: 'space-evenly', flex: 1}}>
        <View style = {styles.checkInInfo}>
            <Text style = {styles.currentlyAtText}>Checked-in at</Text>
            <Text style = {styles.gymText}>Star Alameda Gym</Text>
        </View>

      </View>
    </View>
  );
}


