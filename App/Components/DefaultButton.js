import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../Themes/Colors';

const DefaultButton = ({text, onPress}) => {
    return (
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.orange,
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 100,
        shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.12,
          shadowRadius: 2.22,
          
          elevation: 2,
    },
    text: {
        color: colors.white,
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 17.31
    }
});

export default DefaultButton;