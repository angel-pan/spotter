import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../Themes/Colors';
import DefaultButton from './DefaultButton';
import metrics from '../Themes/Metrics';
import { useNavigation } from '@react-navigation/native';

export default function NoRecentNotes() {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
              <Text style={styles.text}>No Recent Notes</Text>
              <DefaultButton 
                text='+ Add Note' 
                onPress={() => {
                    navigation.navigate('Notes', {screen: 'View Notes'});
                }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 23.55,
        letterSpacing: 0.4,
        color: colors.grayText,
        textAlign: 'center',
    },
    card: {
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: metrics.roundedBorder,
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 180
    }
});