import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Profiles, Metrics, Colors } from '../Themes';
import DefaultTag from './DefaultTag';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';

export default function SessionCard({session}) {
  return(
    <View style={styles.profileCard}>
      <Image style = {styles.spotterImg} source={{uri: session.spotterInfo.image.uri}}/>
      <View style={styles.textPortion}>
        <Text style={styles.title}>{session.spotterInfo.name}</Text>
        <Text style={styles.normText}>{session.timestamp}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    profileCard:{
        width: '100%',
        backgroundColor: 'white',
        borderRadius: Metrics.roundedBorder,
        padding: 15,
        flexDirection: 'row'
    },

    topRow: {
        flexDirection:'row',
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
  
    normText:{
        fontSize: 14,
        fontFamily: 'OpenSans_400Regular',
        color: Colors.grayText, 
    },

    title:{
        fontSize: 20,
        fontFamily:'OpenSans_600SemiBold',
        letterSpacing: 0.4,
        paddingBottom: Metrics.smallPadding,
    },
  });
