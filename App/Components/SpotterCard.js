import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Profiles, Metrics, Colors } from '../Themes';
import DefaultTag from './DefaultTag';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from '../Themes/Colors';
import Icon from './Icon';

export default function SpotterCard({spotterInfo}) {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    profileCard:{
      width: '100%',
      backgroundColor: 'white',
      borderRadius: Metrics.roundedBorder,
    },
  
    spotterImg:{
      height: '40%',
      width:'100%',
      borderTopLeftRadius: Metrics.roundedBorder,
      borderTopRightRadius: Metrics.roundedBorder,
      resizeMode: 'cover',
    },
  
    spotterInfo:{
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingHorizontal: Metrics.medPadding,
      paddingTop: Metrics.smallPadding,
      paddingBottom: Metrics.smallPadding,
    },
  
    spotterRow:{
      width: '100%',
      paddingTop: Metrics.smallPadding,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  
    spotterNameText:{
      fontSize: 26,
      fontFamily:'OpenSans_700Bold',
      letterSpacing: 0.4
    },
  
    spotterBlurbText:{
      fontSize: 16,
      fontFamily: 'OpenSans_400Regular',
      marginVertical: '2%'
  
    },

    endorseHeader:{
      fontSize: 18,
      fontFamily:'OpenSans_600SemiBold',
      paddingHorizontal: Metrics.medPadding,
    },
  
    endorsementList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginVertical: '2%'
    }
  
  });
  
  return (
    <View style = {styles.profileCard}>
      <Image style = {styles.spotterImg} source={{uri:spotterInfo.profileImage.uri}}/>

      <View style = {styles.spotterInfo}>
        <View style={styles.spotterRow}>
          <Text style = {styles.spotterNameText}>{spotterInfo.name}</Text>
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => navigation.navigate('Match Bio', {spotterInfo: spotterInfo}) }>
            <Icon
              name='MoreInfo'
              size={32}
              color={Colors.mildOrange}
            />
          </TouchableOpacity>
        </View>

        <Text style = {styles.spotterBlurbText}>{spotterInfo.bio}</Text>
      </View>

      <View style = {styles.spotterEndorsements}>
        <Text style = {styles.endorseHeader}>Endorsements: </Text>
        <View style = {styles.endorsementList}>
        {spotterInfo.endorsements.map((endorsement) =>
          <DefaultTag text={endorsement} type='endorsement' key={endorsement}/>
        )}
        </View>
      </View>
    </View>
  );
}


