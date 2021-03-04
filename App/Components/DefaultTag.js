import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';

const DefaultTag = ({text, onPress, type}) => {
    const colorSelect = type === 'endorsement' ? 'Yoga' : text;
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors[`tagBackground${colorSelect}`],
            paddingHorizontal: metrics.screenWidth * 0.03,
            paddingVertical: metrics.screenHeight * 0.008,
            borderRadius: 5,
            marginHorizontal: metrics.screenWidth * 0.007,
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
            fontSize: metrics.screenWidth * 0.04,
            color: colors[`tagText${colorSelect}`],
            textAlign: 'center'
        }
    })
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