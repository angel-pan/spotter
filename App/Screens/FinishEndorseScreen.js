import * as React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Screen from '../Components/Screen';
import SpotterProfileTop from '../Components/SpotterProfileTop';
import { Metrics, Colors } from '../Themes';
import DefaultButton from '../Components/DefaultButton';
import { Session } from '../Themes/Data';


export default function FinishEndorseScreen({navigation, route}) {
    const session = new Session();
    session.fromSpotterInfo(route.params.spotterInfo)
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <SpotterProfileTop {...route.params} text='Session Completed!'/>
                </View>

                <View style={styles.bottomHalf}>
                    <Text style={styles.thankYouTextTop}>Thank you for the</Text>
                    <Text style={styles.thankYouTextBottom}>feedback!</Text>
                    <DefaultButton text="+ Add Note" onPress={() => navigation.navigate('Notes', {screen: 'Edit Note', params: {session: session}})}/>
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
        fontSize: Metrics.screenHeight * 0.030,
        fontFamily:'OpenSans_400Regular',
        
    },

    thankYouTextBottom: {
        color: Colors.grayText,
        fontSize: Metrics.screenHeight * 0.030,
        fontFamily:'OpenSans_400Regular',
        paddingBottom: Metrics.screenHeight*0.05,
        
    },

    backToHomeText: {
        color: Colors.orange,
        fontSize: Metrics.screenHeight * 0.020,
        fontFamily:'OpenSans_400Regular',
        paddingTop: Metrics.screenHeight*0.02,
    }

})