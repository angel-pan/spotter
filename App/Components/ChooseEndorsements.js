import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Profiles, Metrics, Colors } from '../Themes';
import DefaultTag from './DefaultTag';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';
import colors from '../Themes/Colors';

export default function ChooseEndorsements({spotterInfo}){
  return(
    <View style={styles.container}>
      <Text style={styles.text}> Check what applies to {spotterInfo.name}</Text>
      <View style = {styles.endorsementList}>
          <DefaultTag text={'Friendy'} type={'endorsement'} key={'Friendly'}/>
          <DefaultTag text={'Patient'} type={'endorsement'} key={'Patient'}/>
          <DefaultTag text={'Humble'} type={'endorsement'} key={'Humble'}/>
          <DefaultTag text={'Honest'} type={'endorsement'} key={'Honest'}/>
          <DefaultTag text={'Training'} type={'endorsement'} key={'Training'}/>
          <DefaultTag text={'Knowledgable'} type={'endorsement'} key={'Knowledgable'}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 15,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text:{
    fontFamily: 'OpenSans_400Regular',
    color: '#828282',
    fontSize: 15,
  },
  endorsementList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: '2%'
  }
})
