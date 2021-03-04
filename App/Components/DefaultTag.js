import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../Themes/Colors';

const DefaultTag = ({text, name, onPress}) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors[`tagBackground${text}`],
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 5,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.12,
            shadowRadius: 2.22,
            elevation: 2,
        },
        text: {
            fontFamily: 'OpenSans_400Regular',
            fontSize: 18,
            color: colors[`tagText${text}`],
            textAlign: 'center'
        }
    })
    console.log(name)
    return (
        <TouchableOpacity
          style={styles.container}
          onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}


export default DefaultTag;