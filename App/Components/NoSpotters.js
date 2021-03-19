import * as React from 'react';
import Icon from './Icon';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../Themes/Colors';

export default function NoSpotters() {
    return (
      <View style={styles.container}>
        <Icon name='SadFace' size={168} color={colors.gray}/>
        <Text style={styles.text}>There are no Spotters available at the moment.</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 20,
        letterSpacing: 0.4,
        color: colors.gray,
        textAlign: 'center',
    },
    container: {
        alignItems: 'center', flex: 2, 
        justifyContent: 'center', 
        paddingBottom: '10%'
    }
});