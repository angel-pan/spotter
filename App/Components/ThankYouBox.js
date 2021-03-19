import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';

const ThankYouBox = () => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.searchInput} 
                multiline={true}
                selectionColor={colors.orange}
                placeholder ='Send a thank you message'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: metrics.screenHeight * 0.2,
        backgroundColor: colors.white,
        borderRadius: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '4%'
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingTop: '4%',
        paddingLeft: '2%',
        paddingRight: '2%',
        paddingBottom: '4%',
        fontSize: metrics.screenWidth * 0.035,
        fontFamily: 'OpenSans_400Regular',
        color: colors.grayText,
        letterSpacing: 0.5,
    },
})

export default ThankYouBox;