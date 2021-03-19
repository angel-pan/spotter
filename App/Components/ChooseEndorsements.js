import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Profiles, Metrics, Colors } from '../Themes';
import DefaultTag from './DefaultTag';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';
import colors from '../Themes/Colors';
import EndorsementTag from './EndorsementTag';
import metrics from '../Themes/Metrics';

export default function ChooseEndorsements({spotterInfo}){
  return(
    <View style={styles.container}>
      <Text style={styles.text}> Check what applies to {spotterInfo.name}</Text>
      <View style = {styles.endorsementList}>
          <EndorsementTag text={'Friendy'} clicked = {true}/>
          <EndorsementTag text={'Patient'} clicked = {false}/>
          <EndorsementTag text={'Humble'} clicked = {false}/>
          <EndorsementTag text={'Honest'} clicked = {false}/>
          <EndorsementTag text={'Training'} clicked = {false}/>
          <EndorsementTag text={'Knowledgable'} clicked = {false}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: metrics.screenHeight * 0.025,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text:{
    fontFamily: 'OpenSans_400Regular',
    color: colors.grayText,
    fontSize: metrics.screenHeight * 0.020,
  },
  endorsementList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: '2%'
  }
})
