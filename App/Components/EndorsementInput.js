import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Profiles, Metrics, Colors } from '../Themes';
import DefaultTag from './DefaultTag';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';
import colors from '../Themes/Colors';

export default class EndorsementInput extends React.Component{
  constructor(props) {
     super(props);
     this.state = {
      value:''
      };
    }
  render(){
  return(
    <View style={styles.container}>
      <TextInput style={styles.input}
      placeholder="Add comments for spotter here!"
      placeholderTextColor = '#828282'
      selectionColor = '#FFA21F'
      multiline = 'true'
      maxLength = {300}
      value = {this.state.value}
      onChangeText={(value) => this.setState({value})}/>
      <View style={styles.count}>
        <Text style = {styles.text}>
            Characters: {this.state.value.length}/300
        </Text>
      </View>
    </View>

  )
}
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.background,
  },
  count:{
    alignItems: 'flex-end',
    paddingHorizontal: Metrics.largePadding,
  },
  text:{
    fontFamily: 'OpenSans_400Regular',
    color: '#828282',
  },
  input:{
    paddingBottom: 0,
    textAlignVertical: 'top',
    fontFamily: 'OpenSans_400Regular',
    margin: Metrics.screenWidth * 0.05,
    padding: Metrics.medPadding,
    paddingTop: 20,
    height: Metrics.screenHeight * 0.15,
    borderRadius: 10,
    backgroundColor: 'white',
    width: Metrics.screenWidth * 0.9,
    fontSize: 20,
  },
})
