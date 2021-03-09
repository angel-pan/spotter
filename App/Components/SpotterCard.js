import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Images, Profiles, Metrics, Colors } from '../Themes';
import DefaultTag from './DefaultTag';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SpotterCard({endorsements}) {
  const navigation = useNavigation();

  return (
    <View style = {styles.profileCard}>
      <Image style = {styles.spotterImg} source={{uri:Images.amy.uri}}/>


      <View style = {styles.spotterInfo}>
        <View style={styles.spotterRow}>
          <Text style = {styles.spotterNameText}>Amy Anderson</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Match Bio') }>
            <Ionicons
              name="information-circle"
              size={30}
              color={Colors.orange}
            />
          </TouchableOpacity>
        </View>

        <Text style = {styles.spotterBlurbText}>Hi I'm Amy! Looking forward to teaching you what I know.</Text>
      </View>

      <View style = {styles.spotterEndorsements}>
        <Text style = {styles.endorseHeader}>Endorsements: </Text>
        <Text> </Text>
        <View style = {styles.endorsementList}>
        {endorsements.map((endorsement) =>
          <DefaultTag text={endorsement} type='endorsement' key={endorsement} />
        )}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileCard:{
    height: Metrics.screenHeight*0.57,
    width: Metrics.screenWidth*0.9,
    alignItems: 'flex-start',
    //borderWidth: 1,
    //borderColor: '#C5C5C5',
    backgroundColor: 'white',
    borderRadius: Metrics.roundedBorder,
  },

  spotterImg:{
    //aspectRatio: 3/2,
    height: Metrics.screenHeight*0.3,
    width: Metrics.screenWidth*0.9,
    borderTopLeftRadius: Metrics.roundedBorder,
    borderTopRightRadius: Metrics.roundedBorder,
    //resizeMode: 'contain',
  },

  spotterInfo:{
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.medPadding,
    paddingTop: Metrics.smallPadding,
    paddingBottom: Metrics.smallPadding,
  },

  spotterRow:{
    paddingTop: Metrics.smallPadding,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //alignItems: 'center',
    //backgroundColor:'cyan',
  },

  spotterNameText:{
    fontSize: 28,
    fontFamily:'OpenSans_700Bold',
  },

  spotterBlurbText:{
    fontSize: 18,
    paddingTop: Metrics.smallPadding,
    fontFamily: 'OpenSans_400Regular'

  },

  spotterEndorsements:{
    alignItems: 'flex-start',
    paddingHorizontal: Metrics.medPadding,
  //  paddingTop: Metrics.smallPadding,
  },

  endorseHeader:{
    fontSize: 22,
    fontFamily:'OpenSans_600SemiBold',
  },

  endorsementList: {
    flexDirection: 'row',
    flexWrap: 'wrap',

  }

});
