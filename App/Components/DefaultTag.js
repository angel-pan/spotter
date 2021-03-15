import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';

const DefaultTag = ({text, onPress, type, scale = 1}) => {
    const colorSelect = type === 'endorsement' ? 'Yoga' : text;
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors[`tagBackground${colorSelect}`],
            paddingHorizontal: metrics.screenWidth * 0.03 * scale,
            paddingVertical: metrics.screenHeight * 0.008 * scale,
            borderRadius: 5,
            marginHorizontal: metrics.screenWidth * 0.01 * scale,
            marginVertical: metrics.screenHeight * 0.005 * scale,
        },
        text: {
            fontFamily: 'OpenSans_400Regular',
            fontSize: metrics.screenWidth * 0.04 * scale,
            color: colors[`tagText${colorSelect}`],
            textAlign: 'center',
            letterSpacing: 0.4
        }
    })
    return (
        <View
          style={styles.container}
          onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}


export default DefaultTag;
