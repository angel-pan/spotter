import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Images, Profiles, Metrics, Colors } from '../Themes';
import DefaultTag from './DefaultTag';
import DefaultButton from './DefaultButton';

export default function SpotterProfileTop(props){
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.shadow}>
                    <Image style={styles.bioPic} source={Images.amy}/>
                </View>
                <Text style={styles.header}> Amy Anderson </Text>
            </View>
        </View>

    );

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },

    top:{
        // flex: 2,
        alignItems: 'center',
        width: Metrics.screenWidth,
        paddingTop: Metrics.medPadding,
        paddingBottom: Metrics.medPadding,
        //backgroundColor: 'cyan',
      },

    header:{
        fontSize: 30,
        fontFamily:'OpenSans_600SemiBold',
        paddingTop: Metrics.smallPadding,
        paddingBottom: Metrics.medPadding,
    },

    text: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 15,
    },

    shadow:{
      shadowOffset: {
          width: 0,
          height: 1,
        },
      shadowOpacity: 0.12,
      shadowRadius: 2.22,

      elevation: 2,
    },

    bottom:{
      flex: 7,
    },

    bioPic:{
      marginTop: Metrics.screenHeight * 0.07,
      height: 124,
      width: 124,
      borderRadius: 101,
      shadowOffset: {
          width: 0,
          height: 1,
        },
      shadowOpacity: 0.12,
      shadowRadius: 2.22,

      //elevation: 2,
    },



})
