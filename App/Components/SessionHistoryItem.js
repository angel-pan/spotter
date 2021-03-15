import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Profiles, Metrics, Colors, Images } from '../Themes';
import DefaultTag from './DefaultTag';
import { useNavigation } from '@react-navigation/native';


export default function SessionHistoryItem() {
  const navigation = useNavigation();
  
  return (
    <View style = {styles.profileCard}>
        <View style={styles.row}>
            <Image style = {styles.spotterImg} source={Images.amy}/>
            <View style={styles.textPortion}>
                <Text style={styles.spotterName}>Amy Anderson</Text>
                <Text style={styles.normText}>14 Feb 2021, 02:31PM</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    profileCard:{
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: Metrics.screenHeight*0.12,
        width: Metrics.screenWidth*0.9,
        backgroundColor: 'white',
        borderRadius: Metrics.roundedBorder,
    },

    row: {
        flexDirection:'row',
        paddingTop: Metrics.medPadding,
        paddingLeft: Metrics.medPadding,
        paddingBottom: Metrics.medPadding,
    },

    spotterImg:{
        height: Metrics.screenWidth*0.2,
        width: Metrics.screenWidth*0.2,
        borderRadius: 101,
        shadowOffset: {
            width: 0,
            height: 1,
          },
        shadowOpacity: 0.12,
        shadowRadius: 2.22,
      },
  
    textPortion:{
        paddingLeft: Metrics.smallPadding,
        justifyContent: 'center',
        width: '70%',
    },
  
    spotterName:{
        fontSize: 22,
        fontFamily:'OpenSans_700Bold',
        letterSpacing: 0.4,
        paddingBottom: Metrics.smallPadding,
    },
  
    normText:{
        fontSize: 14,
        fontFamily: 'OpenSans_400Regular',
        color: Colors.grayText, 
    },

  });

