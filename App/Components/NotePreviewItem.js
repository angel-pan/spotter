import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Profiles, Metrics, Colors, Images } from '../Themes';
import DefaultTag from './DefaultTag';
import { useNavigation } from '@react-navigation/native';


export default function NotePreviewItem({note}) {
  const navigation = useNavigation();
  return (
    <View style = {styles.profileCard}>
        <View style={styles.topRow}>
            <Image style = {styles.spotterImg} source={{uri: note.sessionInfo.spotterInfo.image.uri}}/>
            <View style={styles.textPortion}>
                <Text style={styles.noteTitle}>{note.title}</Text>
                <Text style={styles.normText}>{note.sessionInfo.timestamp}</Text>
            </View>
        </View>

        <View style={styles.tagRow}>
            <Text style={styles.tagText}>Tags: </Text>
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

    topRow: {
        flexDirection:'row',
        paddingLeft: Metrics.medPadding,
        paddingBottom: Metrics.medPadding,
    },

    tagRow: {
        width: '90%',
        flexDirection:'row',
        alignSelf: 'center',
        paddingBottom: Metrics.smallPadding,
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

    tagText:{
        fontSize: 16,
        fontFamily: 'OpenSans_400Regular',
        marginVertical: '2%',
    },

    noteText:{
        fontSize: 16,
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

