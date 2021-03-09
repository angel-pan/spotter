import * as React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Images, Metrics } from '../Themes';
import colors from '../Themes/Colors';
import images from '../Themes/Images';
import metrics from '../Themes/Metrics';
import DefaultButton from './DefaultButton';

export default function SpotterGuidelinesBottom(props){
  return(
    <View style={styles.container}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: '25%'}}
      style={{paddingHorizontal: 3}}>
        <Text style={styles.header}> Instructions </Text>
        <View style={styles.shadow}>
          <View style={styles.infoBox}>
            <Text style={styles.text}> You can generally find me near the machines or the bikes </Text>
          </View>
        </View>
        <Text style={styles.header}> How I Look Today </Text>
        <Image style={styles.picture} source={{uri: images.amy_bio.uri}}/>
      </ScrollView>
      <View style={styles.secureSpotter}>
        <DefaultButton text={"Secure Spotter"}/>
      </View>
    </View>
  )
}

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
    aspectRatio: images.amy_bio.aspectRatio,
  },

  text:{
    fontSize: 15,
    fontFamily: 'OpenSans_400Regular',
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
    padding: 20,
    paddingHorizontal: Metrics.screenWidth * 0.05,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
    flexWrap: 'wrap',
  },
  secureSpotter: {
    position: 'absolute',
    bottom: '1%',
  }
})
