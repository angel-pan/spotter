import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Profiles, Metrics, Colors, Images } from '../Themes';
import DefaultTag from './DefaultTag';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';
import DefaultButton from './DefaultButton';


export default function BrowseCard() {
  const navigation = useNavigation();
  
  return (
    <View style = {styles.profileCard}>
        <View style={styles.topRow}>
            <Image style = {styles.spotterImg} source={Images.amy}/>
            <View style={styles.textPortion}>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text style={styles.spotterNameText}>Amy Anderson</Text>
                    <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => navigation.navigate('Match Bio') }>
                        <Icon
                            name='MoreInfo'
                            size={32}
                            color={Colors.mildOrange}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.normText}>Number of people Spotted: 12</Text>
            </View>
        </View>

        <View style={styles.focusRow}>
            <Text style={styles.normText}>Focus Areas: </Text>
        </View>

        <View style={styles.button}>
            <DefaultButton 
                text="Secure Spotter"
                onPress={() => navigation.navigate('Match Secured', {spotterInfo})}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    profileCard:{
        alignItems: 'flex-start',
        height: Metrics.screenHeight*0.28,
        width: Metrics.screenWidth*0.9,
        backgroundColor: 'white',
        borderRadius: Metrics.roundedBorder,
    },

    topRow: {
        flexDirection:'row',
        paddingTop: Metrics.medPadding,
        paddingLeft: Metrics.medPadding,
        paddingBottom: Metrics.medPadding,
    },

    focusRow: {
        flexDirection:'row',
        paddingLeft: Metrics.medPadding,
        paddingBottom: Metrics.smallPadding,
        
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
        // backgroundColor: 'blue',
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.gray

    },
  
    spotterNameText:{
        fontSize: 26,
        fontFamily:'OpenSans_700Bold',
        letterSpacing: 0.4
    },
  
    normText:{
        fontSize: 16,
        fontFamily: 'OpenSans_400Regular',
        marginVertical: '2%',
        
    },

    button:{
        width: "90%",
        justifyContent: 'center',
        alignSelf: 'center',
        //backgroundColor: 'cyan',
    },

  });

