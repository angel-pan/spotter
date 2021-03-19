import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Profiles, Metrics, Colors, Images } from '../Themes';
import DefaultTag from './DefaultTag';
import colors from '../Themes/Colors';


export default function NotePreviewItem({note, header}) {
  return (
    <View style = {styles.profileCard}>
        {header && <Text style={styles.header}>{header}</Text>}
        <View style={styles.topRow}>
            <Image style = {styles.spotterImg} source={{uri: note.sessionInfo.spotterInfo.image.uri}}/>
            <View style={styles.textPortion}>
                <Text style={styles.noteTitle}>{note.title}</Text>
                <Text style={styles.normText}>{note.sessionInfo.timestamp}</Text>
            </View>
        </View>

        <View style={styles.tagRow}>
          {note.tags.length > 0 && <Text style={styles.tagText}>Tags: </Text>}
          {note.tags.map((focusArea) => 
          <DefaultTag text={focusArea} key={focusArea} scale={0.8}/>)}
        </View>

        <View >
            <Text 
              style={styles.noteText} 
              numberOfLines={3} 
              ellipsizeMode='tail'>
                  {note.body}
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    profileCard:{
        alignItems: 'flex-start',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: Metrics.roundedBorder,
        paddingHorizontal: 10,
        paddingVertical: 20
    },

    header: {
      fontSize: 23.55,
      fontFamily:'OpenSans_600SemiBold',
      letterSpacing: 0.4,
      paddingBottom: Metrics.smallPadding,
      color: colors.grayText,
      alignSelf: 'center'
    },

    topRow: {
        flexDirection:'row',
        paddingLeft: Metrics.medPadding,
    },

    tagRow: {
        width: '90%',
        flexDirection:'row',
        alignSelf: 'center',
        paddingVertical: Metrics.smallPadding,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.gray
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
  
    noteTitle:{
        fontSize: 17,
        fontFamily:'OpenSans_600SemiBold',
        letterSpacing: 0.4,
        paddingBottom: Metrics.smallPadding,
        color: colors.black
    },
  
    normText:{
        fontSize: 13,
        fontFamily: 'OpenSans_400Regular',
        color: Colors.grayText, 
    },

    tagText:{
        fontSize: 12,
        fontFamily: 'OpenSans_400Regular',
        marginVertical: '2%',
    },

    noteText:{
        fontSize: 13,
        fontFamily: 'OpenSans_400Regular',
        marginVertical: '2%',
        flexWrap: 'wrap',
        paddingHorizontal: Metrics.medPadding,
        paddingTop: Metrics.smallPadding,
        color: Colors.black,
        letterSpacing: 0.4,
        lineHeight: 25
    },


  });

