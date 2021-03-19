import * as React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Metrics } from '../Themes';

export default function SpotterGuidelinesBottom({spotterInfo}){
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    picture:{
      height: 'auto',
      width: '100%',
      borderRadius: 10,
      resizeMode: 'contain',
      aspectRatio: spotterInfo.dailyImage.aspectRatio,
    },

    text:{
      fontSize: 15,
      fontFamily: 'OpenSans_400Regular',
      lineHeight: 25,
      letterSpacing: 0.4
    },

    header:{
      paddingTop: 15,
      paddingBottom: 10,
      fontSize: 25,
      fontFamily:'OpenSans_600SemiBold',
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
    infoBox:{
      backgroundColor: 'white',
      padding: 15,
      paddingHorizontal: Metrics.screenWidth * 0.05,
      borderRadius: 10,
      flexDirection: 'row',
      marginBottom: 20,
      width: '100%',
      flexWrap: 'wrap',
    },
  });

  return(
    <View style={styles.container}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={{paddingHorizontal: 3}}>
        <Text style={styles.header}> Instructions </Text>
        <View style={styles.shadow}>
          <View style={styles.infoBox}>
            <Text style={styles.text}>{spotterInfo.instructions}</Text>
          </View>
        </View>
        <Text style={styles.header}> How I Look Today </Text>
        <Image style={styles.picture} source={{uri: spotterInfo.dailyImage.uri}}/>
      </ScrollView>
    </View>
  )
}
