import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import colors from '../Themes/Colors';

const Screen = ({children}) => {
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight, 
        paddingVertical: 150,
        paddingHorizontal: '10%',
        backgroundColor: colors.background, 
        flex: 1,
    },
});

export default Screen;