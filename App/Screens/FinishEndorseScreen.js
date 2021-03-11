import * as React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Screen from '../Components/Screen';
import SpotterProfileTop from '../Components/SpotterProfileTop';
import BackButton from '../Components/BackButton';
import { Profiles, Metrics, Colors } from '../Themes';
import DefaultButton from '../Components/DefaultButton';
import { Ionicons } from '@expo/vector-icons'; 


export default function FinishEndorseScreen({navigation, route}) {
    return (
        <Screen>
            <BackButton onPress={() => navigation.navigate('Match Bio')}/>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <SpotterProfileTop {...route.params} text='Session Completed!'/>
                </View>

                <View style={styles.bottomHalf}>
                    <Text style={styles.thankYouTextTop}>Thank you for the</Text>
                    <Text style={styles.thankYouTextBottom}>feedback!</Text>
                    <DefaultButton text="+ Add Note"/>
                    <Text 
                      style={styles.backToHomeText} 
                      onPress={() => {
                          navigation.popToTop(); 
                          navigation.navigate('Home');
                      }}>
                            Back to Home</Text>
                </View>

            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: 'flex-start', 
        alignItems:'center',
        paddingTop: Metrics.smallPadding,
    },

    topSection: {
        flex: 1,
        paddingBottom: Metrics.screenHeight*0.05,
        alignItems:'center',

        backgroundColor: Colors.background,
        width: Metrics.screenWidth,
        shadowColor: Colors.backArrowGray,
        shadowOpacity: 1,
        shadowRadius: 0.9,
        shadowOffset: {
            height: 1,
            width: 1
        },
    },

    bottomHalf:{
        flex: 2,
        justifyContent: 'center', 
        alignItems:'center',
    },

    thankYouTextTop: {
        color: Colors.grayText,
        fontSize: 26,
        fontFamily:'OpenSans_400Regular',
        
    },

    thankYouTextBottom: {
        color: Colors.grayText,
        fontSize: 26,
        fontFamily:'OpenSans_400Regular',
        paddingBottom: Metrics.screenHeight*0.05,
        
    },

    backToHomeText: {
        color: Colors.orange,
        fontSize: 18,
        fontFamily:'OpenSans_400Regular',
        paddingTop: Metrics.screenHeight*0.02,
    }

})