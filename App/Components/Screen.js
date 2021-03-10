import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../Themes/Colors';
import Constants from 'expo-constants';

const Screen = ({children}) => {
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight, 
        paddingTop: '10%',
        paddingHorizontal: '8%',
        backgroundColor: colors.background, 
        flex: 1,
        justifyContent: 'center',
    },
});

export default Screen;