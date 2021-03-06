import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ActivityButton from '../Components/ActivityButton';
import Screen from '../Components/Screen';
import colors from '../Themes/Colors';
import Icon from '../Components/Icon';
import { Images, Profiles, Metrics, Colors } from '../Themes';
import SpotterProfileTop from '../Components/SpotterProfileTop';
import SpotterProfileBottom from '../Components/SpotterProfileBottom';
import SpotterGuidelinesBottom from '../Components/SpotterGuidelinesBottom';

export default function MatchProfileScreen() {
    return(
      <View style={styles.container}>
        <SpotterProfileTop/>
        <SpotterGuidelinesBottom/>
      </View>
    // <Screen>
    //   <View style={styles.container}>
    //     <View style={styles.top}>
    //       <View style={styles.shadow}>
    //         <Image style={styles.bioPic} source={Images.amy}/>
    //       </View>
    //       <Text style={styles.header}> Amy Anderson </Text>
    //       <Text style={styles.text}>Bio Screen!</Text>
    //     </View>
    //     <View style={styles.bottom}>
    //       <Text> bottom </Text>
    //     </View>
    //   </View>
    // </Screen>
  );
}

const styles = StyleSheet.create({
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

    top:{
      flex: 4,
      alignItems: 'center',
      width: Metrics.screenWidth,
    },

    bottom:{
      flex: 7,
    },

    container: {
        flex: 1,
        alignItems: 'center',
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

    header:{
      fontSize: 30,
      fontFamily:'OpenSans_600SemiBold',

    },

})
