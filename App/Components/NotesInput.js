import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, TextInput, OpaqueColorValue } from 'react-native';
import DefaultTag from './DefaultTag';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';

const NotesInput = ({title, onTitleChange, body, onBodyChange, tags, onTagChange, timestamp}) => {
  return(
    <View style={styles.container}>
      <TextInput
        editable={true}
        style={styles.title}
        placeholderTextColor = {colors.black}
        selectionColor={colors.orange}
        maxLength= {50}
        placeholder ='Title'
        value={title}
        onChangeText={onTitleChange}/>
      <Text style = {styles.date}>{timestamp}</Text>
      <View style={{alignItems: 'flex-start', marginVertical: 10}}>
        {tags.map((tag) => 
        <DefaultTag text={tag} scale={0.8} key={tag}/>
        )}
      </View>
      <TextInput
        editable={true}
        style={styles.body}
        placeholderTextColor = {colors.grayText}
        selectionColor={colors.orange}
        multiline={true}
        placeholder ='Today I learned....'
        value={body}
        onChangeText={onBodyChange}/>
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
    letterSpacing: 0.4,
    color: colors.black
  },
  body:{
    fontFamily: 'OpenSans_400Regular',
    fontSize: 14,
    color: colors.black,
    lineHeight: 25,
    letterSpacing: 0.4
  },
  date:{
    marginTop: 10,
    fontFamily: 'OpenSans_400Regular',
    fontSize: 13,
    color: colors.grayText,
  }
})


export default NotesInput;
