import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';
import {TouchableNoHighlight, TouchableWithoutFeedback} from 'react-native-gesture-handler';

const DefaultTag = ({text}) => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    let background = count%2 == 1 ?  colors.lightOrange: colors.background;
    let border = count%2 == 1 ? colors.lightOrange: colors.grayText;
    let textColor = count%2 == 1? colors.orange: colors.grayText;
    const styles = StyleSheet.create({
        container: {
            backgroundColor: background,
            paddingHorizontal: metrics.screenWidth * 0.03,
            paddingVertical: metrics.screenHeight * 0.008,
            borderRadius: 5,
            marginHorizontal: metrics.screenWidth * 0.01,
            marginVertical: metrics.screenHeight * 0.005,
            borderColor: border,
            borderWidth: 1,
        },
        text: {
            fontFamily: 'OpenSans_400Regular',
            fontSize: metrics.screenWidth * 0.04,
            color: textColor,
            textAlign: 'center'
        }
    })
    return (
        <TouchableOpacity
          style={styles.container}
          onPress= {onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}


export default DefaultTag;
