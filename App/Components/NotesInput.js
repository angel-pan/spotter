import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Profiles, Metrics, Colors } from '../Themes';
import DefaultTag from './DefaultTag';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';

const NotesInput = () => {
  let date = new Date().toDateString();
  return(
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        placeholderTextColor = '#333333'
        selectionColor={colors.orange}
        maxLength= {50}
        placeholder ='Title'/>
      <Text style = {styles.date}>{date} </Text>
      <TextInput
        style={styles.body}
        placeholderTextColor = '#828282'
        selectionColor={colors.orange}
        multiline={true}
        placeholder ='Today I learned....'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height: metrics.screenHeight * 0.65,
  },
  title:{
    fontFamily: 'OpenSans_700Bold',
    fontSize: 25,
  },
  body:{
    marginTop: 30,
    fontFamily: 'OpenSans_400Regular',
    fontSize: 14,
    color: colors.black,
    lineHeight: 15,
  },
  date:{
    marginTop: 10,
    fontFamily: 'OpenSans_400Regular',
    fontSize: 13,
    color: '#828282',
  }
})


export default NotesInput
