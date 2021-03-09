import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Images, Profiles, Metrics, Colors } from '../Themes';
import DefaultTag from './DefaultTag';
import DefaultButton from './DefaultButton';
import colors from '../Themes/Colors';

export default function SpotterProfileTop(props){
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.shadow}>
                    <Image style={styles.bioPic} source={{uri: Images.amy.uri}}/>
                </View>
                <Text style={styles.header}> Amy Anderson </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
    },

    top:{
        alignItems: 'center',
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
      height: 124,
      width: 124,
      borderRadius: 101,
      shadowOffset: {
          width: 0,
          height: 1,
        },
      shadowOpacity: 0.12,
      shadowRadius: 2.22,
    },

})
