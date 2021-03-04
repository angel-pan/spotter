import React from 'react';
import { View, StyleSheet, SafeAreaView} from 'react-native';
import colors from '../Themes/Colors';
import Constants from 'expo-constants';

const Screen = ({children}) => {
    return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight, 
        paddingVertical: '10%',
        paddingHorizontal: '10%',
        backgroundColor: colors.background, 
        flex: 1,
        justifyContent: 'center',
    },
});

export default Screen;