import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Profiles, Metrics, Colors } from '../Themes';
import colors from '../Themes/Colors';

export default function SpotterProfileTop({spotterInfo, text}){
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.shadow}>
                    <Image style={styles.bioPic} source={{uri: spotterInfo.profileImage.uri}}/>
                </View>
                <Text style={styles.header}>{spotterInfo.name}</Text>
                {text === null ? null : <Text style={styles.text}>{text}</Text>}
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
        marginBottom: Metrics.smallPadding
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

    text: {
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 24,
      color: colors.orange,
      paddingBottom: Metrics.smallPadding
    }

})
